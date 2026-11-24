#!/usr/bin/env node

const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs/promises");

const siteRoot = __dirname;
const port = Number(process.env.PORT) || 4327;
const host = "127.0.0.1";
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".task": "application/octet-stream",
  ".ttf": "font/ttf",
  ".wasm": "application/wasm",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${host}:${port}`);
    const pathname = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
    const filePath = path.resolve(siteRoot, `.${pathname}`);

    if (!filePath.startsWith(`${siteRoot}${path.sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const body = await fs.readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch (error) {
    const notFound = error.code === "ENOENT";
    response.writeHead(notFound ? 404 : 500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(notFound ? "Not found" : "Server error");
  }
});

server.listen(port, host, () => {
  console.log(`A24 television gallery: http://${host}:${port}/`);
});

server.on("error", (error) => {
  console.error(`Unable to start server on port ${port}: ${error.message}`);
  process.exitCode = 1;
});
