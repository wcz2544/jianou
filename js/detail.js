// 首页所有可点击入口共用这一份主题数据，后续扩写时只需要修改对应条目。
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
    intro: "早餐最接近日常，也最容易唤起离乡者关于家乡的具体记忆。", description: "",
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

// 资料包按主题共享可靠来源，详情页只展示其中可复核的出处。
const researchBundles = {
  overview: {
    facts: [
      { title: "古城的新等级", text: "福建省文化和旅游厅于2026年3月26日正式确定建瓯建州古城景区为国家4A级旅游景区，景区以铁井栏—紫芝街历史文化街区为核心。" },
      { title: "保护与活化同步", text: "建瓯自2022年启动古城保护活化工程，修缮街区的同时引入博物馆、非遗体验和日常商业，让历史空间继续服务今天的城市生活。" }
    ],
    boundary: "本页的主题分类与路线顺序属于网站编辑方案，不等同于官方游览线路；景点之间的距离、预计用时和接待条件仍需实地核验。",
    sources: [
      { title: "福建省文旅厅：确定建州古城景区为国家4A级旅游景区", date: "2026-03-26", scope: "景区等级与官方名称", url: "https://wlt.fujian.gov.cn/zwgk/tzgg/gggs/202603/t20260326_7116118.htm" },
      { title: "福建省文旅厅：福建省新增4家国家4A级旅游景区", date: "2026-03-30", scope: "景区核心范围与主要文化地标", url: "https://wlt.fujian.gov.cn/zwgk/tzgg/gggs/202603/t20260330_7117179.htm" },
      { title: "建瓯新闻网：我在建瓯邂逅千年古城", date: "2026-03-02", scope: "古城保护活化的过程与当代使用", url: "https://www.jrjonews.com/2026-03/02/content_2315266.htm" }
    ]
  },
  ancient: {
    facts: [
      { title: "核心街区", text: "官方介绍把铁井栏—紫芝街列为建州古城景区核心，并串联朱文公祠、五经博士府、建安书院等朱子文化地标。" },
      { title: "修缮不是冻结", text: "街区保护保留传统街巷尺度与空间形态，同时进行了管线下地、路面铺贴和木结构修复，今天仍有居民、展馆与店铺共同使用。" }
    ],
    boundary: "古城页面必须区分历史遗存、原址修缮、原貌复建和现代新增展示；建筑年代、人物故事与民间传说不能互相替代，单体建筑信息还需结合文物名录或现场铭牌核对。",
    sources: [
      { title: "福建省文旅厅：建州古城景区获评国家4A级", date: "2026-03-26", scope: "景区等级", url: "https://wlt.fujian.gov.cn/zwgk/tzgg/gggs/202603/t20260326_7116118.htm" },
      { title: "建瓯新闻网：我在建瓯邂逅千年古城", date: "2026-03-02", scope: "古城修缮、历史建筑与活化利用", url: "https://www.jrjonews.com/2026-03/02/content_2315266.htm" },
      { title: "建瓯新闻网：读历史文化 看古街繁华", date: "2023-10-31", scope: "铁井栏—紫芝街的历史脉络与街区现状", url: "https://www.jrjonews.com/2023-10/31/content_1597993.htm" },
      { title: "建瓯新闻网：铁井栏—紫芝街历史文化街区开街", date: "2023-05-15", scope: "项目范围、修缮原则与开街记录", url: "https://www.jrjonews.com/2023-05/15/content_1525002.htm" }
    ]
  },
  food: {
    facts: [
      { title: "味道来自日常", text: "公开的建瓯概况把光饼、板鸭、豆浆粉、芋饺、扁肉等列入地方饮食线索；网页据此先搭建早餐、地方菜和时令物产三个入口。" },
      { title: "从一道菜讲做法", text: "建瓯融媒体对“大肠炒光饼”的介绍记录了卤制、切片和合炒等过程，说明地方味道既与食材有关，也与具体处理方法有关。" }
    ],
    boundary: "地方食物存在家庭做法、店铺做法与名称差异。当前页面介绍品类，不构成餐馆排名；具体门店、价格、营业时间、过敏原与卫生信息必须在发布推荐前逐项核验。",
    sources: [
      { title: "福建省商务厅：县域重点产业链招商手册·建瓯", date: "持续更新页面", scope: "建瓯概况、物产与地方美食线索", url: "https://fdi.swt.fj.gov.cn/county-show-409.html" },
      { title: "建瓯新闻网：我本建州｜建州传统早餐——豆浆粉", date: "2025-04-10", scope: "豆浆粉的地方早餐背景", url: "https://www.jrjonews.com/2025-04/10/content_2196251.htm" },
      { title: "福建日报：建瓯‘豆浆粉’亮相央视《三餐四季》", date: "2025-04-15", scope: "豆浆粉与当地早餐场景", url: "https://www.fjdaily.com/app/content/2025-04/15/content_3230709.html" },
      { title: "建瓯新闻网：大肠炒光饼", date: "2025-07-01", scope: "菜品特点与基本制作过程", url: "https://www.jrjonews.com/2025-07/01/content_2228818.htm" }
    ]
  },
  tea: {
    facts: [
      { title: "遗址把茶史落到地点", text: "北苑御焙遗址位于东峰镇裴桥村焙前自然村一带。公开资料将其介绍为官办茶事遗址，并记录摩崖石刻、贡茶制度与周边展示空间。" },
      { title: "传统仍在被演示", text: "2025年的报道记录了凤冈别墅宋式点茶非遗传习所，通过器具展示、技艺讲解与现场体验让点茶从文字史料进入可观察的过程。" }
    ],
    boundary: "茶史中的贡茶制度、茶类名称和制作方法有明确时代背景，不能直接等同于今天销售的所有产品；遗址参观、茶园进入和点茶体验均需按当期接待信息核实。",
    sources: [
      { title: "建瓯新闻网：访北苑御焙遗址 寻千年贡茶芳踪", date: "2023-08-07", scope: "遗址位置、历史价值与展示空间", url: "https://www.jrjonews.com/2023-08/07/content_1559130.htm" },
      { title: "建瓯新闻网：宋代“顶流”茶饮的前世今生", date: "2022-06-28", scope: "北苑茶历史与遗址保护信息", url: "https://www.jrjonews.com/2022-06/28/content_1402039.htm" },
      { title: "建瓯新闻网：凤冈别墅宋式点茶非遗传习所", date: "2025-03-28", scope: "点茶传习与体验场景", url: "https://www.jrjonews.com/2025-03/28/content_2191459.htm" },
      { title: "建瓯新闻网：惊蛰喊山承古韵 北苑贡茶启新程", date: "2026-03-06", scope: "北苑喊山与当代茶文化活动", url: "https://www.jrjonews.com/2026-03/06/content_2317266.htm" }
    ]
  },
  craft: {
    facts: [
      { title: "挑幡的活态传承", text: "福建省政府专题资料将建瓯挑幡列为首批国家级非物质文化遗产，介绍了长竹竿、幡面与配重组成的表演器具，以及进校园等传承方式。" },
      { title: "手艺也连接产业", text: "建瓯根雕报道呈现了从选材、构思到雕刻的生产链条。它既是地方手艺，也是当代从业者持续经营的产业。" }
    ],
    boundary: "非遗项目名称、保护级别和代表性传承人应以官方名录为准；展示活动、校园课程和工坊接待并非全年固定开放，传说故事也需明确标为口述或民间叙事。",
    sources: [
      { title: "福建省政府：在坚守中前行——建瓯挑幡的活态传承之路", date: "2023-09-19", scope: "项目级别、器具特点与传承方式", url: "https://www.fj.gov.cn/zwgk/ztzl/sxzygwzxsgzx/sdjj/wvjj/202309/t20230919_6260608.htm" },
      { title: "福建省财政厅：2026年国家级非遗代表性传承人补助名单", date: "2026-01", scope: "中幡（建瓯挑幡）代表性传承人名录", url: "https://czt.fj.gov.cn/zwgk/czzj/202601/P020260106385805670298.pdf" },
      { title: "建瓯新闻网：探访“中国根雕之都”", date: "2023-04-11", scope: "根雕制作与产业案例", url: "https://www.jrjonews.com/2023-04/11/content_1509348.htm" }
    ]
  },
  nature: {
    facts: [
      { title: "保护地不等于普通景点", text: "万木林的公开资料强调数百年延续的民间护林传统和生态价值。介绍它时，应先说明保护意义，再讨论能够到达和观察的区域。" },
      { title: "古村也在继续生活", text: "后山村与磨下村的报道同时记录传统建筑、地方历史和当代乡村建设，说明古村不是只供拍照的静态布景。" }
    ],
    boundary: "自然与乡村点位分散，旧报道中的道路、项目规划和开放状态不能直接当作当前出行依据。水域、林地和山地活动需额外核验天气、交通、管理边界与安全要求。",
    sources: [
      { title: "建瓯新闻网：万木林——穿越六百年的绿色守望", date: "2022-04-20", scope: "万木林历史与生态保护", url: "https://www.jrjonews.com/2022-04/20/content_1374004.htm" },
      { title: "建瓯新闻网：万木林·辰山项目推进", date: "2025-08-01", scope: "保护与文旅项目的阶段性信息", url: "https://www.jrjonews.com/2025-08/01/content_2240922.htm" },
      { title: "建瓯新闻网：后山村的古村新貌", date: "2025-11-27", scope: "传统建筑、地方历史与乡村生活", url: "https://www.jrjonews.com/2025-11/27/content_2284553.htm" },
      { title: "建瓯新闻网：磨下村激活万里茶道水运记忆", date: "2026-05-07", scope: "古码头、茶道记忆与村庄建设", url: "https://www.jrjonews.com/2026-05/07/content_2338557.htm" }
    ]
  },
  industry: {
    facts: [
      { title: "笋竹是重要产业线索", text: "2026年的地方报道从竹林培育、笋竹加工到竹制品创新梳理产业链，并以明确年份标注产值、专利等统计数据。" },
      { title: "人的选择补足数字", text: "返乡木艺创业案例把本地竹木资源、设计生产和线上线下销售连接起来，为理解地方产业提供了企业与个人层面的切口。" }
    ],
    boundary: "产业数字必须连同统计年份、口径和来源一起使用；一家企业或一位创业者只是案例，不能代表整个行业。称号、产值、专利和销量等信息不得脱离原报道年份延用。",
    sources: [
      { title: "建瓯新闻网：一根竹的绿色富民产业", date: "2026-05-14", scope: "笋竹产业链与带年份的统计数据", url: "https://www.jrjonews.com/2026-05/14/content_2341040.htm" },
      { title: "建瓯新闻网：建瓯笋竹产业指数发布", date: "2026-05-14", scope: "产业观察与指数信息", url: "https://www.jrjonews.com/2026-05/14/content_2341028.htm" },
      { title: "建瓯新闻网：返乡青年汪林松的木艺创业", date: "2025-12-15", scope: "竹木设计、生产与返乡创业案例", url: "https://www.jrjonews.com/2025-12/15/content_2290377.htm" },
      { title: "建瓯新闻网：探访“中国根雕之都”", date: "2023-04-11", scope: "根雕产业的阶段性情况", url: "https://www.jrjonews.com/2023-04/11/content_1509348.htm" }
    ]
  },
  memory: {
    facts: [
      { title: "影像可以成为城市档案", text: "建瓯摄影者徐文亮自2012年起持续拍摄街道、旧招牌与城市变化，报道提到其积累照片超过8000张，为同地点对照提供了具体方法。" },
      { title: "记忆需要多种声音", text: "古城保护报道同时出现居民、收藏者、经营者和管理者的讲述。把这些视角并置，比只用一段怀旧叙事更接近城市的真实变化。" }
    ],
    boundary: "老照片、录音和采访都需确认拍摄者、年代、地点与使用授权。个人回忆可能有偏差，一位受访者也不能代表全部居民；可核验史实应另附文献或实物依据。",
    sources: [
      { title: "建瓯新闻网：城市记忆的影像守望者", date: "2025-11-10", scope: "徐文亮的城市影像档案与拍摄方法", url: "https://www.jrjonews.com/2025-11/10/content_2278447.htm" },
      { title: "建瓯新闻网：聚焦高质量发展｜千年建州古城走向活化复兴", date: "2025-04-25", scope: "居民、经营者与文化工作者的多方讲述", url: "https://www.jrjonews.com/2025-04/25/content_2203084.htm" },
      { title: "建瓯新闻网：我在建瓯邂逅千年古城", date: "2026-03-02", scope: "古城修缮前后与人物记忆", url: "https://www.jrjonews.com/2026-03/02/content_2315266.htm" }
    ]
  },
  experience: {
    facts: [
      { title: "从观看走向参与", text: "建州古城的官方介绍把非遗体验与市井生活列为景区内容；点茶传习所等空间则提供了器具展示、讲解和体验的具体场景。" },
      { title: "活动有明确时间", text: "喊山、节庆展演和专题交流都有自己的举办日期。网页会保留报道日期，不把一次活动写成每天都能参加的常设项目。" }
    ],
    boundary: "本页只证明相关体验曾被公开报道，不承诺当前仍可预约。活动日期、场次、费用、人数限制和接待地点必须以主办方或场馆最新通知为准。",
    sources: [
      { title: "福建省文旅厅：建州古城景区介绍", date: "2026-03-30", scope: "古城文化地标与非遗体验概览", url: "https://wlt.fujian.gov.cn/zwgk/tzgg/gggs/202603/t20260330_7117179.htm" },
      { title: "建瓯新闻网：凤冈别墅宋式点茶非遗传习所", date: "2025-03-28", scope: "点茶展示与体验场景", url: "https://www.jrjonews.com/2025-03/28/content_2191459.htm" },
      { title: "建瓯新闻网：惊蛰喊山承古韵 北苑贡茶启新程", date: "2026-03-06", scope: "有明确日期的茶文化活动案例", url: "https://www.jrjonews.com/2026-03/06/content_2317266.htm" }
    ]
  }
};

