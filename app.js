const productions = [
  {
    title: "汉晋·新平治陶 HAN-JIN",
    titleLines: ["汉晋·新平治陶", "HAN-JIN"],
    year: "约 25—420",
    meta: [
      { label: "时间", value: "约 25–420 年" },
      { label: "时代侧重", value: "陶业初创" },
      { label: "代表器物", value: "原始青瓷\n粗陶" },
      { label: "时代气质", value: "土火初启，质朴简素" },
    ],
    art: "./assets/han-jin-qingyou-bu-kv.png",
    model: "./assets/han-jin-original-celadon-zeng-web.glb?v=20261124-2",
    artifactName: "汉・原始青瓷双系瓿",
    detailArt: "./assets/han-jin-primitive-glaze-16x9.png",
    detailSecondaryArt: "./assets/han-jin-first-firing-16x9.png",
    detailTertiaryArt: "./assets/han-jin-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/han-jin-eight-vessel-silhouettes-16x9.png",
    caption: "新平启陶，窑火初燃",
    reviews: [
      {
        publication: "Craft",
        rating: 2,
      },
      {
        publication: "Aesthetic",
        rating: 2,
      },
    ],
  },
  {
    title: "唐代·昌南贡瓷 TANG",
    titleLines: ["唐代·昌南贡瓷", "TANG"],
    year: "618—907",
    meta: [
      { label: "时间", value: "618–907 年" },
      { label: "时代侧重", value: "白瓷兴起" },
      { label: "代表器物", value: "昌南白瓷" },
      { label: "时代气质", value: "素润如玉，供奉宫廷" },
    ],
    art: "./assets/tang-baici-warm-roundness-kv.png",
    model: "./assets/tang-white-vase.glb",
    artifactName: "唐・白釉罐",
    detailArt: "./assets/tang-baici-jar-16x9.png",
    detailSecondaryArt: "./assets/tang-early-white-wares-16x9.png",
    detailTertiaryArt: "./assets/tang-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/tang-eight-vessel-silhouettes-16x9.png",
    caption: "昌南贡玉，瓷路初开",
    reviews: [
      {
        publication: "Craft",
        rating: 3,
      },
      {
        publication: "Aesthetic",
        rating: 3,
      },
    ],
  },
  {
    title: "五代·素瓷奠基 FIVE DYNASTIES",
    titleLines: ["五代·素瓷奠基", "FIVE DYNASTIES"],
    year: "907—960",
    meta: [
      { label: "时间", value: "907–960 年" },
      { label: "时代侧重", value: "白瓷成熟" },
      { label: "代表器物", value: "胜梅亭白瓷" },
      { label: "时代气质", value: "胎质净白，青白之基" },
    ],
    art: "./assets/wudai-lantian-white-bowl-kv.png",
    model: "./assets/wudai-white-bowl.glb",
    artifactName: "五・白釉花口碗",
    detailArt: "./assets/wudai-flower-mouth-bowl-16x9.png",
    detailSecondaryArt: "./assets/wudai-pin-marked-white-wares-16x9.png",
    detailTertiaryArt: "./assets/wudai-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/wudai-eight-vessel-silhouettes-16x9.png",
    caption: "素瓷凝白，影青伏笔",
    reviews: [
      {
        publication: "Craft",
        rating: 3,
      },
      {
        publication: "Aesthetic",
        rating: 3,
      },
    ],
  },
  {
    title: "宋代·景德影青 SONG",
    titleLines: ["宋代·景德影青", "SONG"],
    year: "960—1279",
    meta: [
      { label: "时间", value: "960–1279 年" },
      { label: "时代侧重", value: "青白瓷（影青）高峰" },
      { label: "代表器物", value: "湖田窑影青碗\n影青刻花梅瓶" },
      { label: "时代气质", value: "青中泛白，温润空灵" },
    ],
    art: "./assets/song-qingbai-lidded-jar-kv.png",
    model: "./assets/song-qingbai-soul-jar.glb",
    artifactName: "宋・素胎堆塑塔式盖罐",
    detailArt: "./assets/song-qingbai-soul-jar-16x9.png",
    detailSecondaryArt: "./assets/song-qingbai-wares-hutian-kilns-16x9.png",
    detailTertiaryArt: "./assets/song-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/song-eight-vessel-silhouettes-16x9.png",
    caption: "影青如玉，景德赐名",
    reviews: [
      {
        publication: "Craft",
        rating: 4,
      },
      {
        publication: "Aesthetic",
        rating: 5,
      },
    ],
  },
  {
    title: "元代·青花初扬 YUAN",
    titleLines: ["元代·青花初扬", "YUAN"],
    year: "1271—1368",
    meta: [
      { label: "时间", value: "1271–1368 年" },
      { label: "时代侧重", value: "二元配方、元青花" },
      { label: "代表器物", value: "元青花梅瓶\n釉里红" },
      { label: "时代气质", value: "雄浑开阔，青花肇始" },
    ],
    art: "./assets/yuan-qinghua-meiping-kv.png",
    model: "./assets/yuan-qinghua-vase.glb",
    artifactName: "元・青花缠枝牡丹纹梅瓶",
    detailArt: "./assets/yuan-qinghua-meiping-16x9.png",
    detailSecondaryArt: "./assets/yuan-sovereign-cobalt-16x9.png",
    detailTertiaryArt: "./assets/yuan-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/yuan-eight-vessel-silhouettes-16x9.png",
    caption: "高岭新方，青花出世",
    reviews: [
      {
        publication: "Craft",
        rating: 5,
      },
      {
        publication: "Aesthetic",
        rating: 4,
      },
    ],
  },
  {
    title: "明代·御窑流光 MING",
    titleLines: ["明代·御窑流光", "MING"],
    year: "1368—1644",
    meta: [
      { label: "时间", value: "1368–1644 年" },
      { label: "时代侧重", value: "御器厂设立，彩瓷百花齐放" },
      { label: "代表器物", value: "永宣青花\n成化斗彩\n晚明五彩" },
      { label: "时代气质", value: "雅艳兼备，分工细密" },
    ],
    art: "./assets/ming-qinghua-dish-kv.png",
    model: "./assets/ming-blue-white-plate.glb",
    modelRotationY: -Math.PI / 2,
    artifactName: "明・宣德青花牡丹纹盘",
    detailArt: "./assets/ming-qinghua-dish-16x9.png",
    detailSecondaryArt: "./assets/ming-imperial-order-16x9.png",
    detailTertiaryArt: "./assets/ming-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/ming-eight-vessel-silhouettes-16x9.png",
    caption: "御窑开造，彩瓷流光",
    reviews: [
      {
        publication: "Craft",
        rating: 5,
      },
      {
        publication: "Aesthetic",
        rating: 5,
      },
    ],
  },
  {
    title: "清代·陶冶成图 QING",
    titleLines: ["清代·陶冶成图", "QING"],
    year: "1636—1912",
    meta: [
      { label: "时间", value: "1636–1912 年" },
      { label: "时代侧重", value: "制瓷工艺顶峰，唐英《陶冶图说》" },
      { label: "代表器物", value: "粉彩\n珐琅彩\n各色单色釉" },
      { label: "时代气质", value: "精工巧绘，万象纷呈" },
    ],
    art: "./assets/qing-fencai-openwork-vase-kv.png",
    model: "./assets/qing-fencai-openwork-vase.glb",
    artifactName: "清・粉彩镂空转心瓶",
    detailArt: "./assets/qing-fencai-openwork-vase-16x9.png",
    detailSecondaryArt: "./assets/qing-lavish-openwork-16x9.png",
    detailTertiaryArt: "./assets/qing-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/qing-eight-vessel-silhouettes-16x9.png",
    caption: "陶冶工成，百彩争辉",
    reviews: [
      {
        publication: "Craft",
        rating: 5,
      },
      {
        publication: "Aesthetic",
        rating: 5,
      },
    ],
  },
  {
    title: "近现代·窑火新生 MODERN",
    titleLines: ["近现代·窑火新生", "MODERN"],
    year: "1912—至今",
    meta: [
      { label: "时间", value: "1912–至今" },
      { label: "时代侧重", value: "技艺传承，当代创新" },
      { label: "代表器物", value: "十大瓷厂日用瓷\n当代陶艺" },
      { label: "时代气质", value: "承古融今，窑火永续" },
    ],
    art: "./assets/modern-dragon-boat-porcelain-kv.png",
    model: "./assets/modern-dragon-boat.glb",
    modelRotationY: Math.PI / 2,
    artifactName: "近现代・涩胎龙舟瓷雕（1959）",
    detailArt: "./assets/modern-dragon-boat-porcelain-16x9.png",
    detailSecondaryArt: "./assets/modern-white-epic-16x9.png",
    detailTertiaryArt: "./assets/modern-brand-line-mark-16x9.png",
    detailFourthArt: "./assets/modern-eight-vessel-silhouettes-16x9.png",
    caption: "窑火永续，新旧共生",
    reviews: [
      {
        publication: "Craft",
        rating: 4,
      },
      {
        publication: "Aesthetic",
        rating: 4,
      },
    ],
  },
];

