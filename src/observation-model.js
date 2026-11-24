import * as THREE from "three";
import { GLTFLoader } from "../vendor/three/loaders/GLTFLoader.js";

const MODEL_HEIGHT = 1;
const CAMERA_VIEW_HEIGHT = 1.16;
const FRAMING_SAFE_HEIGHT_RATIO = 0.84;
const FRAMING_SAFE_WIDTH_RATIO = 0.9;
const MAX_CACHED_MODELS = 3;
const ORBIT_X_AXIS = new THREE.Vector3(1, 0, 0);
const ORBIT_Y_AXIS = new THREE.Vector3(0, 1, 0);
const STUDY_VIEWS = [
  { rotationX: -0.025, rotationY: 0.08, zoom: 0.94, scale: 1 },
  { rotationX: 0.035, rotationY: -0.34, zoom: 0.94, scale: 4 / 3 },
  { rotationX: -0.08, rotationY: 0.46, zoom: 0.94, scale: 5 / 3 },
  { rotationX: 0.015, rotationY: -0.12, zoom: 0.94, scale: 2 },
];

export function createObservationModel({ canvas }) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 20);
  camera.position.set(0, 0, 3.2);
  camera.lookAt(0, 0, 0);

  const pivot = new THREE.Group();
  const modelRoot = new THREE.Group();
  pivot.add(modelRoot);
  scene.add(pivot);

  const ambientLight = new THREE.AmbientLight(0xfff7ec, 0.55);
  scene.add(ambientLight);

  const frontLightTarget = new THREE.Object3D();
  frontLightTarget.position.set(0, 0, 0);
  scene.add(frontLightTarget);

  const frontLight = new THREE.DirectionalLight(0xfff8ee, 2.65);
  frontLight.position.set(0, MODEL_HEIGHT * 0.08, 4.5);
  frontLight.target = frontLightTarget;
  scene.add(frontLight);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const modelCache = new Map();
  const loadingModels = new Map();
  let activeUrl = null;
  let activeModelSize = { width: 1, height: 1 };
  let activeViewScale = 1;
  let visible = false;
  let animationFrame = 0;
  let startedAt = 0;
  let studyFeatureIndex = null;
  let manualRotationX = 0;
  let manualRotationY = 0;
  let featureZoom = 1;
  let currentStudyView = { rotationX: 0, rotationY: 0, zoom: 1, scale: 1 };
  const orbitYaw = new THREE.Quaternion();
  const orbitPitch = new THREE.Quaternion();
  const rotatedBoundsCorner = new THREE.Vector3();
  let activeBoundsCorners = [];

  function disposeModel(model) {
    const textures = new Set();
    model.traverse((child) => {
      if (!child.isMesh) return;
      child.geometry?.dispose();
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((material) => {
        if (!material) return;
        Object.values(material).forEach((value) => {
          if (value?.isTexture) textures.add(value);
        });
        material.dispose();
      });
    });
    textures.forEach((texture) => texture.dispose());
  }

  function trimModelCache() {
    while (modelCache.size > MAX_CACHED_MODELS) {
      const candidate = [...modelCache.keys()].find((url) => url !== activeUrl);
      if (!candidate) break;
      const model = modelCache.get(candidate);
      modelCache.delete(candidate);
      disposeModel(model);
    }
  }

  function render(time = performance.now()) {
    if (!visible) return;
    const targetView = studyFeatureIndex === null
      ? {
          rotationX: manualRotationX,
          rotationY: reducedMotion.matches
            ? 0
            : Math.sin((time - startedAt) * 0.00042) * 0.28 + manualRotationY,
          zoom: 1,
          scale: 1,
        }
      : {
          ...STUDY_VIEWS[studyFeatureIndex % STUDY_VIEWS.length],
          rotationX:
            STUDY_VIEWS[studyFeatureIndex % STUDY_VIEWS.length].rotationX
            + manualRotationX,
          rotationY:
            STUDY_VIEWS[studyFeatureIndex % STUDY_VIEWS.length].rotationY
            + manualRotationY,
        };
    const interpolation = reducedMotion.matches ? 1 : 0.12;
    currentStudyView.rotationX +=
      (targetView.rotationX - currentStudyView.rotationX) * interpolation;
    currentStudyView.rotationY +=
      (targetView.rotationY - currentStudyView.rotationY) * interpolation;
    currentStudyView.zoom +=
      (targetView.zoom - currentStudyView.zoom) * interpolation;
    currentStudyView.scale +=
      (targetView.scale - currentStudyView.scale) * interpolation;
    canvas.style.setProperty(
      "--model-study-scale",
      currentStudyView.scale.toFixed(4),
    );
    orbitYaw.setFromAxisAngle(ORBIT_Y_AXIS, currentStudyView.rotationY);
    orbitPitch.setFromAxisAngle(ORBIT_X_AXIS, currentStudyView.rotationX);
    pivot.quaternion.copy(orbitYaw).multiply(orbitPitch);
    featureZoom = currentStudyView.zoom;
    resizeCamera(pivot.quaternion);
    renderer.render(scene, camera);
    if (!reducedMotion.matches) {
      animationFrame = requestAnimationFrame(render);
    }
  }

  function startRendering() {
    if (!visible || !activeUrl || animationFrame) return;
    startedAt = performance.now();
    animationFrame = requestAnimationFrame(render);
  }

  function stopRendering() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  function resize() {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    resizeCamera();
    if (activeUrl) renderer.render(scene, camera);
  }

  function getRotatedHalfExtents(quaternion) {
    let halfWidth = 0;
    let halfHeight = 0;
    activeBoundsCorners.forEach((corner) => {
      rotatedBoundsCorner.copy(corner).applyQuaternion(quaternion);
      halfWidth = Math.max(halfWidth, Math.abs(rotatedBoundsCorner.x));
      halfHeight = Math.max(halfHeight, Math.abs(rotatedBoundsCorner.y));
    });
    return { halfWidth, halfHeight };
  }

  function resizeCamera(quaternion = pivot.quaternion) {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    const aspect = width / height;
    // Wide vessels should read at the same apparent width as a front-facing
    // round dish, while still using more of a narrow viewport.
    const widthLimit = Math.min(0.82, 1 / (CAMERA_VIEW_HEIGHT * aspect));
    const designedViewHeight = Math.max(
      CAMERA_VIEW_HEIGHT,
      activeModelSize.height / 0.86,
      activeModelSize.width / (aspect * widthLimit),
    ) * activeViewScale * featureZoom;
    const { halfWidth, halfHeight } = getRotatedHalfExtents(quaternion);
    // The model can cross every pitch and yaw angle. Frame its actual rotated
    // bounds on every frame so no silhouette can touch the canvas edge.
    const safeViewHeight = Math.max(
      (halfHeight * 2) / FRAMING_SAFE_HEIGHT_RATIO,
      (halfWidth * 2) / (aspect * FRAMING_SAFE_WIDTH_RATIO),
    );
    const fittedViewHeight = Math.max(designedViewHeight, safeViewHeight);
    camera.left = (-fittedViewHeight * aspect) / 2;
    camera.right = (fittedViewHeight * aspect) / 2;
    camera.top = fittedViewHeight / 2;
    camera.bottom = -fittedViewHeight / 2;
    camera.updateProjectionMatrix();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  function fitModel(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    if (!Number.isFinite(size.y) || size.y <= 0) {
      throw new Error("The GLB model has no measurable height.");
    }

    const scale = MODEL_HEIGHT / size.y;
    object.scale.multiplyScalar(scale);
    const scaledBox = new THREE.Box3().setFromObject(object);
    const center = scaledBox.getCenter(new THREE.Vector3());
    object.position.sub(center);
    object.updateMatrixWorld(true);
    const centeredSize = scaledBox.getSize(new THREE.Vector3());
    return {
      width: centeredSize.x,
      height: centeredSize.y,
      depth: centeredSize.z,
    };
  }

  function activateModel(url, model, onReady) {
    modelRoot.clear();
    modelRoot.add(model);
    activeUrl = url;
    modelCache.delete(url);
    modelCache.set(url, model);
    trimModelCache();
    activeModelSize = model.userData.observationSize ?? { width: 1, height: 1 };
    const halfSize = {
      x: activeModelSize.width * 0.5,
      y: activeModelSize.height * 0.5,
      z: (activeModelSize.depth ?? activeModelSize.width) * 0.5,
    };
    activeBoundsCorners = [];
    [-1, 1].forEach((xSign) => {
      [-1, 1].forEach((ySign) => {
        [-1, 1].forEach((zSign) => {
          activeBoundsCorners.push(
            new THREE.Vector3(
              xSign * halfSize.x,
              ySign * halfSize.y,
              zSign * halfSize.z,
            ),
          );
        });
      });
    });
    activeViewScale = model.userData.observationViewScale ?? 1;
    manualRotationX = 0;
    manualRotationY = 0;
    currentStudyView = {
      rotationX: 0,
      rotationY: 0,
      zoom: featureZoom,
      scale: 1,
    };
    pivot.quaternion.identity();
    resize();
    startRendering();
    onReady?.();
  }

  function requestModel(url, { onProgress, rotationY = 0, viewScale = 1 } = {}) {
    if (modelCache.has(url)) {
      const model = modelCache.get(url);
      modelCache.delete(url);
      modelCache.set(url, model);
      return Promise.resolve(model);
    }
    if (loadingModels.has(url)) return loadingModels.get(url);

    const loadOnce = () => new Promise((resolve, reject) => {
      const manager = new THREE.LoadingManager();
      manager.onProgress = (_url, loaded, total) => {
        onProgress?.(total > 0 ? loaded / total : 0);
      };

      const loader = new GLTFLoader(manager);
      loader.load(
        url,
        (gltf) => {
          const model = gltf.scene;
          model.rotation.y = rotationY;
          model.userData.observationSize = fitModel(model);
          model.userData.observationViewScale = viewScale;
          modelCache.set(url, model);
          trimModelCache();
          resolve(model);
        },
        (event) => {
          if (event.total > 0) onProgress?.(event.loaded / event.total);
        },
        reject,
      );
    });

    const loading = (async () => {
      try {
        return await loadOnce();
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 220));
        return loadOnce();
      }
    })().finally(() => {
      loadingModels.delete(url);
    });

    loadingModels.set(url, loading);
    return loading;
  }

  async function load(url, options = {}) {
    if (activeUrl === url) {
      startRendering();
      options.onReady?.();
      return;
    }

    if (!modelCache.has(url)) {
      modelRoot.clear();
      activeUrl = null;
      stopRendering();
    }
    const model = await requestModel(url, options);
    if (activeUrl === url) {
      startRendering();
      options.onReady?.();
      return;
    }
    activateModel(url, model, options.onReady);
  }

  async function preload(url, options = {}) {
    await requestModel(url, options);
  }

  function setVisible(nextVisible) {
    visible = nextVisible;
    if (visible) {
      resize();
      startRendering();
    } else {
      stopRendering();
    }
  }

  function setStudyView(index) {
    const nextStudyFeatureIndex =
      Number.isInteger(index) && index >= 0
        ? index
        : null;
    if (nextStudyFeatureIndex !== studyFeatureIndex) {
      manualRotationX = 0;
      manualRotationY = 0;
    }
    studyFeatureIndex = nextStudyFeatureIndex;
    startRendering();
    if (reducedMotion.matches) render(performance.now());
  }

  function rotateBy(horizontalPixels = 0, verticalPixels = 0) {
    if (
      (!Number.isFinite(horizontalPixels) || horizontalPixels === 0)
      && (!Number.isFinite(verticalPixels) || verticalPixels === 0)
    ) {
      return {
        rotationX: manualRotationX,
        rotationY: manualRotationY,
      };
    }
    if (Number.isFinite(horizontalPixels)) {
      manualRotationY += horizontalPixels * 0.009;
    }
    if (Number.isFinite(verticalPixels)) {
      manualRotationX += verticalPixels * 0.009;
    }
    startRendering();
    if (reducedMotion.matches) render(performance.now());
    return {
      rotationX: manualRotationX,
      rotationY: manualRotationY,
    };
  }

  function captureFrame(snapshotCanvas) {
    if (!activeUrl) return false;
    renderer.render(scene, camera);
    const width = canvas.width;
    const height = canvas.height;
    if (!width || !height) return false;
    if (snapshotCanvas.width !== width || snapshotCanvas.height !== height) {
      snapshotCanvas.width = width;
      snapshotCanvas.height = height;
    }
    const context = snapshotCanvas.getContext("2d");
    if (!context) return false;
    context.clearRect(0, 0, width, height);
    context.drawImage(canvas, 0, 0);
    return true;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRendering();
    } else {
      startRendering();
    }
  });

  return {
    captureFrame,
    load,
    preload,
    resize,
    rotateBy,
    setStudyView,
    setVisible,
  };
}