// 每个入口都有单独的编辑焦点；后两张卡片由同主题资料包提供已核验的背景。
const topicFocus = {
  "ancient-city-scenic": { title: "本页焦点", text: "建州古城景区已于2026年3月获评国家4A级旅游景区。初步介绍从官方认定的核心街区和朱子文化地标展开。" },
  "themes": { title: "八种观看方法", text: "八个主题是本网站对公开资料的编辑整理，用建筑、食物、茶、手艺、山水、产业、记忆与体验连接建瓯的历史和今天。" },
  "routes": { title: "三条路线是提案", text: "古城、茶文化、山水乡村三条路线由网站根据内容节点编排，并非官方固定线路；顺序、交通和用时仍待实走。" },
  "old-city": { title: "看见时间层次", text: "古城内容会把历史遗存、修缮复建和当代经营放在同一张时间表中，避免把今天看到的一切都笼统称为“古建筑”。" },
  "food": { title: "先认识食物，再推荐门店", text: "公开资料可以确认建瓯的代表性饮食线索；具体哪家店、多少钱、何时营业，则要通过现场核验后再写入。" },
  "tea": { title: "从遗址到今天", text: "北苑茶页面用御焙遗址说明历史空间，再以点茶传习与当代茶事说明传统如何被重新讲述和体验。" },
  "craft": { title: "由人完成的传承", text: "建瓯挑幡有明确的国家级非遗依据；其他手艺将逐项核对项目级别、传承人和仍在进行的制作场景。" },
  "nature": { title: "先保护，再游览", text: "万木林、北津湖和古村的性质不同，页面首先区分保护、生产与生活空间，再讨论游客能够安全抵达的区域。" },
  "industry": { title: "数字必须带年份", text: "笋竹、根雕和竹木工艺的报道来自不同年份。页面保留时间标签，并用从业者案例解释统计数字背后的生产过程。" },
  "memory": { title: "把变化变成证据", text: "老照片、同机位复拍与口述采访可以互相补充；照片来源和人物授权会与文字内容一同记录。" },
  "experience": { title: "只承诺能够核实的体验", text: "点茶、展演和节庆活动会分成常设空间、预约体验与往期活动，避免读者误以为历史报道中的活动每天都有。" },
  "breakfast": { title: "早餐仍需在地采集", text: "豆浆粉、粉丸与粿包先作为地方早餐线索建立页面，下一步重点补充真实店铺、制作过程、价格和拍摄日期。" },
  "local-dishes": { title: "从菜名解释到做法", text: "大肠炒光饼已有公开的制作过程可作示例；珍珠纳底、冬笋挖底等菜名还要继续核对原料、方言写法与家庭差异。" },
  "seasonal-produce": { title: "季节决定内容", text: "冬笋、锥栗等物产的采收时间和加工方式不同，页面会把上市季节、产地与当年统计口径分开记录。" },
  "route-old-city": { title: "半日线的初步骨架", text: "路线以古城核心街区为依据，把城门、街巷和地方小吃串联起来；实际步数、休息点与开放时段仍需现场测试。" },
  "route-tea": { title: "一片茶叶的顺序", text: "北苑、茶园、点茶、茶人四个节点分别回答地点、生长、技艺和人物问题，最终交通方案要根据预约和季节调整。" },
  "route-nature": { title: "不能照着概念图直接出发", text: "北津湖、万木林与古村点位分散，这条一日线目前只是内容结构；没有完成道路、安全与开放核验前不提供导航承诺。" },
  "tongxian": { title: "单体建筑要单独核史", text: "通仙门可以作为进入古城叙事的入口，但其年代、历次修缮与现存构件需要以文物资料和现场说明为准，不能只引用古城概述。" },
  "tiejinglan": { title: "街区的历史与现在", text: "铁井栏—紫芝街是建州古城景区核心。修缮保留街巷尺度，也加入展馆和经营空间，适合同时观察保护与日常使用。" },
  "zizhi": { title: "不把古街拍成空布景", text: "紫芝街页面除了建筑外，还会记录居民、店铺和不同时间段的街道状态，以呈现修复后继续生长的街区。" },
  "local-snacks": { title: "一口味道的核验清单", text: "小吃专题先说明食材、口味与常见吃法；具体商家只有在地址、价格、营业状态和拍摄许可确认后才会成为推荐。" },
  "beiyuan": { title: "北苑是具体地点", text: "御焙遗址位于东峰镇裴桥村焙前一带。页面以遗址、摩崖石刻和村落空间说明北苑，而不是只使用抽象的“千年茶史”口号。" },
  "tea-garden": { title: "按季节记录劳动", text: "茶园拍摄将保留地点、日期、采摘季节和工序信息，避免用无法确认产地的通用茶园照片替代建瓯现场。" },
  "diancha": { title: "把动作拆开讲清", text: "点茶传习所的公开报道提供了体验场景依据；正式页面将用器具、调膏、击拂等连续步骤帮助读者看懂过程。" },
  "tea-people": { title: "一个人不是全部茶史", text: "茶农、制茶人和推广者各有不同工作。人物采访会保留其身份与具体经历，不用单个故事概括所有从业者。" },
  "beijin-lake": { title: "规划信息不等于已经开放", text: "北津湖相关报道可帮助理解湖区生态与文旅方向，但步道、项目和可到达区域仍应以当期现场及管理信息为准。" },
  "wanmu-forest": { title: "保护价值优先", text: "万木林的核心意义在长期护林传统和生态系统。任何游览建议都必须服从保护范围、管理规定和实际开放条件。" },
  "ancient-villages": { title: "村庄不是景区布景", text: "后山、磨下等村的传统建筑与当代建设并存。拍摄与采访要尊重居民生活，并逐村核实道路和接待条件。" },
  "rural-life": { title: "记录真实生产生活", text: "乡村内容不只选择“古朴”画面，也关注劳动、公共服务、返乡就业和村庄变化，避免把生活浪漫化。" },
  "past-present": { title: "同机位对照需要证据", text: "现有城市影像档案为选题提供方法。旧照片必须确认拍摄者、年代和地点，复拍时尽量接近原机位并说明无法完全重合之处。" },
  "old-shop": { title: "先征得店主同意", text: "老店专题将跟随备料、营业到收摊的完整一天；店史、顾客出镜、价格和经营信息都要由店主确认后发布。" },
  "returning-youth": { title: "呈现选择，也呈现困难", text: "公开报道中的返乡木艺创业者提供了一个真实案例。后续采访不会把个体经历包装成适用于所有人的成功模板。" }
};