const OBSERVATION_STUDY_FEATURES = [
  [
    {
      label: "胎土",
      english: "CLAY",
      title: "土色初定",
      description:
        "新平早期器物多以本地黏土手塑或慢轮成形，胎体厚重，烧成后仍保留清晰的手工起伏。",
    },
    {
      label: "釉色",
      english: "EARLY GLAZE",
      title: "青褐薄覆",
      description:
        "器表施一层青黄至青褐的薄釉，釉层厚薄不匀，多见斑驳与局部剥脱；釉色与胎体界限尚松，是原始青瓷阶段的典型面貌。",
    },
    {
      label: "成形",
      english: "FORMING",
      title: "双系鼓腹",
      description:
        "短口丰肩、鼓腹平底，肩部设双系以便系绳搬运；器身以弦纹与戳印纹作装饰，轮廓圆钝，保留早期陶器的稳重体量。",
    },
    {
      label: "火候",
      english: "FIRING",
      title: "低火初成",
      description:
        "烧成温度偏低，胎体烧结不足、质地多孔，胎釉结合不稳；器表易见剥落与斑驳，反映早期窑火控制尚在摸索阶段。",
    },
  ],
  [
    {
      label: "器形",
      english: "ROUNDNESS",
      title: "丰圆为体",
      description:
        "唐代白瓷多见丰肩圆腹、重心较低的造型，轮廓饱满，器物在案上呈现稳定而舒展的姿态。",
    },
    {
      label: "胎质",
      english: "WHITE BODY",
      title: "胎骨渐细",
      description:
        "胎料经初步淘洗，胎质较早期粗陶细致，胎色偏白灰；底足多露胎，胎面可见轮制痕迹，致密程度仍不及成熟瓷器。",
    },
    {
      label: "釉面",
      english: "CLEAR GLAZE",
      title: "暖白温润",
      description:
        "通体施暖调白釉，白中泛米黄，釉面光润柔和；口沿与转折处釉层稍薄，与胎色自然相接，呈现温润含蓄的光泽。",
    },
    {
      label: "声望",
      english: "TRIBUTE",
      title: "昌南初名",
      description:
        "昌南白瓷在唐代已见于后世文献记载，与北方邢窑、南方越窑共同构成唐代瓷器格局；本地唐代窑址尚未发现，相关面貌以同期南方白瓷为参照。",
    },
  ],
  [
    {
      label: "花口",
      english: "PETAL RIM",
      title: "花瓣起伏",
      description:
        "碗口以连续起伏塑成花瓣般的轮廓，边缘轻薄而不锐利，正面观看时形成柔和而有节奏的曲线。",
    },
    {
      label: "胎质",
      english: "WHITE BODY",
      title: "胎净骨白",
      description:
        "瓷土经精细淘洗，胎体薄而匀净，胎色趋于纯白；圈足规整，内底可见支钉烧留下的细小痕迹，是五代白瓷胎质提升的直接证据。",
    },
    {
      label: "釉层",
      english: "GLAZE POOL",
      title: "薄釉匀净",
      description:
        "釉层薄而均匀，呈素净白色，少施繁饰；釉面光润，与胎体结合较稳，已接近宋代青白瓷的白净底色。",
    },
    {
      label: "承继",
      english: "TRANSITION",
      title: "下启影青",
      description:
        "五代白瓷在原料淘洗、装烧工艺上的改进，直接衔接宋代湖田窑青白瓷的兴起；支钉叠烧技术也为日后大规模量产打下基础。",
    },
  ],
  [
    {
      label: "器形",
      english: "SILHOUETTE",
      title: "影青成器",
      description:
        "宋代影青器物以秀挺而克制的轮廓见长，肩腹转折平缓，细部变化集中在口沿、足端与器壁厚薄。",
    },
    {
      label: "胎釉",
      english: "QINGBAI",
      title: "薄釉透影",
      description:
        "胎体轻薄匀净，通体施淡青白色釉，釉层通透；迎光可见器壁轮廓，青与白相互掩映，即宋人所称「影青」。",
    },
    {
      label: "刻花",
      english: "CARVING",
      title: "划花流丽",
      description:
        "器身以刻花、划花与篦纹作装饰，线条流畅轻盈，花叶随器形起伏展开；纹饰不占满壁，留出釉色本身的通透感。",
    },
    {
      label: "窑口",
      english: "HUTIAN",
      title: "湖田名窑",
      description:
        "湖田窑为宋代景德镇核心窑场，产品沿海丝路外销；景德元年（1004）真宗以年号赐镇名「景德镇」，影青正是这一时期的代表性瓷种。",
    },
  ],
  [
    {
      label: "胎料",
      english: "BODY",
      title: "高岭新胎",
      description:
        "瓷石与高岭土的二元配方提高了胎体耐火度，使器物能在更高温度下烧成并保持较好的成形稳定。",
    },
    {
      label: "青花",
      english: "COBALT",
      title: "钴蓝入画",
      description:
        "以钴料在素胎上绘画，罩透明釉后高温一次烧成；纹饰呈蓝色，发色浓艳，纹样与釉层结合牢固，不易脱落。",
    },
    {
      label: "纹样",
      english: "PATTERN",
      title: "缠枝分层",
      description:
        "梅瓶通体绘缠枝牡丹，枝叶连绵回转；纹饰分层排布，主次分明，构图繁密而不杂乱，体现元代雄浑饱满的装饰风格。",
    },
    {
      label: "流通",
      english: "TRADE",
      title: "瓷路远行",
      description:
        "元代设浮梁磁局掌管官府用瓷，官搭民烧；此器出土于南京沐晟墓，后调拨入藏景德镇中国陶瓷博物馆，是南北交流与官府用瓷制度的实物见证。",
    },
  ],
  [
    {
      label: "器形",
      english: "IMPERIAL FORM",
      title: "御器成形",
      description:
        "明代御用瓷器对器形、尺寸与成对关系有更严格的要求，轮制、修坯与接合都追求准确而克制。",
    },
    {
      label: "青花",
      english: "BLUE & WHITE",
      title: "宣德青料",
      description:
        "宣德青花以进口钴料绘画，发色浓艳深沉，纹样线条浑厚；盘面牡丹布局均衡工整，笔法规矩，是永宣官窑青花的典型面貌。",
    },
    {
      label: "彩饰",
      english: "POLYCHROME",
      title: "斗彩五彩",
      description:
        "明代釉上彩逐步发展，成化斗彩以釉下青花与釉上彩拼合纹饰，晚明五彩色调浓郁；彩瓷与青花并行，装饰手法日趋丰富。",
    },
    {
      label: "制度",
      english: "KILN SYSTEM",
      title: "御窑分工",
      description:
        "洪武年间设立御器厂，官窑供御、民窑外销，制瓷工序分工细化；纹饰、器型均有规制，一套严格的官窑审美与生产规范由此成型。",
    },
  ],
  [
    {
      label: "器形",
      english: "OPENWORK",
      title: "繁复开光",
      description:
        "清代外销与陈设瓷常以多层开光组织器身，镂空、附加装饰与器形同时展开，观看路径更加密集。",
    },
    {
      label: "粉彩",
      english: "FAMILLE ROSE",
      title: "粉彩柔光",
      description:
        "粉彩以玻璃白打底，色彩柔和粉润，可层层渲染出明暗层次；瓶身绘山水花卉，色调清丽，与镂空结构相互映衬。",
    },
    {
      label: "工法",
      english: "ENAMEL",
      title: "镂空转心",
      description:
        "外瓶镂雕开光，内瓶套于其中可随转轴转动；器身分段成型、拼接套合，集雕、镂、塑、绘于一体，对修坯与烧成精度要求极高。",
    },
    {
      label: "工艺",
      english: "ATELIER",
      title: "图式留传",
      description:
        "唐英督陶期间整理《陶冶图说》，系统记录制瓷全流程；颜色釉、珐琅彩、仿生瓷等品类在此时齐聚，传统制瓷工艺达到古代上限。",
    },
  ],
  [
    {
      label: "器形",
      english: "DRAGON BOAT",
      title: "龙舟入瓷",
      description:
        "现代龙舟纹样将水面竞渡转化为瓷面叙事，器形与画意共同构成具有时代气息的纪念性设计。",
    },
    {
      label: "釉彩",
      english: "COLOR",
      title: "涩胎无釉",
      description:
        "整件瓷雕不施釉彩，以涩胎本色呈现；胎面依靠雕刻起伏与光影塑造层次，人物、楼阁与舟身的细节均靠胎体本身的轮廓表现。",
    },
    {
      label: "纹样",
      english: "NARRATIVE",
      title: "群像同舟",
      description:
        "龙舟之上楼阁层叠，人物群像排布其间，神态与姿态各异；瓷雕由单体塑造组合而成，把龙舟竞渡的场面压缩进一件纪念性陈设瓷。",
    },
    {
      label: "传承",
      english: "LIVING CRAFT",
      title: "瓷舟传统",
      description:
        "这件 1959 年建国十周年献礼瓷，技艺源自徐顺元开创的瓷龙舟传统，作者未见权威署名；它标志陶瓷由礼器、御用品转向公共艺术与主题创作，传统技艺在现代语境中延续活化。",
    },
  ],
];

