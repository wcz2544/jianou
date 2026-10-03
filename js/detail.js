// 首页所有可点击入口共用这一份主题数据，后续扩写时只需要修改对应条目。
const commonNote = "本页依据当前策划资料整理，用于首版内容介绍。开放时间、门票、交通、预约、店铺价格和当期活动可能变化，正式出发前请以官方最新信息和实地核验结果为准。";

const topics = {
  "ancient-city-scenic": {
    title: "建州古城景区", eyebrow: "4A SCENIC AREA · 认识古城", summary: "从城门、街巷与人文地标进入千年建州。", meta: ["国家4A级旅游景区", "建瓯古城", "信息核验：2026-03"],
    intro: "建州古城不是一座被围起来观看的旧城，而是历史遗存与今天生活交叠的城市空间。", description: "福建省文化和旅游厅于2026年3月26日确定建瓯建州古城景区为国家4A级旅游景区。首版内容以通仙门、铁井栏—紫芝街、鼓楼、文庙及朱子文化地标为线索。",
    highlights: ["从通仙门认识建州古城格局", "沿铁井栏—紫芝街观察街巷生活", "在鼓楼与文庙理解地方记忆", "把建筑年代、修复情况和地方传说分开表述"], related: ["old-city", "route-old-city", "memory"]
  },
  "themes": {
    title: "八个主题内容板块", eyebrow: "EIGHT THEMES · 内容地图", summary: "用八种观看方式，拼出更完整的建瓯。", meta: ["8个主题", "内容导航", "持续更新"],
    intro: "一座家乡无法只靠景点清单说明，建筑、味道、技艺、自然和人物共同构成地方经验。", description: "首版设置古城与建筑、建州味道、北苑茶、非遗与手艺、乡村与山水、物产与产业、城市记忆、当代体验八个板块。",
    highlights: ["从古城建筑读历史", "从地方食物读日常", "从茶与非遗看传承", "从乡村、产业和人物理解今天"], related: ["old-city", "food", "craft"]
  },
  "routes": {
    title: "首批三条精选路线", eyebrow: "THREE ROUTES · 路线提案", summary: "把分散的地点和故事，串成能够行走的主题。", meta: ["3条路线", "策划阶段", "行前核验"],
    intro: "路线不是地点的简单排列，而是一段有主题、有节奏的认识过程。", description: "首批路线覆盖古城与家乡味、北苑茶文化、乡村与自然。路线顺序、路程与停留时间仍需实地核验后补充。",
    highlights: ["古城美食半日线", "北苑茶文化专题线", "乡村与自然一日线", "后续补充交通、时长和适合人群"], related: ["route-old-city", "route-tea", "route-nature"]
  },

  "old-city": {
    title: "古城与建筑", eyebrow: "OLD CITY · 建州古城", summary: "在城门、街巷与建筑细节里，看见建州的时间层次。", meta: ["古城", "建筑", "朱子文化"],
    intro: "古城专题不只介绍建筑名称，更关注建筑、人物与周边生活之间的关系。", description: "内容从铁井栏—紫芝街、通仙门、鼓楼和文庙展开，并连接朱文公祠、五经博士府、建安书院等文化地标。",
    highlights: ["鼓楼与建瓯人的城市记忆", "文庙与建州读书传统", "朱子人物与地点串联", "主街之外的街巷和地方生活"], related: ["ancient-city-scenic", "tongxian", "tiejinglan"]
  },
  "food": {
    title: "建州味道", eyebrow: "LOCAL FLAVOURS · 家乡餐桌", summary: "从早餐、小吃与时令食材，认识建瓯人的日常。", meta: ["早餐小吃", "地方菜", "时令物产"],
    intro: "食物既是味觉记忆，也是原料、手艺和生活方式的集合。", description: "首版从光饼、芋饺、板鸭、扁肉、豆浆粉和锥栗出发，再延伸到粉丸、粿包、大肠粿、笋宴及吉阳四宝。",
    highlights: ["先说明食物特点和做法", "再补充核验后的店铺与价格", "区分地方菜、早餐和伴手礼", "记录信息更新时间"], related: ["breakfast", "local-dishes", "seasonal-produce"]
  },
  "tea": {
    title: "北苑茶", eyebrow: "BEIYUAN TEA · 千年茶事", summary: "从一片茶叶连接历史、遗址、制作过程与今天的茶人。", meta: ["北苑贡茶", "宋式点茶", "茶人故事"],
    intro: "北苑茶专题将历史叙述落到具体地点、器物、工序和人物。", description: "内容包括北苑在哪里、茶园到一杯茶的过程、宋式点茶在做什么，以及御焙遗址和当代体验。",
    highlights: ["地图说明北苑与建瓯的关系", "记录茶农与制茶人的工作", "用图片解释点茶过程和器具", "参观和体验信息按当期核验"], related: ["beiyuan", "diancha", "tea-people"]
  },
  "craft": {
    title: "非遗与手艺", eyebrow: "LIVING HERITAGE · 人在传承", summary: "把镜头对准表演者、制作者与一门手艺的传承过程。", meta: ["挑幡", "版画", "地方手艺"],
    intro: "非遗不是静止的展品，它依靠具体的人持续练习、制作和讲述。", description: "选题涉及建瓯挑幡、弓鱼、唱曲子、建安版画、扎纸灯笼、根雕和建州酒令，并逐项核对名称与级别。",
    highlights: ["认识一位传承者", "看懂一套动作或制作步骤", "理解手艺与地方生活的关系", "体验入口需核实接待条件"], related: ["experience", "memory", "industry"]
  },
  "nature": {
    title: "乡村与山水", eyebrow: "BEYOND THE WALL · 城外建瓯", summary: "从湖畔、森林、山地和古村，看见更辽阔的家乡。", meta: ["北津湖", "万木林", "古村落"],
    intro: "走出城墙以后，建瓯的自然环境与乡村日常构成另一种地方叙事。", description: "选题包括北津湖、万木林、党城村、后山村、磨下村、湖头村、归宗岩和辰山等。",
    highlights: ["区分自然保护地与可游览区域", "记录古村建筑和当代生活", "山地路线先核验通行条件", "旧报道不能替代当前开放信息"], related: ["route-nature", "beijin-lake", "wanmu-forest"]
  },
  "industry": {
    title: "物产与产业", eyebrow: "MADE IN JIAN'OU · 建瓯出品", summary: "用一个人、一种产品和一个制作过程，讲今天的建瓯。", meta: ["笋竹", "锥栗", "竹木工艺"],
    intro: "地方物产只有与土地、劳动和人的选择连接起来，才不只是商品名录。", description: "内容关注笋竹、茶产业、根雕与竹木工艺、锥栗等农产品，以及酒文化与酿造。",
    highlights: ["一根竹如何成为食物和用品", "记录种植、收获与加工", "进入工坊观察设计和制作", "产业数据使用最新统计口径"], related: ["seasonal-produce", "craft", "tea"]
  },
  "memory": {
    title: "城市记忆", eyebrow: "CITY MEMORY · 旧影新声", summary: "用照片、声音和人物故事，保存城市变化的温度。", meta: ["老照片", "方言", "人物采访"],
    intro: "城市记忆存在于街巷、门头、老店招牌和居民的讲述里。", description: "计划以同一地点的过去与现在、方言和街巷声音、我家的那道菜、一家老店的一天等方式持续采集。",
    highlights: ["老照片与当前机位对照", "保存方言原声和普通话解释", "记录一家老店的完整一天", "明确照片、录音和采访授权"], related: ["past-present", "old-shop", "returning-youth"]
  },
  "experience": {
    title: "当代体验", eyebrow: "HAPPENING NOW · 正在发生", summary: "通过点茶、拓印、展馆和演艺，参与今天的建州。", meta: ["体验", "展馆", "当期活动"],
    intro: "传统文化也可以通过能够参与的当代方式被理解。", description: "网页将点茶、拓印、古城漫游、演艺和展馆体验分成当期可参与项目与往期活动回顾。",
    highlights: ["明确当期与往期活动", "保留活动原始日期", "体验前核实预约与接待条件", "不把一次性活动写成全年常态"], related: ["diancha", "craft", "route-old-city"]
  },

  "breakfast": {
    title: "早餐小吃", eyebrow: "MORNING FLAVOURS · 一日之始", summary: "豆浆粉、粉丸与粿包，是许多人认识建瓯味道的第一口。", meta: ["豆浆粉", "粉丸", "粿包"],
    intro: "早餐最接近日常，也最容易唤起离乡者关于家乡的具体记忆。", description: "专题将说明食材、口味、常见吃法与制作过程，再补充经过核验的店铺、地址、价格和更新时间。",
    highlights: ["豆浆粉的汤底与米粉", "粉丸和粿包的原料与口感", "记录本地人的不同吃法", "店铺信息上线前再次核验"], related: ["food", "local-snacks", "route-old-city"]
  },
  "local-dishes": {
    title: "地方菜", eyebrow: "LOCAL TABLE · 建州菜单", summary: "从菜名到成品，读懂建瓯餐桌上的地方表达。", meta: ["大肠粿", "笋宴", "珍珠纳底"],
    intro: "一些菜名对外地游客并不直观，解释名字、食材和做法能降低第一次品尝的门槛。", description: "内容包括大肠粿、大肠炒光饼、珍珠纳底、冬笋挖底和建州笋宴等。",
    highlights: ["建立地方菜名小词典", "说明主要食材和口味", "用过程照片解释做法", "不把专题名称等同于门店推荐"], related: ["food", "breakfast", "seasonal-produce"]
  },
  "seasonal-produce": {
    title: "时令物产", eyebrow: "SEASONAL PRODUCE · 山野风物", summary: "跟随季节认识冬笋、锥栗与吉阳四宝。", meta: ["冬笋", "锥栗", "吉阳四宝"],
    intro: "时令食材把气候、土地和地方餐桌连接在一起。", description: "专题关注食材何时出现、如何采收加工，以及它们在家常菜和地方产业中的位置。",
    highlights: ["记录上市季节和产地", "展示采收与加工过程", "连接家常吃法与地方菜", "产量和荣誉使用最新口径"], related: ["industry", "food", "local-dishes"]
  },

  "route-old-city": {
    title: "古城与家乡味", eyebrow: "HALF-DAY WALK · 古城漫步", summary: "从城门进入街巷，在建筑、老店与一顿建州味之间认识古城。", meta: ["半日", "步行策划", "古城+美食"],
    intro: "这条路线把可见的建筑与可品尝的日常放在同一段行程中。", description: "策划顺序为通仙门、铁井栏、紫芝街和地方小吃。实际步行距离、停留时间与开放情况仍需实地核验。",
    highlights: ["从城门建立古城第一印象", "在铁井栏寻找历史线索", "沿紫芝街观察街巷生活", "以一顿本地小吃收尾"], related: ["tongxian", "tiejinglan", "local-snacks"]
  },
  "route-tea": {
    title: "跟着一片茶叶", eyebrow: "TEA CULTURE ROUTE · 茶文化", summary: "从北苑地名、茶园到点茶和茶人，让一片叶子连接古今。", meta: ["专题路线", "北苑茶", "体验策划"],
    intro: "路线从茶生长的地方出发，经过制作与冲点过程，最后回到今天的茶人。", description: "策划节点为北苑、茶园、点茶和茶人故事。参观范围、体验预约和交通信息需按当期核验。",
    highlights: ["认识北苑地名和历史", "进入茶园理解生长环境", "看懂宋式点茶器具与步骤", "听今天的茶人讲工作与选择"], related: ["beiyuan", "diancha", "tea-people"]
  },
  "route-nature": {
    title: "走出城墙以后", eyebrow: "ONE-DAY JOURNEY · 山水乡村", summary: "从湖畔、森林到古村，看到建瓯更辽阔的自然与日常。", meta: ["一日策划", "自然", "乡村"],
    intro: "这条路线希望把自然景观与乡村生活放在同一天的观察中。", description: "策划节点为北津湖、万木林、古村落和乡村生活。由于点位分散，实际交通方案必须在实地核验后确定。",
    highlights: ["在湖畔理解城市与水", "区分保护地和游览区域", "从古村建筑进入地方历史", "尊重村民日常和拍摄边界"], related: ["beijin-lake", "wanmu-forest", "ancient-villages"]
  },

  "tongxian": { title: "通仙门", eyebrow: "CITY GATE · 古城入口", summary: "从一座城门进入建州的城市历史。", meta: ["古城门", "建筑", "路线节点"], intro: "通仙门是古城专题和古城漫步路线的重要起点。", description: "页面计划从城门形制、历史沿革、修复情况和周边城市生活四个角度介绍，避免把不同年代的信息混为一谈。", highlights: ["观察城门与城墙结构", "核对历史年代与修复记录", "记录城门下的当代交通", "补充位置和当期开放信息"], related: ["route-old-city", "old-city", "tiejinglan"] },
  "tiejinglan": { title: "铁井栏", eyebrow: "HISTORIC STREET · 街巷线索", summary: "从一处历史地名继续走入建州街巷。", meta: ["铁井栏", "古街", "路线节点"], intro: "铁井栏与紫芝街共同构成古城内容的重要街巷线索。", description: "后续内容将结合历史说明、建筑细节、老照片和今天的街巷生活，标注史实、传说与编辑观察的区别。", highlights: ["寻找历史遗存", "对照老照片与现状", "记录沿街店铺和居民生活", "保留来源和拍摄日期"], related: ["zizhi", "route-old-city", "memory"] },
  "zizhi": { title: "紫芝街", eyebrow: "STREET LIFE · 古街日常", summary: "在修复后的街区里，看建筑如何继续承载生活。", meta: ["紫芝街", "街区", "城市生活"], intro: "紫芝街适合用步行视角观察建筑、店铺、居民和游客之间的关系。", description: "内容将兼顾街区历史与当代使用，不把街区只呈现为静态拍照背景。", highlights: ["观察街巷尺度与建筑细节", "记录不同时段的生活场景", "采访店主或居民", "核对活动是否仍在持续"], related: ["tiejinglan", "route-old-city", "past-present"] },
  "local-snacks": { title: "地方小吃", eyebrow: "STREET BITES · 古城一口", summary: "在古城漫步的结尾，用一口家乡味连接街巷与日常。", meta: ["路线节点", "小吃", "核验后推荐"], intro: "地方小吃节点可以从光饼、豆浆粉、芋饺或扁肉中选择。", description: "正式推荐前将核验店铺地址、营业情况、价格和照片授权，不以网络热度替代实地确认。", highlights: ["优先介绍食物本身", "记录食材、口味和吃法", "店铺信息标注更新时间", "尊重商家和食客拍摄意愿"], related: ["breakfast", "food", "route-old-city"] },
  "beiyuan": { title: "北苑", eyebrow: "PLACE OF TEA · 茶从这里来", summary: "先认识北苑在哪里，再理解它为什么与建瓯茶史紧密相连。", meta: ["地名", "茶文化", "路线节点"], intro: "北苑不是抽象的历史名词，而是可以从地图、遗址和村落进入的具体地方。", description: "历史年代和贡茶制度仍需依据可靠文献继续核验，网页会区分历史背景与当前游览信息。", highlights: ["地图定位北苑", "梳理地名和建瓯关系", "连接御焙遗址与村落", "核验可参观范围"], related: ["tea", "route-tea", "tea-garden"] },
  "tea-garden": { title: "茶园", eyebrow: "FROM THE LAND · 一片叶子的起点", summary: "从生长环境、采摘时节和茶农工作认识建瓯茶。", meta: ["茶园", "采制", "人物"], intro: "茶园内容关注一片叶子如何从土地进入制作环节。", description: "拍摄应尊重生产秩序，并记录季节、地点、人物和工序，避免用其他地区茶园图片代替。", highlights: ["记录茶树与环境", "观察采摘和初制", "采访茶农的工作节奏", "标注拍摄地点与日期"], related: ["beiyuan", "diancha", "tea-people"] },
  "diancha": { title: "宋式点茶", eyebrow: "WHISKED TEA · 看懂过程", summary: "用器具、动作和茶汤变化解释点茶在做什么。", meta: ["点茶", "器具", "体验"], intro: "点茶适合用连续照片或短视频拆解，让第一次接触的人也能理解。", description: "体验内容将说明器具与基本步骤，但不把一次活动自动写成常态预约项目。", highlights: ["认识茶盏、茶筅等器具", "拆解调膏和击拂过程", "记录体验者与讲解人", "预约方式按当期信息更新"], related: ["tea", "route-tea", "experience"] },
  "tea-people": { title: "茶人故事", eyebrow: "PEOPLE OF TEA · 今日北苑", summary: "通过茶农、制茶人与推广者，看到北苑茶如何活在今天。", meta: ["人物", "制茶", "采访"], intro: "人物故事能把宏大的茶史重新落到具体工作和个人选择上。", description: "采访将记录人物身份、工作过程、引用确认和素材授权，不用单一人物代表全部地方经验。", highlights: ["一天的工作流程", "学习制茶的经历", "如何理解北苑传统", "采访文字交由本人确认"], related: ["tea-garden", "route-tea", "returning-youth"] },
  "beijin-lake": { title: "北津湖", eyebrow: "LAKESIDE · 湖畔建瓯", summary: "从水面、岸线和周边生活认识建瓯的湖畔景观。", meta: ["湖畔", "自然", "路线节点"], intro: "北津湖是乡村与自然主题的一处候选节点。", description: "后续将补充适合观察的区域、交通和安全提示，不把自然水域直接等同于可自由游览区域。", highlights: ["记录湖畔景观", "观察人与水的关系", "核验可到达区域", "补充天气与安全提示"], related: ["route-nature", "nature", "wanmu-forest"] },
  "wanmu-forest": { title: "万木林", eyebrow: "FOREST · 进入绿色深处", summary: "在森林主题中理解保护、观察与游览之间的边界。", meta: ["森林", "保护", "路线节点"], intro: "万木林适合用于自然教育和地方生态介绍。", description: "网页将区分保护地介绍与开放游览信息，具体路线、开放范围和参观规则以管理方当期信息为准。", highlights: ["介绍森林生态价值", "区分保护区与游览区", "遵守管理和拍摄规定", "不依据旧报道推荐路线"], related: ["route-nature", "nature", "ancient-villages"] },
  "ancient-villages": { title: "古村落", eyebrow: "OLD VILLAGES · 村庄时间", summary: "从建筑、道路与居民生活，理解古村不是静止的布景。", meta: ["党城村", "后山村", "磨下村"], intro: "古村选题关注历史遗存，也关注今天仍在这里生活的人。", description: "候选包括党城村、后山村、磨下村和湖头村；开放、道路与活动安排需逐村核验。", highlights: ["记录村庄历史与建筑", "观察公共空间与日常", "采访前征得同意", "避免打扰居民生活"], related: ["route-nature", "rural-life", "nature"] },
  "rural-life": { title: "乡村生活", eyebrow: "EVERYDAY VILLAGE · 日常建瓯", summary: "不只看风景，也看村庄里真实持续的生产与生活。", meta: ["日常", "人物", "当代乡村"], intro: "乡村生活内容应避免只追求视觉上的古朴或田园化。", description: "采编将关注村民的工作、公共活动、返乡选择和地方变化，并明确人物同意与素材使用范围。", highlights: ["记录真实劳动场景", "关注不同年龄的人", "说明拍摄时间和背景", "避免替人物下结论"], related: ["ancient-villages", "route-nature", "returning-youth"] },

  "past-present": { title: "同一个地方的过去与现在", eyebrow: "THEN & NOW · 城市对照", summary: "让旧照片与今天的同一机位相遇。", meta: ["老照片", "城市变化", "采访选题"], intro: "同地点对照能把抽象的城市变化变成可观察的细节。", description: "采集时需要确认旧照片来源、年代和拍摄者，并尽量找到相近机位拍摄现状。", highlights: ["寻找可核验的老照片", "确认地点和大致年代", "复拍相近机位", "请居民讲述变化"], related: ["memory", "zizhi", "old-shop"] },
  "old-shop": { title: "一家老店的一天", eyebrow: "A DAY AT THE SHOP · 老店日常", summary: "从开门、备料到收摊，记录一间店铺怎样参与城市生活。", meta: ["老店", "人物", "一天记录"], intro: "一家店的完整一天，比单次探店更能呈现劳动和地方关系。", description: "拍摄前需要取得店主同意，并确认顾客出镜、价格、店史和经营信息的发布范围。", highlights: ["记录开店前的准备", "观察熟客与街坊关系", "采访店主的经营记忆", "核验店史和营业信息"], related: ["memory", "past-present", "local-snacks"] },
  "returning-youth": { title: "返乡青年的选择", eyebrow: "RETURNING HOME · 人物故事", summary: "从个人选择理解家乡的新工作、新生活与新可能。", meta: ["返乡", "青年", "人物采访"], intro: "返乡不是单一成功模板，每个人的原因、困难和路径都不同。", description: "采访将围绕为什么回来、正在做什么、遇到什么现实问题，以及如何看待家乡变化展开。", highlights: ["尊重个人真实动机", "记录工作和生活现场", "呈现困难而非只写励志", "采访内容交由本人确认"], related: ["memory", "industry", "tea-people"] }
};