const bundleByTopic = {
  "ancient-city-scenic": "ancient", themes: "overview", routes: "overview", "old-city": "ancient",
  food: "food", tea: "tea", craft: "craft", nature: "nature", industry: "industry", memory: "memory", experience: "experience",
  breakfast: "food", "local-dishes": "food", "seasonal-produce": "food",
  "route-old-city": "ancient", "route-tea": "tea", "route-nature": "nature",
  tongxian: "ancient", tiejinglan: "ancient", zizhi: "ancient", "local-snacks": "food",
  beiyuan: "tea", "tea-garden": "tea", diancha: "tea", "tea-people": "tea",
  "beijin-lake": "nature", "wanmu-forest": "nature", "ancient-villages": "nature", "rural-life": "nature",
  "past-present": "memory", "old-shop": "memory", "returning-youth": "industry"
};

// 网络图片统一保存到项目内，页面只读取本地文件；来源页仍保留在图片说明中，便于追溯。
const mediaAssets = {
  ancientZizhi: { src: "assets/images/detail/topics/ancient-zizhi.jpg", alt: "建瓯紫芝街夜景", caption: "紫芝街夜间街区景观", credit: "图虫摄影", source: "https://tuchong.com/1348496/139785966/" },
  ancientTongxian: { src: "assets/images/detail/topics/ancient-tongxian.jpeg", alt: "建瓯通仙门城楼", caption: "通仙门城楼与城墙", credit: "搜狐·福建新闻广播", source: "https://www.sohu.com/a/709061614_162522" },
  ancientTiejinglan: { src: "assets/images/detail/topics/ancient-tiejinglan.jpg", alt: "建瓯铁井栏历史街区入口", caption: "铁井栏历史街区入口", credit: "爱游旅行网", source: "https://www.aiyoutravel.com/location/detail/0843c8a1ed60dea881edac22a70c4397" },
  foodDachang: { src: "assets/images/detail/topics/food-dachang.jpg", alt: "建瓯大肠炒光饼", caption: "建瓯地方菜大肠炒光饼", credit: "今日建瓯", source: "https://www.jrjonews.com/2025-07/01/content_2228818.htm" },
  foodGuangbing: { src: "assets/images/detail/topics/food-guangbing.jpg", alt: "建瓯光饼", caption: "建瓯传统小吃光饼", credit: "今日建瓯", source: "https://www.jrjonews.com/2021-08/31/content_1147695.htm" },
  foodBanyan: { src: "assets/images/detail/topics/food-banyan.png", alt: "建瓯板鸭", caption: "建瓯特色风味板鸭", credit: "东南网", source: "https://fjnews.fjsen.com/2023-01/05/content_31219577.htm" },
  teaBeiyuan: { src: "assets/images/detail/topics/tea-beiyuan.png", alt: "建瓯北苑贡茶园景观", caption: "北苑贡茶文化相关茶园景观", credit: "搜狐·建瓯市融媒体中心", source: "https://www.sohu.com/a/827154937_121106994" },
  teaGarden: { src: "assets/images/detail/topics/tea-garden.jpeg", alt: "建瓯茶园采茶场景", caption: "建瓯春茶采摘场景", credit: "搜狐·福建日报", source: "https://www.sohu.com/a/870861499_121119375" },
  teaDiancha: { src: "assets/images/detail/topics/tea-diancha.jpg", alt: "宋式点茶展示", caption: "宋式点茶技艺展示", credit: "新华网", source: "https://www.xinhuanet.com/ci/20251120/92d349e4cbf04d0e9ae7cd723be2f6bc/c.html" },
  craftTiaofan: { src: "assets/images/detail/topics/craft-tiaofan.jpeg", alt: "建瓯挑幡表演", caption: "建瓯挑幡非遗表演", credit: "搜狐·文化大观", source: "https://www.sohu.com/a/375031003_100197257" },
  natureBeijin: { src: "assets/images/detail/topics/nature-beijin.jpg", alt: "建瓯北津湖湖面与岸线", caption: "北津湖湖面与周边景观", credit: "今日建瓯", source: "https://www.jrjonews.com/2025-09/12/content_2258212.htm" },
  natureWanmu: { src: "assets/images/detail/topics/nature-wanmu.jpg", alt: "建瓯万木林自然保护区森林", caption: "万木林自然保护区森林景观", credit: "国家林业和草原局", source: "https://www.forestry.gov.cn/c/www/kpzrbhd/524373.jhtml" },
  natureVillage: { src: "assets/images/detail/topics/nature-village.png", alt: "建瓯后山村村落景观", caption: "后山村乡村景观", credit: "今日建瓯", source: "https://www.jrjonews.com/2025-11/27/content_2284553.htm" },
  industryChestnut: { src: "assets/images/detail/topics/industry-chestnut.jpg", alt: "建瓯锥栗采收", caption: "建瓯锥栗丰收场景", credit: "新三农", source: "https://www.xinsannong.com/a/7394bd.html" },
  industryBamboo: { src: "assets/images/detail/topics/industry-bamboo-shoot.jpg", alt: "建瓯笋竹产品", caption: "建瓯笋竹产业相关产品", credit: "新福建", source: "https://www.fjdaily.com/app/content/2023-05/08/content_1874335.html" },
  industryWoodcraft: { src: "assets/images/detail/topics/industry-woodcraft.jpg", alt: "建瓯竹木工艺创作", caption: "建瓯返乡青年参与竹木工艺创作", credit: "今日建瓯", source: "https://www.jrjonews.com/2025-12/15/content_2290377.htm" },
  memoryOldCity: { src: "assets/images/detail/topics/memory-flood-1998.jpg", alt: "1998年建瓯洪水历史影像", caption: "1998年建瓯洪水中的城市影像", credit: "中国方志网", source: "https://www.difangzhi.cn/ztzl/wljpzjzbhd/wzzjp/202404/t20240414_5746109.shtml" },
  memoryDongyue: { src: "assets/images/detail/topics/memory-dongyue.jpg", alt: "建瓯东岳庙与城市景观", caption: "东岳庙与当代城市景观", credit: "图虫摄影", source: "https://tuchong.com/1348496/139741629/" },
  memoryOldShop: { src: "assets/images/detail/topics/memory-old-shop.jpg", alt: "建瓯老店室内陈设", caption: "建瓯街巷中的老店空间", credit: "图虫摄影", source: "https://tuchong.com/1348496/139777058/" },
  experienceMuseum: { src: "assets/images/detail/topics/experience-museum.png", alt: "建瓯展馆内茶文化体验", caption: "建瓯展馆中的茶文化展示与体验", credit: "今日建瓯", source: "https://www.jrjonews.com/2025-05/20/content_2212418.htm" },
  breakfastDoujiangfen: { src: "assets/images/detail/breakfast-doujiangfen.jpg", alt: "一碗建瓯豆浆粉", caption: "建瓯豆浆粉实物近景", credit: "特色谷", source: "https://www.tesegu.com/techan/50298.html" },
  breakfastScene: { src: "assets/images/detail/breakfast-local-scene.png", alt: "建瓯当地早餐店内用餐场景", caption: "建瓯当地早餐场景", credit: "福建日报·新福建", source: "https://www.fjdaily.com/app/content/2025-04/15/content_3230709.html" }
};