const OBSERVATION_MODEL_FADE_MS = 200;
const OBSERVATION_MODEL_SWITCH_HOLD_MS = 90;
const starPath = "M5.24862 0L6.68508 3.53591L10.4972 3.81215L7.62431 6.29834L8.50829 10L5.24862 8.01105L1.98895 10L2.87293 6.29834L0 3.81215L3.81215 3.53591L5.24862 0Z";
const ZHUOTU_COUNT = 12;
const ZHUOTU_ARTWORKS = [
  {
    src: "./assets/taoyetu-scroll-02.jpg",
    video: "./assets/taoyetu-scroll-02.mp4",
    alt: "陶冶图卷：采石运土场景",
  },
  {
    src: "./assets/taoyetu-scroll-03.jpg",
    video: "./assets/taoyetu-scroll-03.mp4",
    alt: "陶冶图卷：水碓舂土场景",
  },
  {
    src: "./assets/taoyetu-scroll-04.jpg",
    video: "./assets/taoyetu-scroll-04.mp4",
    alt: "陶冶图卷：洗料澄浆场景",
  },
  {
    src: "./assets/taoyetu-scroll-05.jpg",
    video: "./assets/taoyetu-scroll-05.mp4",
    alt: "陶冶图卷：制坯晾坯场景",
  },
  {
    src: "./assets/taoyetu-scroll-06.jpg",
    video: "./assets/taoyetu-scroll-06.mp4",
    alt: "陶冶图卷：装匣入窑场景",
  },
  {
    src: "./assets/taoyetu-scroll-08.jpg",
    video: "./assets/taoyetu-scroll-08.mp4",
    alt: "陶冶图卷：瓷器彩绘装饰场景",
  },
  {
    src: "./assets/taoyetu-scroll-09.jpg",
    video: "./assets/taoyetu-scroll-09.mp4",
    alt: "陶冶图卷：施彩入窑场景",
  },
  {
    src: "./assets/taoyetu-scroll-10.jpg",
    video: "./assets/taoyetu-scroll-10.mp4",
    alt: "陶冶图卷：窑火煅烧场景",
  },
  {
    src: "./assets/taoyetu-scroll-11.jpg",
    video: "./assets/taoyetu-scroll-11.mp4",
    alt: "陶冶图卷：瓷器贸易场景",
  },
  {
    src: "./assets/taoyetu-scroll-07.jpg",
    video: "./assets/taoyetu-scroll-07.mp4",
    alt: "陶冶图卷：成器宴饮场景",
  },
  {
    src: "./assets/taoyetu-scroll-12.jpg",
    video: "./assets/taoyetu-scroll-12.mp4",
    alt: "陶冶图卷：酬神演剧场景",
  },
  {
    src: "./assets/taoyetu-scroll-01.jpg",
    video: "./assets/taoyetu-scroll-01.mp4",
    alt: "陶冶图卷：水运场景",
  },
];
const ZHUOTU_METADATA = [
  {
    titleLines: ["黎土", "MINING"],
    process: "开采瓷石",
    essentials: "入山\n凿矿\n采石\n挑运",
    caption: "“采石取矿，瓷石初采”",
    detailTitle: "凿土・QUARRYING",
    detailDescription:
      "画面表现瓷石原料的开采。山岩洞穴之中，匠人手持锤具凿取矿石，洞口一带的挑夫以扁担箩筐将矿石运下山去。瓷石为景德镇制瓷的主要原料，产于附近诸山，采出后须经粉碎、淘洗方可制胎。本幅所记为制瓷工序的起点，即原料的获取。",
  },
  {
    titleLines: ["椿土", "PULVERIZE"],
    process: "水力碎料",
    essentials: "水碓\n舂击\n碎石\n成粉",
    caption: "“水碓舂碎，石成细粉”",
    detailDescription:
      "画面中央架设大型木制水轮，借溪流冲击带动碓锤起落，将瓷石舂为细粉；溪畔匠人挑运、筛分原料，一旁有骑马者随行巡视。景德镇自明代起普遍以水碓粉碎瓷石，用水力代替人力，是当地制瓷业得以规模化生产的重要条件。",
  },
  {
    titleLines: ["练土", "WASH CLAY"],
    process: "提纯胎土",
    essentials: "淘洗\n沉淀\n糅泥\n除杂",
    caption: "“淘洗糅合，熟泥备用”",
    detailDescription:
      "画面绘淘洗练泥之景。匠人于临水处将舂碎的瓷石加水搅拌，滤去粗砂杂质，待泥浆沉淀后取用细泥；或以木槌反复捶打泥团，排出其中气泡，使泥料致密均匀。泥料纯净与否，直接决定坯体的成色与烧成效果。",
  },
  {
    titleLines: ["车胎", "THROWING"],
    process: "轮制成型",
    essentials: "转轮\n拉坯\n修型\n晾坯",
    caption: "“轮车拉坯，器型初成”",
    detailDescription:
      "棚屋之下设木制轮车，匠人拨动转盘使其旋转，双手扶泥随轮提拉收放，碗、盘之形由指掌间渐次成形；旁侧多层木架上排列着阴干中的坯体。拉坯为圆器成型的主工序，器物的高矮厚薄，全凭匠人手上的分寸。",
  },
  {
    titleLines: ["出窑", "UNLOAD KILN"],
    process: "开窑取瓷",
    essentials: "窑烧\n匣钵\n出窑\n检瓷",
    caption: "“窑火既歇，开窑出瓷”",
    detailDescription:
      "画面以拱形窑炉为主体，匠人将盛装坯件的匣钵逐层码入窑膛，窑外挑夫往来运送坯料与匣钵。匣钵以耐火泥制成，坯件置于其中，可隔绝窑内烟尘与落渣，避免沾污釉面，是烧制细瓷不可或缺的器具。",
  },
  {
    titleLines: ["开彩", "PAINTING"],
    process: "绘饰彩纹",
    essentials: "白胎\n起稿\n填色\n绘彩",
    caption: "“绘彩施纹，笔墨饰瓷”",
    detailDescription:
      "作坊之内，数名画工伏案工作，在烧成的白瓷上以彩料描绘纹样，勾线与填色各有分工；架格中陈列着待绘与已绘的器物。釉上彩绘是在烧成瓷器的釉面上作画，绘毕再入炉低温烘烤，使彩料固着于釉表。",
  },
  {
    titleLines: ["明炉", "OPEN STOVE"],
    process: "小件烘彩",
    essentials: "敞炉\n观火\n低温\n烤花",
    caption: "“明炉烘彩，小件烤花”",
    detailDescription:
      "画面左侧木棚下设小炉，匠人以长钳夹持器物在火上翻动烘烤，室内案上陈列成品。明炉为敞开式低温炉，专用于烧制釉上彩，器物直接受火，彩料经二次低温烧固，色泽艳丽而浮于釉面。",
  },
  {
    titleLines: ["暗炉", "CLOSED STOVE"],
    process: "大件固彩",
    essentials: "密炉\n恒温\n慢烧\n固色",
    caption: "“暗炉封烧，大件固彩”",
    detailDescription:
      "砖砌圆炉内火光升腾，匠人持杆观察火候；旁屋架上码满待烧的瓷器。暗炉为封闭式烤花炉，器物置于炉腔内隔火加热，温度较为均匀，可避免彩料因明火直烧而失光变色。",
  },
  {
    titleLines: ["开铺", "SHOWROOM"],
    process: "洋商采买",
    essentials: "陈瓷\n看样\n选货\n成交",
    caption: "“瓷铺开市，洋商采买”",
    detailDescription:
      "街面铺面内，货架与柜台满列青花、粉彩瓷器及瓷塑，店主、伙计在案前理货待客；店前立有西洋装束的客商数人。清代景德镇瓷器经由牙行、瓷号集散，一部分行销国内，一部分转运广州等地销往海外。",
  },
  {
    titleLines: ["请酒", "BANQUET"],
    process: "商会定货",
    essentials: "宴聚\n洽商\n议价\n定单",
    caption: "“宴聚会商，敲定瓷单”",
    detailDescription:
      "厅堂之中众人围坐宴饮，桌上陈设瓷器与果品，侍者捧盘往来，廊下悬灯结彩。景德镇瓷业按行分作，向有祭拜窑神、开工与完工酬神的习俗，宴饮聚会即为其中一环，用以祈求窑火顺遂。",
  },
  {
    titleLines: ["分财", "CELEBRATION"],
    process: "酬神庆成",
    essentials: "谢神\n演戏\n分利\n收官",
    caption: "“酬神演戏，分财庆成”",
    detailDescription:
      "院中搭起彩棚戏台，伶人披靠登场，锣鼓伴奏，观者聚于台前；廊下士绅围坐观赏，楼窗内女眷凭栏观看。窑业告成之后，坊主常雇戏班演戏酬神，兼以庆贺一季获利，是旧时瓷业作坊的常见风气。",
  },
  {
    titleLines: ["饶州", "RAOZHOU"],
    process: "瓷运启始",
    essentials: "昌江\n通航\n抵镇\n起运",
    caption: "“昌江达镇，漕运启始”",
    detailDescription:
      "画面为临江城池与码头，官船、帆船泊于岸边，仪仗人员立于船头；江面小船往来，岸边有人张网捕鱼。景德镇瓷器多由昌江运至饶州，即今鄱阳，再转长江、赣江各口岸，或南下广州出海，此为成品外运之路。",
  },
];
const GALLERY_SLOT_COUNT = Math.max(productions.length, ZHUOTU_COUNT);
const gallerySlots = Array.from(
  { length: GALLERY_SLOT_COUNT },
  (_, index) => productions[index] ?? null,
);
const gallery = document.querySelector("[data-gallery]");
const track = document.querySelector("[data-disc-track]");
const title = document.querySelector("[data-title]");
const creditLabels = [...document.querySelectorAll("[data-credit-label]")];
const creditValues = [...document.querySelectorAll("[data-credit-value]")];
const detailCreditLabels = [...document.querySelectorAll("[data-detail-credit-label]")];
const detailCreditValues = [...document.querySelectorAll("[data-detail-credit-value]")];
const reviewPair = document.querySelector("[data-reviews]");
const productionCaption = document.querySelector("[data-production-caption]");
const detailCaption = document.querySelector("[data-detail-caption]");
const status = document.querySelector("[data-gallery-status]");
const indexPanel = document.querySelector("#index-panel");
const indexList = document.querySelector("[data-index-list]");
const indexContext = document.querySelector("[data-index-context]");
const indexToggle = document.querySelector("[data-index-toggle]");
const indexClose = document.querySelector("[data-index-close]");
const detailDialog = document.querySelector("[data-detail-dialog]");
const detailScroller = document.querySelector("[data-detail-scroller]");
const detailViewer = document.querySelector("[data-detail-viewer]");
const detailPageArtLayer = document.querySelector("[data-detail-page-art-layer]");
const detailPageArts = productions.map((production, index) => {
  if (!production.detailArt) return null;
  const image = document.createElement("img");
  image.className = "detail-dialog__page-art";
  image.dataset.detailPageArt = String(index);
  image.src = production.detailArt;
  image.alt = `${production.title} 16:9 详情页画面`;
  image.draggable = false;
  image.loading = "eager";
  image.decoding = "async";
  image.hidden = true;
  detailPageArtLayer.append(image);
  return image;
});
const detailSecondaryPanel = document.querySelector("[data-detail-secondary-panel]");
const detailSecondaryArtLayer = document.querySelector("[data-detail-secondary-art-layer]");
const detailSecondaryArts = productions.map((production, index) => {
  if (!production.detailSecondaryArt) return null;
  const image = document.createElement("img");
  image.className = "detail-dialog__page-art";
  image.dataset.detailSecondaryArt = String(index);
  image.src = production.detailSecondaryArt;
  image.alt = `${production.title} 第二版块画面`;
  image.draggable = false;
  image.loading = "eager";
  image.decoding = "async";
  image.hidden = true;
  detailSecondaryArtLayer.append(image);
  return image;
});
const detailTertiaryPanel = document.querySelector("[data-detail-tertiary-panel]");
const detailTertiaryPanelContainer = detailTertiaryPanel.closest("[data-detail-panel]");
const detailTertiaryArtLayer = document.querySelector("[data-detail-tertiary-art-layer]");
const detailTertiaryArts = productions.map((production, index) => {
  if (!production.detailTertiaryArt) return null;
  const image = document.createElement("img");
  image.className = "detail-dialog__page-art";
  image.dataset.detailTertiaryArt = String(index);
  image.src = production.detailTertiaryArt;
  image.alt = `${production.title} 第三版块画面`;
  image.draggable = false;
  image.loading = "eager";
  image.decoding = "async";
  image.hidden = true;
  detailTertiaryArtLayer.append(image);
  return image;
});
const detailFourthPanel = document.querySelector("[data-detail-fourth-panel]");
const detailFourthPanelContainer = detailFourthPanel.closest("[data-detail-panel]");
const detailFourthArtLayer = document.querySelector("[data-detail-fourth-art-layer]");
const detailFourthArts = productions.map((production, index) => {
  if (!production.detailFourthArt) return null;
  const image = document.createElement("img");
  image.className = "detail-dialog__page-art";
  image.dataset.detailFourthArt = String(index);
  image.src = production.detailFourthArt;
  image.alt = `${production.title} 第四版块画面`;
  image.draggable = false;
  image.loading = "eager";
  image.decoding = "async";
  image.hidden = true;
  detailFourthArtLayer.append(image);
  return image;
});
const detailCloseLabel = document.querySelector("[data-detail-close-label]");
const detailPreviewButton = document.querySelector("[data-detail-preview]");
const detailPreviousButton = document.querySelector("[data-detail-prev]");
const detailNextButton = document.querySelector("[data-detail-next]");
const detailImmersivePage = document.querySelector("[data-detail-immersive-page]");
const detailImmersiveArt = document.querySelector("[data-detail-immersive-art]");
const detailImmersiveVideo = document.querySelector("[data-detail-immersive-video]");
const detailImmersiveStatus = document.querySelector("[data-detail-immersive-status]");
const detailImmersiveIndex = document.querySelector("[data-detail-immersive-index]");
const detailImmersiveTotal = document.querySelector("[data-detail-immersive-total]");
const detailImmersiveCopyTitle = document.querySelector(
  "[data-detail-immersive-copy-title]",
);
const detailImmersiveCopyDescription = document.querySelector(
  "[data-detail-immersive-copy-description]",
);
const detailImmersiveTitle = document.querySelector("[data-detail-immersive-title]");
const detailImmersiveDescription = document.querySelector(
  "[data-detail-immersive-description]",
);
const detailImmersiveCounter = document.querySelector(
  ".detail-dialog__immersive-counter",
);
const zhuotuCaption = document.querySelector("[data-zhuotu-caption]");
const previousButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const hero = document.querySelector(".hero");
const collectionTabs = [...document.querySelectorAll("[data-collection-nav]")];
const observationToggle = document.querySelector("[data-observation-toggle]");
const observationDialog = document.querySelector("[data-observation-dialog]");
const observationClose = document.querySelector("[data-observation-close]");
const observationPrevious = document.querySelector("[data-observation-prev]");
const observationNext = document.querySelector("[data-observation-next]");
const observationArt = document.querySelector("[data-observation-art]");
const observationFrame = observationArt.closest(".observation-dialog__image-frame");
const observationModelLayer = document.querySelector("[data-observation-model]");
const observationModelCanvas = document.querySelector("[data-observation-model-canvas]");
const observationModelSnapshot = document.querySelector("[data-observation-model-snapshot]");
const observationModelStatus = document.querySelector("[data-observation-model-status]");
const observationMedia = document.querySelector(".observation-dialog__media");
const observationRail = document.querySelector("[data-observation-rail]");
const observationCount = document.querySelector("[data-observation-count]");
const observationIndex = document.querySelector("[data-observation-index]");
const observationEnglish = document.querySelector("[data-observation-english]");
const observationTitle = document.querySelector("[data-observation-title]");
const observationTitleEn = document.querySelector("[data-observation-title-en]");
const observationCaption = document.querySelector("[data-observation-caption]");
const observationMetaLabels = [
  ...document.querySelectorAll(".observation-dialog__meta dt"),
];
const observationMetaValues = [
  ...document.querySelectorAll("[data-observation-meta]"),
];
const observationNote = document.querySelector("[data-observation-note]");
const observationProgress = document.querySelector("[data-observation-progress]");
const observationCopy = document.querySelector(".observation-dialog__copy");
const observationStudyEntry = document.querySelector("[data-observation-study-open]");
const observationStudy = document.querySelector("[data-observation-study]");
const observationStudyKicker = document.querySelector(
  "[data-observation-study-kicker]",
);
const observationStudyEnglish = document.querySelector(
  "[data-observation-study-english]",
);
const observationStudyCount = document.querySelector(
  "[data-observation-study-count]",
);
const observationStudyObject = document.querySelector(
  "[data-observation-study-object]",
);
const observationStudyTitle = document.querySelector(
  "[data-observation-study-title]",
);
const observationStudyDescription = document.querySelector(
  "[data-observation-study-description]",
);
const observationStudyArtifactName = document.querySelector(
  "[data-observation-study-artifact-name]",
);
const observationStudyYear = document.querySelector(
  "[data-observation-study-year]",
);
const observationStudyMeta = document.querySelector(
  "[data-observation-study-meta]",
);
const observationStudyBack = document.querySelector(
  "[data-observation-study-back]",
);
const observationStudyPrevious = document.querySelector(
  "[data-observation-study-prev]",
);
const observationStudyNext = document.querySelector(
  "[data-observation-study-next]",
);
const observationStudyFeatureList = document.querySelector(
  "[data-observation-study-features]",
);

function getObservationModelFailureMessage() {
  if (window.location.protocol === "file:") {
    return "浏览器禁止本地文件加载三维模型，请双击 start-gesture.cmd 后通过本地服务器打开。";
  }
  return "三维模型加载失败，已自动重试。请刷新页面或检查 GLB 文件。";
}