const labels = Object.fromEntries(Object.entries(topics).map(([slug, item]) => [slug, item.title]));
const params = new URLSearchParams(window.location.search);
const slug = params.get("topic") || "";
const topic = topics[slug];

if (!topic) {
  document.querySelector(".detail-hero").hidden = true;
  document.querySelector(".detail-article").hidden = true;
  document.querySelector("#detail-missing").hidden = false;
  document.title = "主题整理中｜见瓯";
} else {
  document.title = `${topic.title}｜见瓯`;
  document.querySelector("#breadcrumb-title").textContent = topic.title;
  document.querySelector("#detail-eyebrow").textContent = topic.eyebrow;
  document.querySelector("#detail-title").textContent = topic.title;
  document.querySelector("#detail-summary").textContent = topic.summary;
  document.querySelector("#detail-intro").textContent = topic.intro;
  document.querySelector("#detail-description").textContent = topic.description;
  document.querySelector("#detail-note").textContent = commonNote;

  document.querySelector("#detail-meta").innerHTML = topic.meta
    .map(item => `<span>${item}</span>`).join("");
  document.querySelector("#detail-highlights").innerHTML = topic.highlights
    .map(item => `<li>${item}</li>`).join("");
  document.querySelector("#related-links").innerHTML = topic.related
    .filter(item => topics[item])
    .map(item => `<a href="detail.html?topic=${item}">${labels[item]}</a>`).join("");
}