const videos = {
  city: { label: "观看建瓯古城影像", url: "https://www.douyin.com/video/7673755962054222836" },
  tiejinglan: { label: "观看铁井栏街区影像", url: "https://www.douyin.com/video/7301159296849513767" },
  food: { label: "观看建瓯地方美食合集", url: "https://www.bilibili.com/video/BV1BGXnBnEcy/" },
  guangbing: { label: "观看建瓯光饼制作影像", url: "https://www.bilibili.com/video/BV1n64y1S7bE/" },
  tea: { label: "观看北苑贡茶产区影像", url: "https://jingxuan.douyin.com/m/video/7584994766392708410" },
  diancha: { label: "观看宋式点茶过程", url: "https://www.bilibili.com/video/BV1i3411p7Hx/" },
  heritage: { label: "观看建瓯非遗与宋韵体验影像", url: "https://weibo.com/2/detail/5350349603079397" },
  nature: { label: "观看建瓯万木林自然影像", url: "https://www.bilibili.com/video/BV1BW4y1c7Py/" },
  beijin: { label: "观看福建省水利厅北津湖专题视频", url: "https://slt.fujian.gov.cn/ztzl/spzl/slfjq/202109/P020210913432827583804.mp4" },
  chestnut: { label: "观看建瓯锥栗丰收影像", url: "https://www.douyin.com/video/7682728960513379647" },
  memory: { label: "观看建瓯方言与城市记忆影像", url: "https://www.bilibili.com/video/av23405224/" },
  breakfast: { label: "在小红书观看建瓯早餐视频", url: "https://www.xiaohongshu.com/explore/69490ace000000001e0350b2?xsec_token=CBijry1VMvtf-uILFfqw7NNAfHfPECTYlVGsGcl14gvRo=&xsec_source=app_share" }
};