let collectionMode = "taocheng";
let observationReturnCollectionMode = null;
let activeIndex = 0;
const collectionPositions = {
  taocheng: 0,
  zhuotu: 0,
};
let detailIndex = 0;
let focus = 0;
let target = 0;
let focusVelocity = 0;
let lastFrameAt = 0;
let springClock = 0;
let animationFrame = 0;
let wheelAccumulator = 0;
let lastWheelAt = 0;
let pointerX = 0;
let pointerY = 0;
let dragStartX = 0;
let dragStartY = 0;
let dragStartFocus = 0;
let dragDelta = 0;
let isDragging = false;
let detailDragStartX = 0;
let detailDragStartY = 0;
let isDetailDragging = false;
let wheelNavigationLocked = false;
let observationWheelAccumulator = 0;
let observationLastWheelAt = 0;
let observationWheelLockedUntil = 0;
let observationPointerId = null;
let observationPointerStartX = 0;
let observationPointerStartY = 0;
let observationPointerDeltaX = 0;
let observationPointerDeltaY = 0;
let observationPointerStartedOnStudyEntry = false;
let observationModelOrbitPointerId = null;
let observationModelOrbitLastX = 0;
let observationModelOrbitLastY = 0;
let observationSuppressRailClickUntil = 0;
let observationSuppressStudyClickUntil = 0;
let isObservationStudy = false;
let observationFeatureIndex = 0;
let observationModelOrbitTravel = 0;
let observationStudyWheelAccumulator = 0;
let observationStudyLastWheelAt = 0;
let observationStudyWheelLockedUntil = 0;
let observationModelController = null;
let observationModelLoad = null;
let observationModelToken = 0;
let observationModelUrl = null;
let observationWarmTimer = 0;
let observationWarmToken = 0;
let dimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
  size: 480,
  spacing: 490,
  centerX: window.innerWidth * 0.51,
  centerY: window.innerHeight * 0.43,
};

function getCollectionCount(mode = collectionMode) {
  return mode === "zhuotu" ? ZHUOTU_COUNT : productions.length;
}

const discs = gallerySlots.map((production, index) => {
  const button = document.createElement("button");
  const zhuotuArtwork = ZHUOTU_ARTWORKS[index];
  button.className = "disc";
  button.type = "button";
  button.dataset.index = String(index);
  button.setAttribute(
    "aria-label",
    production
      ? `${production.title}，${index + 1} / ${productions.length}`
      : `琢土版块，${index + 1} / ${ZHUOTU_COUNT}`,
  );
  button.innerHTML = `
    <span class="disc__rim" aria-hidden="true"></span>
    <span class="disc__body">
      <span class="disc__face disc__face--front">
        ${production ? `
          <img
            class="disc__art"
            src="${production.art}"
            alt="${production.title} 作品封面"
            draggable="false"
          >
        ` : ""}
        ${zhuotuArtwork ? `
          <img
            class="disc__zhuotu-art"
            src="${zhuotuArtwork.src}"
            alt="${zhuotuArtwork.alt}"
            draggable="false"
          >
        ` : ""}
      </span>
      <span class="disc__face disc__face--back" aria-hidden="true">
        <span class="disc__back-copy">${production?.title ?? ""}<small>A24 · TELEVISION</small></span>
      </span>
    </span>
    <span class="disc__hub" aria-hidden="true"></span>
  `;
  button.style.setProperty("--spin", "0");
  button.addEventListener("click", () => {
    if (index >= getCollectionCount()) return;
    if (collectionMode === "zhuotu") {
      if (index !== activeIndex) navigateTo(index, { force: true });
      openDetail(index);
      return;
    }
    if (index === activeIndex) {
      openDetail(index);
      return;
    }
    navigateTo(index);
  });
  track.append(button);
  return button;
});

gallerySlots.forEach((production, index) => {
  const item = document.createElement("li");
  item.className = "index-item";
  item.dataset.index = String(index);
  item.innerHTML = `
    <button class="index-item__button" type="button">
      <span class="index-item__number">${String(index + 1).padStart(2, "0")}</span>
      <span class="index-item__title-wrap">
        <span class="index-item__title">${production?.titleLines?.[0] ?? production?.title ?? ""}</span>
        <span class="index-item__english">${production?.titleLines?.[1] ?? ""}</span>
      </span>
      <span class="index-item__year">${production?.year ?? ""}</span>
    </button>
  `;
  item.querySelector("button").addEventListener("click", () => {
    if (index >= getCollectionCount()) return;
    navigateTo(index);
    closeIndex();
  });
  indexList.append(item);
});

function measure() {
  const rect = gallery.getBoundingClientRect();
  const mobile = rect.width < 768;
  const size = mobile
    ? Math.min(rect.width * 0.72, 336)
    : Math.min(rect.width * 0.335, rect.height * 0.62, 560);
  const discWidth = size * (collectionMode === "zhuotu" ? 1 : 0.75);

  dimensions = {
    width: rect.width,
    height: rect.height,
    size,
    spacing: size * (mobile ? 0.86 : 0.9),
    rise: size * (mobile ? 0.16 : 0.34),
    centerX: rect.width * (mobile ? 0.5 : 0.525),
    centerY: rect.height * (mobile ? 0.53 : 0.45),
  };

  discs.forEach((disc) => {
    disc.style.setProperty("--disc-width", `${discWidth}px`);
    disc.style.setProperty("--disc-size", `${size}px`);
  });
  render();
}

function render(timestamp = performance.now()) {
  animationFrame = 0;
  const motionPaused = reducedMotion.matches;
  const elapsed = lastFrameAt
    ? Math.min(34, Math.max(0, timestamp - lastFrameAt))
    : 16.667;
  lastFrameAt = timestamp;

  if (motionPaused) {
    focus = target;
    focusVelocity = 0;
  } else if (isDragging) {
    focusVelocity = 0;
  } else {
    springClock += elapsed;
    let steps = 0;
    while (springClock >= 16.667 && steps < 2) {
      focusVelocity = (focusVelocity + (target - focus) * 0.12) * 0.62;
      focus += focusVelocity;
      springClock -= 16.667;
      steps += 1;
    }
  }

  if (Math.abs(target - focus) < 0.001 && Math.abs(focusVelocity) < 0.001) {
    focus = target;
    focusVelocity = 0;
    springClock = 0;
  }

  const movementLean = Math.max(-1, Math.min(1, focusVelocity * 4.5));

  discs.forEach((disc, index) => {
    if (index >= getCollectionCount()) {
      disc.hidden = true;
      disc.inert = true;
      disc.style.opacity = "0";
      return;
    }
    disc.hidden = false;
    disc.inert = false;
    const offset = index - focus;
    const distance = Math.abs(offset);
    const kineticTilt = movementLean / (1 + distance * 0.55);
    const baseScale = Math.max(0.52, 1 + offset * 0.12);
    const scale = baseScale;
    const x = dimensions.centerX + offset * dimensions.spacing;
    const y = dimensions.centerY - offset * dimensions.rise;
    const z = 130 - distance * 135;
    const opacity = distance > 4.5 ? 0 : Math.max(0.18, 1 - distance * 0.18);
    const baseTiltX = -5.5 - offset * 2.2 - kineticTilt * 0.9;
    const baseTiltY = -20 - offset * 1.6 - kineticTilt * 1.1;
    const baseTiltZ = offset * 2.6 + kineticTilt * 0.55;
    const pointerTiltX = -pointerY * 2.6;
    const pointerTiltY = pointerX * 2.1;
    const spin = Number(disc.style.getPropertyValue("--spin")) || 0;
    const discWidth = dimensions.size * (collectionMode === "zhuotu" ? 1 : 0.75);

    disc.style.transform = `
      translate3d(
        ${x - discWidth / 2}px,
        ${y - dimensions.size / 2}px,
        ${z}px
      )
      rotateX(${baseTiltX + pointerTiltX}deg)
      rotateY(${baseTiltY + pointerTiltY + spin}deg)
      rotateZ(${baseTiltZ}deg)
      scale(${scale})
    `;
    disc.style.opacity = String(opacity);
    disc.style.zIndex = String(100 - Math.round(distance * 10));
    disc.classList.toggle("is-active", Math.abs(index - target) < 0.1);
  });

  if (
    Math.abs(target - focus) > 0.001
    || Math.abs(focusVelocity) > 0.001
  ) {
    animationFrame = requestAnimationFrame(render);
  } else {
    lastFrameAt = 0;
  }
}

function requestRender() {
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(render);
  }
}

function navigateTo(nextIndex, options = {}) {
  const clamped = Math.max(0, Math.min(getCollectionCount() - 1, nextIndex));
  if (clamped === activeIndex && !options.force) {
    return;
  }

  const direction = clamped - activeIndex;
  activeIndex = clamped;
  collectionPositions[collectionMode] = clamped;
  target = clamped;

  if (direction !== 0) {
    const incoming = discs[clamped];
    incoming.style.setProperty("--spin", String(-direction * 7));
    window.setTimeout(() => {
      incoming.style.setProperty("--spin", "0");
    }, 60);
  }

  updateProduction();
  requestRender();
  if (!observationDialog.open) scheduleObservationModelWarmup(220);
}

function getProductionMeta(production) {
  return production.meta ?? [
    { label: "导演", value: production.directors.join("、") },
    { label: "年份", value: production.year },
    { label: "主演", value: production.starring.join("\n") },
  ];
}

function syncIndexPanel() {
  const isZhuotu = collectionMode === "zhuotu";
  const collectionCount = getCollectionCount();
  indexContext.textContent = isZhuotu ? "琢土 / COLLECTION" : "陶成 / COLLECTION";
  document.querySelectorAll(".index-item").forEach((item, index) => {
    const titleZh = isZhuotu
      ? ZHUOTU_METADATA[index]?.titleLines[0] ?? "待补充"
      : productions[index]?.titleLines?.[0] ?? productions[index]?.title ?? "";
    const titleEn = isZhuotu
      ? ZHUOTU_METADATA[index]?.titleLines[1] ?? ""
      : productions[index]?.titleLines?.[1] ?? "";
    item.hidden = index >= collectionCount;
    item.inert = index >= collectionCount;
    item.querySelector(".index-item__title").textContent = titleZh;
    item.querySelector(".index-item__english").textContent = titleEn;
    item.querySelector(".index-item__year").textContent = isZhuotu
      ? `${String(index + 1).padStart(2, "0")} / ${String(collectionCount).padStart(2, "0")}`
      : productions[index]?.year ?? "";
    const isCurrent = index === activeIndex;
    item.classList.toggle("is-current", isCurrent);
    const button = item.querySelector("button");
    button.setAttribute(
      "aria-label",
      titleEn ? `${titleZh}，${titleEn}` : titleZh,
    );
    if (isCurrent) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function updateProduction() {
  if (collectionMode === "zhuotu") {
    const collectionCount = getCollectionCount();
    activeIndex = Math.min(activeIndex, collectionCount - 1);
    collectionPositions.zhuotu = activeIndex;
    title.textContent =
      ZHUOTU_METADATA[activeIndex]?.titleLines.join("\n") ?? "琢土\nCARVED EARTH";
    title.classList.remove("production-title--long");
    const zhuotuMeta = [
      { label: "工序要义", value: "提纯胎土" },
      { label: "核心要点", value: "碎矿\n淘洗\n沉淀\n除砂" },
    ];
    creditLabels.forEach((element, index) => {
      const item = zhuotuMeta[index];
      element.closest(".credit-row").hidden = !item;
      element.textContent = item?.label ?? "";
    });
    creditValues.forEach((element, index) => {
      element.textContent = zhuotuMeta[index]?.value ?? "";
    });
    creditValues[0].textContent =
      ZHUOTU_METADATA[activeIndex]?.process ?? "待补充";
    creditValues[1].textContent =
      ZHUOTU_METADATA[activeIndex]?.essentials ?? "待补充";
    zhuotuCaption.textContent = ZHUOTU_METADATA[activeIndex]?.caption ?? "";
    zhuotuCaption.hidden = !zhuotuCaption.textContent;
    productionCaption.hidden = true;
    status.textContent = `${activeIndex + 1} / ${collectionCount} · 琢土`;
    document.title = `${ZHUOTU_METADATA[activeIndex]?.titleLines[0] ?? "琢土"} — 琢土`;
    reviewPair.replaceChildren();
    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === collectionCount - 1;
    discs.forEach((disc, index) => {
      const isAvailable = index < collectionCount;
      disc.hidden = !isAvailable;
      disc.inert = !isAvailable;
      if (isAvailable) {
        disc.setAttribute("aria-label", `琢土版块，${index + 1} / ${collectionCount}`);
      }
    });
    document.querySelector("[data-instructions]").textContent =
      `当前为琢土${ZHUOTU_METADATA[activeIndex]?.titleLines[0] ?? "待补充"}工序，第 ${activeIndex + 1} 个版块，共 ${collectionCount} 个。使用滚轮、拖拽或左右方向键切换，点击“观器”查看当前器物。`;
    syncIndexPanel();
    return;
  }

  const production = productions[activeIndex];
  const meta = getProductionMeta(production);
  title.textContent = production.titleLines?.join("\n") ?? production.title;
  title.classList.toggle(
    "production-title--long",
    (production.titleLines?.[0]?.length ?? production.title.length) > 6,
  );
  creditLabels.forEach((element, index) => {
    const item = meta[index];
    element.closest(".credit-row").hidden = !item;
    element.textContent = item?.label ?? "";
  });
  creditValues.forEach((element, index) => {
    element.textContent = meta[index]?.value ?? "";
  });
  status.textContent = `${activeIndex + 1} / ${productions.length} · ${production.title}`;
  document.title = `${production.title} — A24 电视`;
  reviewPair.replaceChildren(...production.reviews.map(createReview));
  productionCaption.textContent = production.caption ? `“${production.caption}”` : "";
  productionCaption.hidden = !productionCaption.textContent;
  previousButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === productions.length - 1;
  discs.forEach((disc, index) => {
    const isAvailable = index < productions.length;
    disc.hidden = !isAvailable;
    disc.inert = !isAvailable;
    if (isAvailable) {
      disc.setAttribute(
        "aria-label",
        `${productions[index].title}，${index + 1} / ${productions.length}`,
      );
    }
  });

  syncIndexPanel();

  document.querySelector("[data-instructions]").textContent =
    `当前作品 ${production.title}，第 ${activeIndex + 1} 部，共 ${productions.length} 部。使用左右方向键切换，按回车打开沉浸式浏览，按空格翻面，点击“观器”查看器物观察界面。`;
}

function setCollectionMode(nextMode) {
  if (
    nextMode === collectionMode
    || !Object.prototype.hasOwnProperty.call(collectionPositions, nextMode)
  ) {
    return;
  }

  collectionPositions[collectionMode] = activeIndex;
  collectionMode = nextMode;
  activeIndex = Math.min(
    collectionPositions[nextMode] ?? 0,
    getCollectionCount(collectionMode) - 1,
  );
  focus = activeIndex;
  target = activeIndex;
  focusVelocity = 0;
  wheelAccumulator = 0;
  hero.dataset.collection = collectionMode;
  zhuotuCaption.hidden =
    collectionMode !== "zhuotu"
    || !ZHUOTU_METADATA[activeIndex]?.caption;

  collectionTabs.forEach((tab) => {
    const isCurrent = tab.dataset.collectionNav === collectionMode;
    tab.classList.toggle("is-current", isCurrent);
    tab.setAttribute("aria-pressed", String(isCurrent));
  });

  closeIndex(false);
  updateProduction();
  measure();
}

function getObservationEntries() {
  if (collectionMode === "zhuotu") {
    return ZHUOTU_ARTWORKS.map((artwork, index) => ({
      art: artwork.src,
      alt: artwork.alt,
      title: ZHUOTU_METADATA[index]?.titleLines?.[0] ?? "琢土",
      titleEn: ZHUOTU_METADATA[index]?.titleLines?.[1] ?? "CARVED EARTH",
      index: String(index + 1).padStart(2, "0"),
    }));
  }

  return productions.map((production, index) => ({
    art: production.art,
    alt: `${production.title} 作品画面`,
    title: production.titleLines?.[0] ?? production.title,
    titleEn: production.titleLines?.[1] ?? "",
    index: String(index + 1).padStart(2, "0"),
  }));
}

function wrapObservationIndex(index, count = getCollectionCount()) {
  return ((index % count) + count) % count;
}

function getCircularOffset(index, active, count) {
  let offset = index - active;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

function renderObservationRail(entries) {
  const itemCount = entries.length;
  const previews = [];

  entries.forEach((entry, index) => {
    const offset = getCircularOffset(index, activeIndex, itemCount);
    const distance = Math.abs(offset);
    if (distance === 0 || distance > 2) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "observation-dialog__rail-item";
    button.dataset.observationRailItem = String(index);
    button.style.setProperty("--offset", String(offset));
    button.style.setProperty("--peek-scale", distance === 1 ? "0.92" : "0.72");
    button.style.setProperty("--peek-opacity", distance === 1 ? "0.62" : "0.2");
    button.tabIndex = distance === 1 ? 0 : -1;
    button.setAttribute(
      "aria-label",
      `${offset < 0 ? "观察上一件" : "观察下一件"}：${entry.title}`,
    );

    const image = document.createElement("img");
    image.src = entry.art;
    image.alt = "";
    image.draggable = false;
    image.decoding = "async";
    image.loading = "eager";
    button.append(image);
    button.addEventListener("click", () => {
      if (performance.now() < observationSuppressRailClickUntil) return;
      changeObservationTo(index);
    });
    previews.push(button);
  });

  observationRail.replaceChildren(...previews);
  observationRail.setAttribute(
    "aria-label",
    `相邻器物，共 ${itemCount} 件，当前第 ${activeIndex + 1} 件`,
  );
}

function getObservationData() {
  const collectionCount = getCollectionCount();
  const countLabel =
    `${String(activeIndex + 1).padStart(2, "0")} / `
    + String(collectionCount).padStart(2, "0");

  if (collectionMode === "zhuotu") {
    const artwork = ZHUOTU_ARTWORKS[activeIndex];
    const metadata = ZHUOTU_METADATA[activeIndex];
    return {
      art: artwork?.src ?? "./assets/taoyetu-scroll-01.jpg",
      alt: artwork?.alt ?? "琢土工序画面",
      index: String(activeIndex + 1).padStart(2, "0"),
      english: metadata?.titleLines?.[1] ?? "CARVED EARTH",
      title: metadata?.titleLines?.[0] ?? "琢土",
      titleEn: metadata?.titleLines?.[1] ?? "CARVED EARTH",
      caption: metadata?.caption ?? "",
      meta: [
        { label: "版块", value: countLabel },
        { label: "工序", value: metadata?.process ?? "待补充" },
        { label: "工序要义", value: metadata?.essentials ?? "待补充" },
        { label: "观察对象", value: "陶冶图卷" },
      ],
      note:
        metadata?.detailDescription
        ?? `观察“${metadata?.process ?? "制瓷工序"}”中的工具、人物动作与空间关系。`,
      count: countLabel,
    };
  }

  const production = productions[activeIndex];
  const meta = getProductionMeta(production);
  const representative =
    meta[2]?.value?.replaceAll("\n", "、") || "代表性器物";
  const quality = meta[3]?.value || production.caption;
  return {
    art: production.art,
    model: production.model ?? null,
    modelRotationY: production.modelRotationY ?? 0,
    modelViewScale: production.modelViewScale ?? 1,
    alt: `${production.title} 作品画面`,
    index: String(activeIndex + 1).padStart(2, "0"),
    english: production.titleLines?.[1] ?? "OBJECT STUDY",
    title: production.titleLines?.[0] ?? production.title,
    titleEn: production.titleLines?.[1] ?? "",
    caption: production.caption ? `“${production.caption}”` : "",
    meta,
    note:
      `以${representative}为观察核心。${quality}；`
      + "依次留意器形的比例、釉面的光泽与装饰的层次，辨认这一时期的工艺取向。",
    count: countLabel,
  };
}

function getObservationStudyFeatures() {
  if (collectionMode !== "taocheng") return [];
  return OBSERVATION_STUDY_FEATURES[activeIndex] ?? OBSERVATION_STUDY_FEATURES[0];
}

function renderObservationStudyFeatures(features) {
  const buttons = features.map((feature, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "observation-study__feature";
    button.dataset.observationStudyFeature = String(index);
    button.setAttribute("aria-label", `查看特征 ${index + 1}：${feature.label}`);
    button.innerHTML = `
      <span class="observation-study__feature-label">${feature.label}</span>
      <span class="observation-study__feature-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="observation-study__feature-dot" aria-hidden="true"></span>
    `;
    button.addEventListener("click", () => setObservationFeature(index));
    item.append(button);
    return item;
  });
  observationStudyFeatureList.replaceChildren(...buttons);
  syncObservationStudyFeatures(features);
}

function syncObservationStudyFeatures(features = getObservationStudyFeatures()) {
  const buttons = [
    ...observationStudyFeatureList.querySelectorAll("[data-observation-study-feature]"),
  ];
  buttons.forEach((button, index) => {
    const isCurrent = index === observationFeatureIndex;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-pressed", String(isCurrent));
  });
  observationStudyFeatureList.setAttribute(
    "aria-label",
    `器物特征，共 ${features.length} 项，当前第 ${observationFeatureIndex + 1} 项`,
  );
}

function renderObservationStudy(direction = 0) {
  if (!isObservationStudy || collectionMode !== "taocheng") return;
  const production = productions[activeIndex];
  const features = getObservationStudyFeatures();
  if (!production || !features.length) return;
  observationFeatureIndex = (
    observationFeatureIndex + features.length
  ) % features.length;
  const feature = features[observationFeatureIndex];
  const meta = getProductionMeta(production);

  observationStudyKicker.textContent = feature.label;
  observationStudyEnglish.textContent = feature.english;
  observationStudyCount.textContent =
    `${String(observationFeatureIndex + 1).padStart(2, "0")} / `
    + String(features.length).padStart(2, "0");
  const representative =
    meta[2]?.value?.replaceAll("\n", "、") || production.titleLines?.[0];
  observationStudyObject.textContent =
    `${production.titleLines?.[0] ?? production.title} · ${representative}`;
  observationStudyTitle.textContent = feature.title;
  observationStudyDescription.textContent = feature.description;
  observationStudyArtifactName.textContent = production.artifactName ?? "";
  observationStudyArtifactName.hidden = !production.artifactName;
  observationStudyYear.textContent = production.year;
  observationStudyMeta.replaceChildren(
    ...meta.map((item) => {
      const row = document.createElement("div");
      const label = document.createElement("dt");
      const value = document.createElement("dd");
      label.textContent = item.label;
      value.textContent = item.value;
      row.append(label, value);
      return row;
    }),
  );

  const featureListIndex = observationStudyFeatureList.dataset.index;
  if (featureListIndex !== String(activeIndex)) {
    observationStudyFeatureList.dataset.index = String(activeIndex);
    renderObservationStudyFeatures(features);
  } else {
    syncObservationStudyFeatures(features);
  }

  observationStudyPrevious.setAttribute(
    "aria-label",
    `查看上一件器物：${productions[
      wrapObservationIndex(activeIndex - 1, productions.length)
    ].title}`,
  );
  observationStudyNext.setAttribute(
    "aria-label",
    `查看下一件器物：${productions[
      wrapObservationIndex(activeIndex + 1, productions.length)
    ].title}`,
  );
  observationDialog.dataset.studyFeature = String(observationFeatureIndex + 1);
  observationModelController?.setStudyView(observationFeatureIndex);
  observationDialog.dataset.modelRotationX = "0";
  observationDialog.dataset.modelRotationY = "0";

  if (direction !== 0 && !reducedMotion.matches) {
    observationStudy.querySelector(".observation-study__copy").animate(
      [
        {
          opacity: 0.48,
          transform: `translateY(${direction > 0 ? 0.5 : -0.5}rem)`,
        },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    );
  }
}

function setObservationFeature(index) {
  if (!isObservationStudy) return;
  const features = getObservationStudyFeatures();
  if (!features.length) return;
  const current = observationFeatureIndex;
  observationFeatureIndex = (
    index % features.length + features.length
  ) % features.length;
  renderObservationStudy(observationFeatureIndex === current ? 0 : (
    observationFeatureIndex > current ? 1 : -1
  ));
}

function openObservationStudy() {
  if (
    collectionMode !== "taocheng"
    || observationDialog.dataset.modelReady !== "true"
    || performance.now() < observationSuppressStudyClickUntil
    || isObservationStudy
  ) {
    return;
  }
  isObservationStudy = true;
  observationFeatureIndex = 0;
  observationStudyWheelAccumulator = 0;
  observationDialog.classList.add("is-observation-study");
  observationStudy.setAttribute("aria-hidden", "false");
  observationStudy.inert = false;
  observationCopy.inert = true;
  observationStudyEntry.disabled = true;
  renderObservationStudy();
  window.setTimeout(() => observationStudyBack.focus({ preventScroll: true }), 0);
}

function closeObservationStudy(returnFocus = true) {
  if (!isObservationStudy) return;
  finishObservationModelOrbit();
  isObservationStudy = false;
  observationDialog.classList.remove("is-observation-study");
  observationStudy.setAttribute("aria-hidden", "true");
  observationStudy.inert = true;
  observationCopy.inert = false;
  observationStudyEntry.disabled = observationDialog.dataset.modelReady !== "true";
  observationModelController?.setStudyView(null);
  if (returnFocus) {
    window.setTimeout(() => {
      observationStudyEntry.focus({ preventScroll: true });
    }, 0);
  }
}

function hideObservationModel() {
  observationModelToken += 1;
  observationModelUrl = null;
  closeObservationStudy(false);
  observationModelController?.setVisible(false);
  observationModelLayer.hidden = true;
  observationModelSnapshot.hidden = true;
  observationModelCanvas.setAttribute("aria-hidden", "true");
  observationModelStatus.hidden = true;
  observationFrame.classList.remove(
    "is-model-mode",
    "is-model-ready",
    "is-model-transitioning",
    "has-model-error",
  );
  observationDialog.classList.remove("is-observation-model");
  observationRail.removeAttribute("aria-hidden");
  observationArt.removeAttribute("aria-hidden");
  observationStudyEntry.disabled = true;
  observationDialog.dataset.modelReady = "false";
}

function settleObservationSnapshot(token) {
  window.setTimeout(() => {
    if (token !== observationModelToken) return;
    observationModelSnapshot.hidden = true;
  }, OBSERVATION_MODEL_FADE_MS);
}

function getObservationModelController() {
  if (!observationModelLoad) {
    observationModelLoad = import("./src/observation-model.js").then(
      ({ createObservationModel }) => createObservationModel({
        canvas: observationModelCanvas,
      }),
    );
  }
  return observationModelLoad;
}

function scheduleObservationModelWarmup(delay = 160) {
  window.clearTimeout(observationWarmTimer);
  const token = observationWarmToken + 1;
  observationWarmToken = token;
  if (collectionMode !== "taocheng") return;

  observationWarmTimer = window.setTimeout(async () => {
    if (token !== observationWarmToken) return;
    const count = productions.length;
    const indexes = [
      activeIndex,
      (activeIndex + 1) % count,
      (activeIndex + count - 1) % count,
    ];

    try {
      const controller = await getObservationModelController();
      for (const index of indexes) {
        if (token !== observationWarmToken) return;
        const production = productions[index];
        if (!production?.model) continue;
        await controller.preload(production.model, {
          rotationY: production.modelRotationY ?? 0,
          viewScale: production.modelViewScale ?? 1,
        });
      }
    } catch {
      // A failed speculative load must not affect the observation interface.
    }
  }, delay);
}

async function loadObservationModel(modelUrl, token, rotationY, viewScale) {
  try {
    const controller = await getObservationModelController();
    if (token !== observationModelToken || modelUrl !== observationModelUrl) return;
    observationModelController = controller;
    await controller.load(modelUrl, {
      rotationY,
      viewScale,
      onProgress(progress) {
        if (token !== observationModelToken || modelUrl !== observationModelUrl) return;
        const percent = Math.round(Math.max(0, Math.min(1, progress)) * 100);
        observationModelStatus.textContent = `正在载入三维器物… ${percent}%`;
      },
    });
    if (token !== observationModelToken || modelUrl !== observationModelUrl) return;
    controller.setVisible(true);
    observationModelStatus.hidden = true;
    observationFrame.classList.remove("has-model-error");
    observationFrame.classList.add("is-model-ready");
    observationFrame.classList.remove("is-model-transitioning");
    observationStudyEntry.disabled = false;
    observationModelController?.setStudyView(
      isObservationStudy ? observationFeatureIndex : null,
    );
    observationArt.setAttribute("aria-hidden", "true");
    observationDialog.dataset.modelReady = "true";
    settleObservationSnapshot(token);
  } catch (error) {
    console.warn("Observation model failed to load after retry.", error);
    if (token !== observationModelToken || modelUrl !== observationModelUrl) return;
    observationFrame.classList.remove("is-model-ready");
    observationFrame.classList.remove("is-model-transitioning");
    observationFrame.classList.add("has-model-error");
    observationModelStatus.hidden = false;
    observationModelStatus.textContent = getObservationModelFailureMessage();
    observationStudyEntry.disabled = true;
    closeObservationStudy(false);
    observationArt.removeAttribute("aria-hidden");
    observationDialog.dataset.modelReady = "error";
    settleObservationSnapshot(token);
  }
}

function syncObservationModel(modelUrl, rotationY = 0, viewScale = 1) {
  const token = observationModelToken + 1;
  const isSwitchingModel = observationFrame.classList.contains("is-model-ready");
  observationModelToken = token;

  if (!modelUrl) {
    hideObservationModel();
    return;
  }

  const capturedFrame = isSwitchingModel
    && observationModelController?.captureFrame(observationModelSnapshot);
  if (capturedFrame) {
    observationModelSnapshot.hidden = false;
    observationFrame.classList.add("is-model-transitioning");
  }

  observationModelUrl = modelUrl;
  observationModelController?.setVisible(false);
  observationModelLayer.hidden = false;
  observationModelLayer.removeAttribute("aria-hidden");
  observationModelCanvas.setAttribute("aria-hidden", "false");
  observationModelStatus.hidden = false;
  observationModelStatus.textContent = "正在载入三维器物…";
  observationFrame.classList.add("is-model-mode");
  observationFrame.classList.remove("is-model-ready", "has-model-error");
  observationStudyEntry.disabled = true;
  observationDialog.classList.add("is-observation-model");
  observationRail.setAttribute("aria-hidden", "true");
  observationDialog.dataset.modelReady = "loading";

  const showModel = () => {
    if (token !== observationModelToken || modelUrl !== observationModelUrl) return;
    loadObservationModel(modelUrl, token, rotationY, viewScale);
  };

  if (capturedFrame) {
    window.setTimeout(showModel, OBSERVATION_MODEL_SWITCH_HOLD_MS);
  } else {
    window.requestAnimationFrame(showModel);
  }
}

function renderObservation() {
  const data = getObservationData();
  const entries = getObservationEntries();
  const itemCount = entries.length;
  const previous = entries[wrapObservationIndex(activeIndex - 1, itemCount)];
  const next = entries[wrapObservationIndex(activeIndex + 1, itemCount)];
  observationDialog.dataset.collection = collectionMode;
  observationArt.src = data.art;
  observationArt.alt = data.alt;
  observationStudyEntry.hidden = !data.model || collectionMode !== "taocheng";
  if (!reducedMotion.matches && observationDialog.open && !data.model) {
    observationArt.getAnimations().forEach((animation) => animation.cancel());
    observationArt.animate(
      [
        { opacity: 0.28, transform: "scale(1.016)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      {
        duration: 300,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    );
  }
  observationIndex.textContent = data.index;
  observationEnglish.textContent = data.english;
  observationTitle.textContent = data.title;
  observationTitleEn.textContent = data.titleEn;
  observationCaption.textContent = data.caption;
  observationCaption.hidden = !data.caption;
  observationNote.textContent = data.note;
  observationCount.textContent = data.count;
  observationProgress.textContent = data.count;
  observationMetaLabels.forEach((label, index) => {
    label.textContent = data.meta[index]?.label ?? "";
    label.closest("div").hidden = !data.meta[index];
  });
  observationMetaValues.forEach((value, index) => {
    value.textContent = data.meta[index]?.value ?? "";
  });
  syncObservationModel(data.model, data.modelRotationY, data.modelViewScale);
  observationPrevious.disabled = itemCount <= 1;
  observationNext.disabled = itemCount <= 1;
  observationPrevious.setAttribute(
    "aria-label",
    `观察上一件（循环）：${previous.title}`,
  );
  observationNext.setAttribute(
    "aria-label",
    `观察下一件（循环）：${next.title}`,
  );
  renderObservationRail(entries);
  renderObservationStudy();
  scheduleObservationModelWarmup(0);
}

function openObservationPanel() {
  closeIndex(false);
  closeObservationStudy(false);
  if (collectionMode !== "taocheng") {
    observationReturnCollectionMode = collectionMode;
  }
  setCollectionMode("taocheng");
  renderObservation();
  if (!observationDialog.open) {
    if (typeof observationDialog.showModal === "function") {
      observationDialog.showModal();
    } else {
      observationDialog.setAttribute("open", "");
    }
  }
  observationToggle.setAttribute("aria-pressed", "true");
  document.body.classList.add("is-observation-open");
  window.requestAnimationFrame(() => observationClose.focus());
}

function closeObservationPanel(returnFocus = true) {
  if (observationDialog.open) {
    observationDialog.close();
  } else {
    observationDialog.removeAttribute("open");
    hideObservationModel();
  }
  observationToggle.setAttribute("aria-pressed", "false");
  document.body.classList.remove("is-observation-open");
  if (returnFocus) {
    window.setTimeout(() => observationToggle.focus({ preventScroll: true }), 0);
  }
}

function changeObservation(direction) {
  if (isObservationStudy) observationFeatureIndex = 0;
  const count = getCollectionCount();
  navigateTo(wrapObservationIndex(activeIndex + direction, count));
  renderObservation();
}

function changeObservationTo(index) {
  const count = getCollectionCount();
  const next = wrapObservationIndex(index, count);
  if (next === activeIndex) return;
  navigateTo(next);
  renderObservation();
}

function createReview(review) {
  const article = document.createElement("article");
  article.className = "review";
  article.innerHTML = `
    <div class="stars" role="img" aria-label="五星中的 ${review.rating} 星">
      ${Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, review.rating - index));
        return `
          <span class="star" style="--fill:${fill}">
            <svg viewBox="0 0 11 10" fill="none" aria-hidden="true">
              <path d="${starPath}" fill="none" stroke="currentColor" stroke-width=".7"></path>
              <path d="${starPath}" fill="currentColor" clip-path="inset(0 ${100 - fill * 100}% 0 0)"></path>
            </svg>
          </span>
        `;
      }).join("")}
    </div>
    <div class="review__text">
      <p class="review__publication">${review.publication}</p>
      ${review.quote ? `<blockquote class="review__quote">“${review.quote}”</blockquote>` : ""}
    </div>
  `;
  return article;
}

function step(direction) {
  navigateTo(activeIndex + direction);
}

function getDetailTitle(production) {
  if (production.titleLines?.length) {
    return production.titleLines.join("\n");
  }
  const splitAt = production.title.indexOf(" ");
  if (splitAt < 0) return production.title;
  return `${production.title.slice(0, splitAt)}\n${production.title.slice(splitAt + 1).toUpperCase()}`;
}

function renderDetail(direction = 0) {
  const isZhuotu = collectionMode === "zhuotu";
  const collectionCount = getCollectionCount();
  const production = isZhuotu ? null : productions[detailIndex];
  const zhuotuArtwork = isZhuotu ? ZHUOTU_ARTWORKS[detailIndex] : null;
  const zhuotuMetadata = isZhuotu ? ZHUOTU_METADATA[detailIndex] : null;
  const meta = isZhuotu
    ? [
        { label: "版块", value: `${String(detailIndex + 1).padStart(2, "0")} / ${String(collectionCount).padStart(2, "0")}` },
        { label: "状态", value: zhuotuArtwork ? "已收录" : "空白占位" },
        { label: "页面比例", value: "16 : 9" },
      ]
    : getProductionMeta(production);

  document.querySelector("[data-detail-count]").textContent =
    `${String(detailIndex + 1).padStart(2, "0")} / ${String(collectionCount).padStart(2, "0")}`;
  document.querySelector("[data-detail-index]").textContent =
    String(detailIndex + 1).padStart(2, "0");
  document.querySelector("[data-detail-total]").textContent =
    String(collectionCount).padStart(2, "0");
  document.querySelector("[data-detail-title]").textContent = isZhuotu
    ? "琢土\nCARVED EARTH"
    : getDetailTitle(production);
  detailCreditLabels.forEach((element, index) => {
    const item = meta[index];
    element.closest("div").hidden = !item;
    element.textContent = item?.label ?? "";
  });
  detailCreditValues.forEach((element, index) => {
    element.textContent = meta[index]?.value ?? "";
  });
  document.querySelector("[data-detail-reviews]").replaceChildren(
    ...(isZhuotu ? [] : production.reviews.map(createReview)),
  );
  detailCaption.textContent =
    !isZhuotu && production.caption ? `“${production.caption}”` : "";
  detailCaption.hidden = !detailCaption.textContent;
  detailDialog.dataset.collection = collectionMode;
  const hasDetailArt = Boolean(production?.detailArt);
  detailPageArtLayer.hidden = !hasDetailArt;
  detailPageArts.forEach((image, index) => {
    if (!image) return;
    image.hidden = !hasDetailArt || index !== detailIndex;
  });
  const hasSecondaryArt = Boolean(production?.detailSecondaryArt);
  detailSecondaryArtLayer.hidden = !hasSecondaryArt;
  detailSecondaryArts.forEach((image, index) => {
    if (!image) return;
    image.hidden = !hasSecondaryArt || index !== detailIndex;
  });
  detailSecondaryPanel.toggleAttribute("data-has-art", hasSecondaryArt);
  detailSecondaryPanel.setAttribute(
    "aria-label",
    hasSecondaryArt
      ? `${production.title} 16:9 第二版块画面`
      : "空白 16:9 画面版块，第二屏",
  );
  const hasTertiaryArt = Boolean(production?.detailTertiaryArt);
  detailTertiaryArtLayer.hidden = !hasTertiaryArt;
  detailTertiaryArts.forEach((image, index) => {
    if (!image) return;
    image.hidden = !hasTertiaryArt || index !== detailIndex;
  });
  detailTertiaryPanel.toggleAttribute("data-has-art", hasTertiaryArt);
  detailTertiaryPanel.setAttribute(
    "aria-label",
    hasTertiaryArt
      ? `${production.title} 16:9 第三版块画面`
      : "空白 16:9 画面版块，第三屏",
  );
  detailTertiaryPanelContainer.setAttribute(
    "aria-label",
    hasTertiaryArt
      ? `${production.title} 第三版块，16:9 画面`
      : "空白画面版块，第三屏",
  );
  const hasFourthArt = Boolean(production?.detailFourthArt);
  detailFourthArtLayer.hidden = !hasFourthArt;
  detailFourthArts.forEach((image, index) => {
    if (!image) return;
    image.hidden = !hasFourthArt || index !== detailIndex;
  });
  detailFourthPanel.toggleAttribute("data-has-art", hasFourthArt);
  detailFourthPanel.setAttribute(
    "aria-label",
    hasFourthArt
      ? `${production.title} 16:9 第四版块画面`
      : "空白 16:9 画面版块，第四屏",
  );
  detailFourthPanelContainer.setAttribute(
    "aria-label",
    hasFourthArt
      ? `${production.title} 第四版块，16:9 画面`
      : "空白画面版块，第四屏",
  );
  detailViewer.toggleAttribute("data-has-art", hasDetailArt);
  detailDialog.toggleAttribute("data-has-art", hasDetailArt);
  detailCloseLabel.textContent = isZhuotu ? "返回画廊" : "返回";
  detailPreviousButton.disabled = false;
  detailNextButton.disabled = false;

  const hasImmersiveVideo = isZhuotu && Boolean(zhuotuArtwork?.video);

  if (isZhuotu && zhuotuArtwork) {
    const annotationTitle = zhuotuMetadata?.detailTitle
      ?? `${zhuotuMetadata?.titleLines[0] ?? "琢土"}・${zhuotuMetadata?.titleLines[1] ?? "CARVED EARTH"}`;
    const annotationDescription = zhuotuMetadata?.detailDescription
      ?? `本幅表现${zhuotuMetadata?.process ?? "制瓷工序"}。画面围绕${zhuotuMetadata?.essentials.split("\n").join("、") ?? "原料、成形与烧制"}展开，记录该版块所见的制瓷环节。`;
    detailImmersiveTitle.textContent = annotationTitle;
    detailImmersiveDescription.textContent = annotationDescription;
    detailImmersiveCopyTitle.hidden = false;
    detailImmersiveCopyDescription.hidden = false;
    detailImmersiveArt.src = zhuotuArtwork.src;
    detailImmersiveArt.alt = zhuotuArtwork.alt;
    detailImmersiveArt.hidden = hasImmersiveVideo;
    detailImmersiveVideo.hidden = !hasImmersiveVideo;

    if (hasImmersiveVideo) {
      const nextVideoSource = zhuotuArtwork.video;
      detailImmersiveVideo.poster = zhuotuArtwork.src;
      if (detailImmersiveVideo.getAttribute("src") !== nextVideoSource) {
        detailImmersiveVideo.src = nextVideoSource;
        detailImmersiveVideo.load();
      }
      detailImmersiveVideo.setAttribute(
        "aria-label",
        `${zhuotuArtwork.alt}动态画面，按回车或空格暂停或播放`,
      );
    } else {
      detailImmersiveVideo.pause();
    }

    detailImmersivePage.setAttribute(
      "aria-label",
      `陶冶图卷第 ${detailIndex + 1} 版块，${zhuotuArtwork.alt}${hasImmersiveVideo ? "动态画面" : ""}`,
    );
    detailImmersiveStatus.textContent = "已收录";
  } else {
    detailImmersiveCopyTitle.hidden = true;
    detailImmersiveCopyDescription.hidden = true;
    detailImmersiveVideo.pause();
    detailImmersiveVideo.hidden = true;
    detailImmersiveArt.removeAttribute("src");
    detailImmersiveArt.alt = "";
    detailImmersiveArt.hidden = false;
    detailImmersivePage.setAttribute("aria-label", "空白内容版块");
    detailImmersiveStatus.textContent = "空白占位";
  }
  detailImmersiveIndex.textContent = String(detailIndex + 1).padStart(2, "0");
  detailImmersiveTotal.textContent = String(collectionCount).padStart(2, "0");
  detailImmersiveCounter.setAttribute(
    "aria-label",
    `第 ${detailIndex + 1} 页，共 ${collectionCount} 页`,
  );

  if (detailDialog.open && hasImmersiveVideo && !reducedMotion.matches) {
    detailImmersiveVideo.play().catch(() => {});
  }

  if (direction !== 0 && !reducedMotion.matches) {
    detailViewer.animate(
      [
        { opacity: 0.54, transform: `translateX(${direction * -1.2}%)` },
        { opacity: 1, transform: "translateX(0)" },
      ],
      { duration: 320, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    );
  }
}

function openDetail(selectionIndex = activeIndex) {
  const wasOpen = detailDialog.open || detailDialog.hasAttribute("open");
  if (!wasOpen) {
    const clamped = Math.max(
      0,
      Math.min(getCollectionCount() - 1, selectionIndex),
    );
    if (clamped !== activeIndex) navigateTo(clamped, { force: true });
    detailIndex = activeIndex;
  }
  renderDetail();

  if (!wasOpen) {
    if (typeof detailDialog.showModal === "function") {
      detailDialog.showModal();
    } else {
      detailDialog.setAttribute("open", "");
    }
  }

  // A closed dialog can restore its previous scroll offset after showModal().
  // Reset after the opening layout so every visit starts at the first panel.
  resetDetailScroll();
  window.requestAnimationFrame(() => {
    if (detailDialog.open || detailDialog.hasAttribute("open")) {
      resetDetailScroll();
    }
  });

  if (
    !reducedMotion.matches
    && !detailImmersiveVideo.hidden
  ) {
    detailImmersiveVideo.play().catch(() => {});
  }
}

function closeDetail() {
  detailImmersiveVideo.pause();
  if (typeof detailDialog.close === "function") {
    detailDialog.close();
  } else {
    detailDialog.removeAttribute("open");
  }
  window.setTimeout(() => discs[activeIndex]?.focus({ preventScroll: true }), 0);
}

function changeDetail(direction) {
  if (direction === 0) return;
  const collectionCount = getCollectionCount();
  detailIndex = (detailIndex + direction + collectionCount) % collectionCount;
  renderDetail(direction);
  resetDetailScroll();
}

function resetDetailScroll() {
  detailScroller.scrollTo({ top: 0, left: 0, behavior: "instant" });
  syncDetailPreviewControl();
}

function syncDetailPreviewControl() {
  const panels = [...detailScroller.querySelectorAll("[data-detail-panel]")];
  if (!panels.length) return;
  const currentPanel = Math.round(detailScroller.scrollTop / detailScroller.clientHeight);
  const isLastPanel = currentPanel >= panels.length - 1;
  detailPreviewButton.textContent = isLastPanel ? "上移" : "下移预览";
  detailPreviewButton.setAttribute(
    "aria-label",
    isLastPanel ? "上移，回到第一个版块" : "下移预览下一版块",
  );
}

function previewNextPanel() {
  const panels = [...detailScroller.querySelectorAll("[data-detail-panel]")];
  if (!panels.length) return;
  const currentPanel = Math.round(detailScroller.scrollTop / detailScroller.clientHeight);
  const nextPanel = currentPanel >= panels.length - 1
    ? panels[0]
    : panels[currentPanel + 1];
  nextPanel?.scrollIntoView({
    behavior: reducedMotion.matches ? "auto" : "smooth",
    block: "center",
  });
}

let detailPreviewSyncFrame = 0;
function scheduleDetailPreviewSync() {
  if (detailPreviewSyncFrame) return;
  detailPreviewSyncFrame = window.requestAnimationFrame(() => {
    detailPreviewSyncFrame = 0;
    syncDetailPreviewControl();
  });
}

function openIndex() {
  syncIndexPanel();
  indexPanel.classList.add("is-open");
  indexPanel.setAttribute("aria-hidden", "false");
  indexToggle.setAttribute("aria-expanded", "true");
  window.setTimeout(() => {
    indexPanel.querySelector(".is-current button")?.focus({ preventScroll: true });
  }, 520);
}

function closeIndex(returnFocus = true) {
  if (!indexPanel.classList.contains("is-open")) {
    return;
  }
  indexPanel.classList.remove("is-open");
  indexPanel.setAttribute("aria-hidden", "true");
  indexToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) {
    indexToggle.focus({ preventScroll: true });
  }
}

function flipActiveDisc() {
  if (collectionMode === "zhuotu") return;
  const activeDisc = discs[activeIndex];
  activeDisc.classList.toggle("is-flipped");
  activeDisc.querySelector(".disc__body").style.transform =
    activeDisc.classList.contains("is-flipped") ? "rotateY(180deg)" : "";
}

gallery.addEventListener("wheel", (event) => {
  if (document.querySelector("dialog[open]")) {
    return;
  }
  event.preventDefault();
  const now = performance.now();
  const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
    ? event.deltaY
    : event.deltaX;
  wheelAccumulator += delta;

  if (wheelNavigationLocked || now - lastWheelAt < 85) {
    lastWheelAt = now;
    return;
  }

  if (Math.abs(wheelAccumulator) > 24) {
    step(wheelAccumulator > 0 ? 1 : -1);
    wheelAccumulator = 0;
    lastWheelAt = now;
    wheelNavigationLocked = true;
    window.setTimeout(() => {
      wheelNavigationLocked = false;
    }, 180);
  }
});

gallery.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || event.target.closest(".disc")?.classList.contains("is-active")) {
    return;
  }
  isDragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartFocus = focus;
  dragDelta = 0;
  gallery.classList.add("is-dragging");
  gallery.setPointerCapture(event.pointerId);
});

gallery.addEventListener("pointermove", (event) => {
  pointerX = event.clientX / window.innerWidth * 2 - 1;
  pointerY = event.clientY / window.innerHeight * 2 - 1;

  if (!isDragging) {
    requestRender();
    return;
  }

  dragDelta = event.clientX - dragStartX;
  const units = -dragDelta / (dimensions.spacing * 0.8);
  focus = Math.max(-0.15, Math.min(getCollectionCount() - 0.85, dragStartFocus + units));
  target = Math.round(focus);
  requestRender();
});

gallery.addEventListener("pointerup", (event) => {
  if (!isDragging) {
    return;
  }
  isDragging = false;
  gallery.classList.remove("is-dragging");
  const moved = Math.abs(dragDelta) > Math.abs(event.clientY - dragStartY);
  if (moved && Math.abs(dragDelta) > dimensions.size * 0.1) {
    const direction = dragDelta < 0 ? 1 : -1;
    navigateTo(activeIndex + direction);
  } else {
    target = activeIndex;
    requestRender();
  }
});

gallery.addEventListener("pointercancel", () => {
  isDragging = false;
  gallery.classList.remove("is-dragging");
  target = activeIndex;
  requestRender();
});

gallery.addEventListener("pointerleave", () => {
  if (isDragging) {
    return;
  }
  pointerX = 0;
  pointerY = 0;
  requestRender();
});

gallery.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    step(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    step(1);
  } else if (event.key === "Home") {
    event.preventDefault();
    navigateTo(0);
  } else if (event.key === "End") {
    event.preventDefault();
    navigateTo(getCollectionCount() - 1);
  } else if (event.key === "Enter") {
    event.preventDefault();
    openDetail();
  } else if (event.key === " ") {
    event.preventDefault();
    flipActiveDisc();
  }
});

previousButton.addEventListener("click", () => step(-1));
nextButton.addEventListener("click", () => step(1));
collectionTabs.forEach((tab) => {
  tab.addEventListener("click", () => setCollectionMode(tab.dataset.collectionNav));
});
observationToggle.addEventListener("click", () => {
  if (observationDialog.open) {
    closeObservationPanel();
  } else {
    openObservationPanel();
  }
});
observationClose.addEventListener("click", () => closeObservationPanel());
observationPrevious.addEventListener("click", () => changeObservation(-1));
observationNext.addEventListener("click", () => changeObservation(1));
observationStudyEntry.addEventListener("click", openObservationStudy);
observationStudyBack.addEventListener("click", () => closeObservationStudy());
observationStudyPrevious.addEventListener("click", () => changeObservation(-1));
observationStudyNext.addEventListener("click", () => changeObservation(1));
observationMedia.addEventListener("wheel", (event) => {
  if (!observationDialog.open || isObservationStudy) return;
  event.preventDefault();
  const now = performance.now();
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;

  if (now - observationLastWheelAt > 180) {
    observationWheelAccumulator = 0;
  }
  observationWheelAccumulator += delta;
  observationLastWheelAt = now;

  if (now < observationWheelLockedUntil) {
    observationWheelAccumulator = 0;
    return;
  }
  if (Math.abs(observationWheelAccumulator) < 28) return;

  changeObservation(observationWheelAccumulator > 0 ? 1 : -1);
  observationWheelAccumulator = 0;
  observationWheelLockedUntil = now + 340;
}, { passive: false });
observationDialog.addEventListener("wheel", (event) => {
  if (!observationDialog.open || !isObservationStudy) return;
  event.preventDefault();
  const now = performance.now();
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;

  if (now - observationStudyLastWheelAt > 220) {
    observationStudyWheelAccumulator = 0;
  }
  observationStudyWheelAccumulator += delta;
  observationStudyLastWheelAt = now;

  if (now < observationStudyWheelLockedUntil) {
    observationStudyWheelAccumulator = 0;
    return;
  }
  if (Math.abs(observationStudyWheelAccumulator) < 26) return;

  setObservationFeature(
    observationFeatureIndex + (observationStudyWheelAccumulator > 0 ? 1 : -1),
  );
  observationStudyWheelAccumulator = 0;
  observationStudyWheelLockedUntil = now + 320;
}, { passive: false });
observationModelCanvas.addEventListener("pointerdown", (event) => {
  if (
    !isObservationStudy
    || observationDialog.dataset.modelReady !== "true"
    || (event.pointerType === "mouse" && event.button !== 0)
    || observationModelOrbitPointerId !== null
  ) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  observationModelOrbitPointerId = event.pointerId;
  observationModelOrbitLastX = event.clientX;
  observationModelOrbitLastY = event.clientY;
  observationModelOrbitTravel = 0;
  observationDialog.classList.add("is-observing-model");
  try {
    observationModelCanvas.setPointerCapture(event.pointerId);
  } catch {
    // Synthetic or cancelled pointers may not be capturable.
  }
});
observationModelCanvas.addEventListener("pointermove", (event) => {
  if (event.pointerId !== observationModelOrbitPointerId) return;
  event.preventDefault();
  event.stopPropagation();
  const deltaX = event.clientX - observationModelOrbitLastX;
  const deltaY = event.clientY - observationModelOrbitLastY;
  observationModelOrbitLastX = event.clientX;
  observationModelOrbitLastY = event.clientY;
  observationModelOrbitTravel += deltaX;
  observationDialog.dataset.modelOrbitPixels = String(
    Math.round(observationModelOrbitTravel),
  );
  const rotation = observationModelController?.rotateBy(deltaX, deltaY);
  if (rotation) {
    observationDialog.dataset.modelRotationX = rotation.rotationX.toFixed(4);
    observationDialog.dataset.modelRotationY = rotation.rotationY.toFixed(4);
  }
});
function finishObservationModelOrbit(event) {
  if (observationModelOrbitPointerId === null) return;
  if (event && event.pointerId !== observationModelOrbitPointerId) return;
  const pointerId = observationModelOrbitPointerId;
  observationModelOrbitPointerId = null;
  try {
    observationModelCanvas.releasePointerCapture(pointerId);
  } catch {
    // The pointer may already have been released by the browser.
  }
  observationDialog.classList.remove("is-observing-model");
}
observationModelCanvas.addEventListener("pointerup", (event) => {
  event.stopPropagation();
  finishObservationModelOrbit(event);
});
observationModelCanvas.addEventListener("pointercancel", (event) => {
  event.stopPropagation();
  finishObservationModelOrbit(event);
});
observationModelCanvas.addEventListener("lostpointercapture", () => {
  finishObservationModelOrbit();
});
observationMedia.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (observationPointerId !== null) return;
  observationPointerId = event.pointerId;
  observationPointerStartX = event.clientX;
  observationPointerStartY = event.clientY;
  observationPointerDeltaX = 0;
  observationPointerDeltaY = 0;
  observationPointerStartedOnStudyEntry = Boolean(
    event.target.closest("[data-observation-study-open]"),
  );
  observationDialog.style.setProperty("--observation-drag", "0px");
  try {
    observationMedia.setPointerCapture(event.pointerId);
  } catch {
    // Synthetic or cancelled pointers may not be capturable.
  }
});
observationMedia.addEventListener("pointermove", (event) => {
  if (event.pointerId !== observationPointerId) return;
  observationPointerDeltaX = event.clientX - observationPointerStartX;
  observationPointerDeltaY = event.clientY - observationPointerStartY;
  if (
    Math.abs(observationPointerDeltaX) > 8
    && Math.abs(observationPointerDeltaX) > Math.abs(observationPointerDeltaY)
  ) {
    observationDialog.classList.add("is-observation-dragging");
  }
  const resistance = Math.max(-34, Math.min(34, observationPointerDeltaX * 0.14));
  observationDialog.style.setProperty("--observation-drag", `${resistance}px`);
});