// 多个入口可共享同一组可靠素材，但每个主题都必须有图片和强相关视频，不能再回退为空置位。
const media = (images, video) => ({ images: images.map(key => mediaAssets[key]), video });
const mediaByTopic = {
  "ancient-city-scenic": media(["ancientTongxian", "ancientZizhi"], videos.city),
  themes: media(["ancientZizhi", "teaBeiyuan"], videos.city),
  routes: media(["ancientTongxian", "natureWanmu"], videos.city),
  "old-city": media(["ancientTiejinglan", "ancientZizhi"], videos.city),
  food: media(["foodDachang", "foodBanyan"], videos.food),
  tea: media(["teaBeiyuan", "teaDiancha"], videos.tea),
  craft: media(["craftTiaofan", "industryWoodcraft"], videos.heritage),
  nature: media(["natureBeijin", "natureWanmu"], videos.nature),
  industry: media(["industryBamboo", "industryChestnut"], videos.chestnut),
  memory: media(["memoryOldCity", "memoryDongyue"], videos.memory),
  experience: media(["experienceMuseum", "teaDiancha"], videos.heritage),
  breakfast: media(["breakfastDoujiangfen", "breakfastScene"], videos.breakfast),
  "local-dishes": media(["foodDachang", "foodBanyan"], videos.food),
  "seasonal-produce": media(["industryChestnut", "industryBamboo"], videos.chestnut),
  "route-old-city": media(["ancientTongxian", "ancientTiejinglan"], videos.city),
  "route-tea": media(["teaBeiyuan", "teaGarden"], videos.tea),
  "route-nature": media(["natureBeijin", "natureWanmu"], videos.nature),
  tongxian: media(["ancientTongxian"], videos.city),
  tiejinglan: media(["ancientTiejinglan"], videos.tiejinglan),
  zizhi: media(["ancientZizhi"], videos.tiejinglan),
  "local-snacks": media(["foodGuangbing", "breakfastDoujiangfen"], videos.guangbing),
  beiyuan: media(["teaBeiyuan"], videos.tea),
  "tea-garden": media(["teaGarden"], videos.tea),
  diancha: media(["teaDiancha"], videos.diancha),
  "tea-people": media(["teaGarden", "teaBeiyuan"], videos.tea),
  "beijin-lake": media(["natureBeijin"], videos.beijin),
  "wanmu-forest": media(["natureWanmu"], videos.nature),
  "ancient-villages": media(["natureVillage"], videos.nature),
  "rural-life": media(["natureVillage", "industryChestnut"], videos.nature),
  "past-present": media(["memoryOldCity", "memoryDongyue"], videos.memory),
  "old-shop": media(["memoryOldShop"], videos.memory),
  "returning-youth": media(["industryWoodcraft"], videos.heritage)
};

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
  const description = document.querySelector("#detail-description");
  description.textContent = topic.description;
  description.hidden = !topic.description;
  document.querySelector(".detail-intro").classList.toggle("is-single", !topic.description);
  const research = researchBundles[bundleByTopic[slug] || "overview"];

  document.querySelector("#detail-meta").innerHTML = topic.meta
    .map(item => `<span>${item}</span>`).join("");
  const topicMedia = mediaByTopic[slug];
  const imageCards = topicMedia.images.map(image => `
    <figure class="detail-media-card">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
      <figcaption>${image.caption} · 图片来源：<a href="${image.source}" target="_blank" rel="noopener noreferrer">${image.credit}</a></figcaption>
    </figure>`);
  const gallery = document.querySelector("#detail-media-gallery");
  gallery.classList.toggle("is-single", imageCards.length === 1);
  gallery.innerHTML = imageCards.join("");
  document.querySelector("#detail-video-slot").innerHTML =
    `<a class="detail-video-link" href="${topicMedia.video.url}" target="_blank" rel="noopener noreferrer">${topicMedia.video.label}</a>`;
  document.querySelector("#detail-sources").innerHTML = research.sources
    .map(source => `
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">
        <span class="source-title">${source.title}</span>
        <span class="source-date">${source.date}</span>
        <span class="source-scope">用于核验：${source.scope}</span>
      </a>`).join("");
}