function finishObservationPointer(event) {
  if (event.pointerId !== observationPointerId) return;
  observationPointerId = null;
  try {
    observationMedia.releasePointerCapture(event.pointerId);
  } catch {
    // The pointer may already have been released by the browser.
  }
  observationDialog.classList.remove("is-observation-dragging");
  observationDialog.style.setProperty("--observation-drag", "0px");
  const moved =
    Math.abs(observationPointerDeltaX) > 8
    || Math.abs(observationPointerDeltaY) > 8;
  if (moved) {
    observationSuppressStudyClickUntil = performance.now() + 320;
  }
  const horizontalIntent =
    Math.abs(observationPointerDeltaX) > 44
    && Math.abs(observationPointerDeltaX) > Math.abs(observationPointerDeltaY) * 1.08;
  if (!moved && observationPointerStartedOnStudyEntry && !isObservationStudy) {
    openObservationStudy();
  } else if (horizontalIntent && !isObservationStudy) {
    observationSuppressRailClickUntil = performance.now() + 320;
    changeObservation(observationPointerDeltaX < 0 ? 1 : -1);
  }
  observationPointerStartedOnStudyEntry = false;
}

observationMedia.addEventListener("pointerup", finishObservationPointer);
observationMedia.addEventListener("pointercancel", (event) => {
  if (event.pointerId !== observationPointerId) return;
  observationPointerId = null;
  observationPointerStartedOnStudyEntry = false;
  observationDialog.classList.remove("is-observation-dragging");
  observationDialog.style.setProperty("--observation-drag", "0px");
});
observationDialog.addEventListener("close", () => {
  const returnCollectionMode = observationReturnCollectionMode;
  observationReturnCollectionMode = null;
  hideObservationModel();
  observationToggle.setAttribute("aria-pressed", "false");
  document.body.classList.remove("is-observation-open");
  scheduleObservationModelWarmup(220);
  if (
    returnCollectionMode
    && returnCollectionMode !== collectionMode
  ) {
    setCollectionMode(returnCollectionMode);
  }
});
observationDialog.addEventListener("click", (event) => {
  if (event.target === observationDialog) {
    closeObservationPanel();
  }
});
observationDialog.addEventListener("keydown", (event) => {
  if (isObservationStudy) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeObservationStudy();
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      setObservationFeature(observationFeatureIndex - 1);
    } else if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      setObservationFeature(observationFeatureIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeObservation(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      changeObservation(1);
    }
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    changeObservation(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    changeObservation(1);
  }
});
indexToggle.addEventListener("click", () => {
  if (indexPanel.classList.contains("is-open")) {
    closeIndex();
  } else {
    openIndex();
  }
});
indexClose.addEventListener("click", () => closeIndex());
document.querySelector("[data-detail-close]").addEventListener("click", closeDetail);
detailPreviewButton.addEventListener("click", previewNextPanel);
detailScroller.addEventListener("scroll", scheduleDetailPreviewSync, { passive: true });
detailPreviousButton.addEventListener("click", () => changeDetail(-1));
detailNextButton.addEventListener("click", () => changeDetail(1));
detailImmersiveVideo.addEventListener("click", () => {
  if (detailImmersiveVideo.paused) {
    detailImmersiveVideo.play().catch(() => {});
  } else {
    detailImmersiveVideo.pause();
  }
});
detailImmersiveVideo.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  event.stopPropagation();
  if (detailImmersiveVideo.paused) {
    detailImmersiveVideo.play().catch(() => {});
  } else {
    detailImmersiveVideo.pause();
  }
});
detailDialog.addEventListener("close", () => {
  detailImmersiveVideo.pause();
  window.setTimeout(() => discs[activeIndex]?.focus({ preventScroll: true }), 0);
});
detailDialog.addEventListener("click", (event) => {
  if (
    event.target === detailDialog
    || event.target.classList.contains("detail-dialog__stage")
    || event.target.classList.contains("detail-dialog__scroller")
  ) {
    closeDetail();
  }
});
detailDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    changeDetail(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    changeDetail(1);
  }
});

detailViewer.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || event.target.closest("button")) return;
  isDetailDragging = true;
  detailDragStartX = event.clientX;
  detailDragStartY = event.clientY;
  detailViewer.classList.add("is-dragging");
  detailViewer.setPointerCapture(event.pointerId);
});

detailViewer.addEventListener("pointermove", (event) => {
  if (!isDetailDragging) return;
  const deltaX = event.clientX - detailDragStartX;
  const deltaY = event.clientY - detailDragStartY;
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
    event.preventDefault();
  }
});

detailViewer.addEventListener("pointerup", (event) => {
  if (!isDetailDragging) return;
  isDetailDragging = false;
  detailViewer.classList.remove("is-dragging");
  const deltaX = event.clientX - detailDragStartX;
  const deltaY = event.clientY - detailDragStartY;
  if (Math.abs(deltaX) > 52 && Math.abs(deltaX) > Math.abs(deltaY)) {
    changeDetail(deltaX < 0 ? 1 : -1);
  }
});

detailViewer.addEventListener("pointercancel", () => {
  isDetailDragging = false;
  detailViewer.classList.remove("is-dragging");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && indexPanel.classList.contains("is-open")) {
    event.preventDefault();
    closeIndex();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) detailImmersiveVideo.pause();
});

window.addEventListener("resize", measure);
if (typeof ResizeObserver === "function") {
  new ResizeObserver(measure).observe(gallery);
}

updateProduction();
measure();
scheduleObservationModelWarmup(0);
requestAnimationFrame(() => {
  track.setAttribute("data-ready", "");
});
