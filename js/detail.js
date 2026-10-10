// 首页所有可点击入口共用这一份主题数据，后续扩写时只需要修改对应条目。
const topics = {
  "ancient-city-scenic": {
    title: "建州古城景区", eyebrow: "4A SCENIC AREA · 认识古城", summary: "从城门、街巷与人文地标进入千年建州。", meta: ["国家4A级旅游景区", "建瓯古城", "2026年3月获评"],
    intro: "建州古城不是一座被围起来观看的旧城，而是历史遗存与今天生活交叠的城市空间。", description: "福建省文化和旅游厅于2026年3月26日确定建瓯建州古城景区为国家4A级旅游景区。通仙门、铁井栏—紫芝街、鼓楼、文庙及朱子文化地标共同串起古城脉络。",
    highlights: ["从通仙门认识建州古城格局", "沿铁井栏—紫芝街观察街巷生活", "在鼓楼与文庙理解地方记忆", "把建筑年代、修复情况和地方传说分开表述"], related: ["old-city", "route-old-city", "memory"]
  },
  "themes": {
    title: "八个主题内容板块", eyebrow: "EIGHT THEMES · 内容地图", summary: "用八种观看方式，拼出更完整的建瓯。", meta: ["8个主题", "内容导航", "持续更新"],
    intro: "一座家乡无法只靠景点清单说明，建筑、味道、技艺、自然和人物共同构成地方经验。", description: "古城与建筑、建州味道、北苑茶、非遗与手艺、乡村与山水、物产与产业、城市记忆、当代体验，八个板块从不同侧面讲述建瓯。",
    highlights: ["从古城建筑读历史", "从地方食物读日常", "从茶与非遗看传承", "从乡村、产业和人物理解今天"], related: ["old-city", "food", "craft"]
  },
  "routes": {
    title: "三条精选路线", eyebrow: "THREE ROUTES · 主题漫游", summary: "把分散的地点和故事，串成能够行走的主题。", meta: ["3条路线", "古城·茶·山水", "主题漫游"],
    intro: "路线不是地点的简单排列，而是一段有主题、有节奏的认识过程。", description: "古城与家乡味适合边走边吃，北苑茶文化从遗址走向茶汤，乡村与自然则把湖泊、森林和村落连在一起。",
    highlights: ["古城美食半日线", "北苑茶文化专题线", "乡村与自然一日线", "按兴趣选择自己的建瓯旅程"], related: ["route-old-city", "route-tea", "route-nature"]
  },

  "old-city": {
    title: "古城与建筑", eyebrow: "OLD CITY · 建州古城", summary: "在城门、街巷与建筑细节里，看见建州的时间层次。", meta: ["古城", "建筑", "朱子文化"],
    intro: "古城专题不只介绍建筑名称，更关注建筑、人物与周边生活之间的关系。", description: "内容从铁井栏—紫芝街、通仙门、鼓楼和文庙展开，并连接朱文公祠、五经博士府、建安书院等文化地标。",
    highlights: ["鼓楼与建瓯人的城市记忆", "文庙与建州读书传统", "朱子人物与地点串联", "主街之外的街巷和地方生活"], related: ["ancient-city-scenic", "tongxian", "tiejinglan"]
  },
  "food": {
    title: "建州味道", eyebrow: "LOCAL FLAVOURS · 家乡餐桌", summary: "从早餐、小吃与时令食材，认识建瓯人的日常。", meta: ["早餐小吃", "地方菜", "时令物产"],
    intro: "食物既是味觉记忆，也是原料、手艺和生活方式的集合。", description: "从光饼、芋饺、板鸭、扁肉、豆浆粉和锥栗出发，再延伸到粉丸、粿包、大肠粿、笋宴及吉阳四宝。",
    highlights: ["认识食物特点和做法", "寻找街巷里的家乡味", "区分地方菜、早餐和伴手礼", "听建瓯人讲自己的吃法"], related: ["breakfast", "local-dishes", "seasonal-produce"]
  },
  "tea": {
    title: "北苑茶", eyebrow: "BEIYUAN TEA · 千年茶事", summary: "从一片茶叶连接历史、遗址、制作过程与今天的茶人。", meta: ["北苑贡茶", "宋式点茶", "茶人故事"],
    intro: "北苑茶专题将历史叙述落到具体地点、器物、工序和人物。", description: "内容包括北苑在哪里、茶园到一杯茶的过程、宋式点茶在做什么，以及御焙遗址和当代体验。",
    highlights: ["地图说明北苑与建瓯的关系", "记录茶农与制茶人的工作", "用图片解释点茶过程和器具", "走进遗址与点茶传习所"], related: ["beiyuan", "diancha", "tea-people"]
  },
  "craft": {
    title: "非遗与手艺", eyebrow: "LIVING HERITAGE · 人在传承", summary: "把镜头对准表演者、制作者与一门手艺的传承过程。", meta: ["挑幡", "版画", "地方手艺"],
    intro: "非遗不是静止的展品，它依靠具体的人持续练习、制作和讲述。", description: "建瓯挑幡、弓鱼、唱曲子、建安版画、扎纸灯笼、根雕和建州酒令，共同组成丰富的地方手艺图景。",
    highlights: ["认识一位传承者", "看懂一套动作或制作步骤", "理解手艺与地方生活的关系", "在展示与体验中感受技艺"], related: ["experience", "memory", "industry"]
  },
  "nature": {
    title: "乡村与山水", eyebrow: "BEYOND THE WALL · 城外建瓯", summary: "从湖畔、森林、山地和古村，看见更辽阔的家乡。", meta: ["北津湖", "万木林", "古村落"],
    intro: "走出城墙以后，建瓯的自然环境与乡村日常构成另一种地方叙事。", description: "选题包括北津湖、万木林、党城村、后山村、磨下村、湖头村、归宗岩和辰山等。",
    highlights: ["认识自然保护地", "记录古村建筑和当代生活", "沿山水观察四季变化", "尊重林地与村落的生活边界"], related: ["route-nature", "beijin-lake", "wanmu-forest"]
  },
  "industry": {
    title: "物产与产业", eyebrow: "MADE IN JIAN'OU · 建瓯出品", summary: "用一个人、一种产品和一个制作过程，讲今天的建瓯。", meta: ["笋竹", "锥栗", "竹木工艺"],
    intro: "地方物产只有与土地、劳动和人的选择连接起来，才不只是商品名录。", description: "内容关注笋竹、茶产业、根雕与竹木工艺、锥栗等农产品，以及酒文化与酿造。",
    highlights: ["一根竹如何成为食物和用品", "记录种植、收获与加工", "进入工坊观察设计和制作", "认识物产背后的劳动者"], related: ["seasonal-produce", "craft", "tea"]
  },
  "memory": {
    title: "城市记忆", eyebrow: "CITY MEMORY · 旧影新声", summary: "用照片、声音和人物故事，保存城市变化的温度。", meta: ["老照片", "方言", "人物采访"],
    intro: "城市记忆存在于街巷、门头、老店招牌和居民的讲述里。", description: "摄影者镜头中的古城细节、修缮后的街区生活和建瓯方言，共同保存着这座城市不断生长的面貌。",
    highlights: ["徐文亮镜头里的古城", "保存地方方言与生活声音", "看街区修缮后的烟火日常", "从居民讲述理解城市变化"], related: ["past-present", "old-shop", "returning-youth"]
  },
  "experience": {
    title: "当代体验", eyebrow: "HAPPENING NOW · 正在发生", summary: "通过点茶、拓印、展馆和演艺，参与今天的建州。", meta: ["点茶", "非遗手作", "沉浸游览"],
    intro: "传统文化也可以通过能够参与的当代方式被理解。", description: "在凤冈别墅看宋式点茶，在文创市集体验拓印与版画，或在白鹤山走入一场以建州文化为背景的沉浸式剧本游。",
    highlights: ["走进宋式点茶传习所", "动手体验拓印与版画", "在街区参与沉浸式故事", "从当代活动感受建州文化"], related: ["diancha", "craft", "route-old-city"]
  },

  "breakfast": {
    title: "早餐小吃", eyebrow: "MORNING FLAVOURS · 一日之始", summary: "豆浆粉、粉丸与粿包，是许多人认识建瓯味道的第一口。", meta: ["豆浆粉", "粉丸", "粿包"],
    intro: "早餐最接近日常，也最容易唤起离乡者关于家乡的具体记忆。", description: "",
    highlights: ["豆浆粉的汤底与米粉", "粉丸和粿包的原料与口感", "记录本地人的不同吃法", "从早餐开始感受建瓯日常"], related: ["food", "local-snacks", "route-old-city"]
  },
  "local-dishes": {
    title: "地方菜", eyebrow: "LOCAL TABLE · 建州菜单", summary: "从菜名到成品，读懂建瓯餐桌上的地方表达。", meta: ["大肠粿", "笋宴", "珍珠纳底"],
    intro: "一些菜名对外地游客并不直观，解释名字、食材和做法能降低第一次品尝的门槛。", description: "内容包括大肠粿、大肠炒光饼、珍珠纳底、冬笋挖底和建州笋宴等。",
    highlights: ["建立地方菜名小词典", "说明主要食材和口味", "用过程照片解释做法", "不把专题名称等同于门店推荐"], related: ["food", "breakfast", "seasonal-produce"]
  },
  "seasonal-produce": {
    title: "时令物产", eyebrow: "SEASONAL PRODUCE · 山野风物", summary: "跟随季节认识冬笋、锥栗与吉阳四宝。", meta: ["冬笋", "锥栗", "吉阳四宝"],
    intro: "时令食材把气候、土地和地方餐桌连接在一起。", description: "专题关注食材何时出现、如何采收加工，以及它们在家常菜和地方产业中的位置。",
    highlights: ["记录上市季节和产地", "展示采收与加工过程", "连接家常吃法与地方菜", "认识时令物产背后的劳动"], related: ["industry", "food", "local-dishes"]
  },

  "route-old-city": {
    title: "古城与家乡味", eyebrow: "HALF-DAY WALK · 古城漫步", summary: "从城门进入街巷，在建筑、老店与一顿建州味之间认识古城。", meta: ["半日", "步行策划", "古城+美食"],
    intro: "这条路线把可见的建筑与可品尝的日常放在同一段行程中。", description: "从通仙门进入古城，沿铁井栏走到紫芝街，在飞檐、老宅与街坊日常之间穿行，最后用一份地方小吃收尾。",
    highlights: ["从城门建立古城第一印象", "在铁井栏寻找历史线索", "沿紫芝街观察街巷生活", "以一顿本地小吃收尾"], related: ["tongxian", "tiejinglan", "local-snacks"]
  },
  "route-tea": {
    title: "跟着一片茶叶", eyebrow: "TEA CULTURE ROUTE · 茶文化", summary: "从北苑地名、茶园到点茶和茶人，让一片叶子连接古今。", meta: ["专题路线", "北苑茶", "体验策划"],
    intro: "路线从茶生长的地方出发，经过制作与冲点过程，最后回到今天的茶人。", description: "从北苑御焙遗址和茶园认识一片茶叶的来处，再通过宋式点茶与茶人故事，看古老茶事如何延续至今。",
    highlights: ["认识北苑地名和历史", "进入茶园理解生长环境", "看懂宋式点茶器具与步骤", "听今天的茶人讲工作与选择"], related: ["beiyuan", "diancha", "tea-people"]
  },
  "route-nature": {
    title: "走出城墙以后", eyebrow: "ONE-DAY JOURNEY · 山水乡村", summary: "从湖畔、森林到古村，看到建瓯更辽阔的自然与日常。", meta: ["一日策划", "自然", "乡村"],
    intro: "这条路线希望把自然景观与乡村生活放在同一天的观察中。", description: "北津湖的开阔水面、万木林的护林传统、古村落的建筑与日常，共同呈现城墙之外的建瓯。",
    highlights: ["在湖畔理解城市与水", "区分保护地和游览区域", "从古村建筑进入地方历史", "尊重村民日常和拍摄边界"], related: ["beijin-lake", "wanmu-forest", "ancient-villages"]
  },

  "tongxian": { title: "通仙门", eyebrow: "CITY GATE · 古城入口", summary: "从一座城门进入建州的城市历史。", meta: ["古城门", "建筑", "路线节点"], intro: "通仙门是古城专题和古城漫步路线的重要起点。", description: "城门形制、修缮留下的细节和门洞下的日常交通，让历史建筑继续参与今天的城市生活。", highlights: ["观察城门与城墙结构", "认识建筑与修缮细节", "记录城门下的日常交通", "从城门走入古城街巷"], related: ["route-old-city", "old-city", "tiejinglan"] },
  "tiejinglan": { title: "铁井栏", eyebrow: "HISTORIC STREET · 街巷线索", summary: "从一处历史地名继续走入建州街巷。", meta: ["铁井栏", "古街", "路线节点"], intro: "铁井栏与紫芝街共同构成古城内容的重要街巷线索。", description: "历史建筑、旧时照片、沿街店铺和居民生活在这里交叠，呈现一条古街不断生长的样子。", highlights: ["寻找历史遗存", "对照老照片与现状", "记录沿街店铺和居民生活", "细看木构、砖墙与街巷尺度"], related: ["zizhi", "route-old-city", "memory"] },
  "zizhi": { title: "紫芝街", eyebrow: "STREET LIFE · 古街日常", summary: "在修复后的街区里，看建筑如何继续承载生活。", meta: ["紫芝街", "街区", "城市生活"], intro: "紫芝街适合用步行视角观察建筑、店铺、居民和游客之间的关系。", description: "白天的邻里往来与夜晚亮起的灯笼，让街区历史和今天的烟火日常同时可见。", highlights: ["观察街巷尺度与建筑细节", "记录不同时段的生活场景", "认识沿街店铺与居民", "感受古街夜色"], related: ["tiejinglan", "route-old-city", "past-present"] },
  "local-snacks": { title: "地方小吃", eyebrow: "STREET BITES · 古城一口", summary: "在古城漫步的结尾，用一口家乡味连接街巷与日常。", meta: ["路线节点", "小吃", "家乡味"], intro: "光饼、豆浆粉、芋饺和扁肉，都是建瓯街巷里熟悉的味道。", description: "食材、口感和本地吃法各有特点，一份简单的小吃也能讲出城市的生活节奏。", highlights: ["认识食物本身", "了解食材、口味和吃法", "感受街巷里的早餐与夜食", "听本地人讲家乡味"], related: ["breakfast", "food", "route-old-city"] },
  "beiyuan": { title: "北苑", eyebrow: "PLACE OF TEA · 茶从这里来", summary: "先认识北苑在哪里，再理解它为什么与建瓯茶史紧密相连。", meta: ["地名", "茶文化", "路线节点"], intro: "北苑不是抽象的历史名词，而是可以从地图、遗址和村落进入的具体地方。", description: "东峰镇裴桥村焙前一带的御焙遗址、摩崖石刻与周边村落，把北苑贡茶的历史落在真实地点上。", highlights: ["地图定位北苑", "梳理地名和建瓯关系", "连接御焙遗址与村落", "沿遗址认识千年茶事"], related: ["tea", "route-tea", "tea-garden"] },
  "tea-garden": { title: "茶园", eyebrow: "FROM THE LAND · 一片叶子的起点", summary: "从生长环境、采摘时节和茶农工作认识建瓯茶。", meta: ["茶园", "采制", "人物"], intro: "茶园内容关注一片叶子如何从土地进入制作环节。", description: "拍摄应尊重生产秩序，并记录季节、地点、人物和工序，避免用其他地区茶园图片代替。", highlights: ["记录茶树与环境", "观察采摘和初制", "采访茶农的工作节奏", "标注拍摄地点与日期"], related: ["beiyuan", "diancha", "tea-people"] },
  "diancha": { title: "宋式点茶", eyebrow: "WHISKED TEA · 看懂过程", summary: "用器具、动作和茶汤变化解释点茶在做什么。", meta: ["点茶", "器具", "体验"], intro: "点茶适合用连续照片或短视频拆解，让第一次接触的人也能理解。", description: "从茶盏与茶筅等器具开始，再看调膏、注水与击拂，茶汤在动作中逐渐形成细腻泡沫。", highlights: ["认识茶盏、茶筅等器具", "拆解调膏和击拂过程", "观察茶汤色泽与泡沫", "走进点茶传习空间"], related: ["tea", "route-tea", "experience"] },
  "tea-people": { title: "茶人故事", eyebrow: "PEOPLE OF TEA · 今日北苑", summary: "通过茶农、制茶人与推广者，看到北苑茶如何活在今天。", meta: ["人物", "制茶", "采访"], intro: "人物故事能把宏大的茶史重新落到具体工作和个人选择上。", description: "采访将记录人物身份、工作过程、引用确认和素材授权，不用单一人物代表全部地方经验。", highlights: ["一天的工作流程", "学习制茶的经历", "如何理解北苑传统", "采访文字交由本人确认"], related: ["tea-garden", "route-tea", "returning-youth"] },
  "beijin-lake": { title: "北津湖", eyebrow: "LAKESIDE · 湖畔建瓯", summary: "从水面、岸线和周边生活认识建瓯的湖畔景观。", meta: ["湖畔", "自然", "路线节点"], intro: "北津湖为山城建瓯展开一片开阔水面。", description: "湖面、岸线、远山与沿湖生活构成层次丰富的自然画面，也连接着建瓯人与水的日常。", highlights: ["记录湖畔景观", "观察人与水的关系", "远眺山水层次", "感受不同天气下的湖面"], related: ["route-nature", "nature", "wanmu-forest"] },
  "wanmu-forest": { title: "万木林", eyebrow: "FOREST · 进入绿色深处", summary: "在森林主题中理解保护、观察与游览之间的边界。", meta: ["森林", "保护", "路线节点"], intro: "万木林承载着延续数百年的民间护林传统。", description: "古树、林下生态和地方护林故事共同构成这片森林的价值，也提醒来访者以克制的方式亲近自然。", highlights: ["认识森林生态价值", "了解地方护林传统", "观察林下植物与古树", "尊重自然保护边界"], related: ["route-nature", "nature", "ancient-villages"] },
  "ancient-villages": { title: "古村落", eyebrow: "OLD VILLAGES · 村庄时间", summary: "从建筑、道路与居民生活，理解古村不是静止的布景。", meta: ["党城村", "后山村", "磨下村"], intro: "古村选题关注历史遗存，也关注今天仍在这里生活的人。", description: "党城村、后山村、磨下村和湖头村保存着各自的建筑与地方故事，村民的生产生活也让这些空间延续至今。", highlights: ["记录村庄历史与建筑", "观察公共空间与日常", "认识地方生产生活", "尊重居民生活空间"], related: ["route-nature", "rural-life", "nature"] },
  "rural-life": { title: "乡村生活", eyebrow: "EVERYDAY VILLAGE · 日常建瓯", summary: "不只看风景，也看村庄里真实持续的生产与生活。", meta: ["日常", "人物", "当代乡村"], intro: "乡村生活内容应避免只追求视觉上的古朴或田园化。", description: "采编将关注村民的工作、公共活动、返乡选择和地方变化，并明确人物同意与素材使用范围。", highlights: ["记录真实劳动场景", "关注不同年龄的人", "说明拍摄时间和背景", "避免替人物下结论"], related: ["ancient-villages", "route-nature", "returning-youth"] },

  "past-present": { title: "同一个地方的过去与现在", eyebrow: "THEN & NOW · 城市对照", summary: "让旧照片与今天的同一机位相遇。", meta: ["老照片", "城市变化", "街巷对照"], intro: "同地点对照能把抽象的城市变化变成可观察的细节。", description: "当旧照片与今天的街景并置，屋檐、店招、道路和树木的变化便成为城市时间最直观的注脚。", highlights: ["寻找城市旧影", "辨认照片中的地点", "复拍相近机位", "听居民讲述变化"], related: ["memory", "zizhi", "old-shop"] },
  "old-shop": { title: "一家老店的一天", eyebrow: "A DAY AT THE SHOP · 老店日常", summary: "从开门、备料到收摊，记录一间店铺怎样参与城市生活。", meta: ["老店", "人物", "一天记录"], intro: "一家店的完整一天，比单次探店更能呈现劳动和地方关系。", description: "清晨备料、熟客问候、午间忙碌与夜晚收摊，一间老店的日常也映照着街区的生活节奏。", highlights: ["记录开店前的准备", "观察熟客与街坊关系", "聆听店主的经营记忆", "看见一日劳作的细节"], related: ["memory", "past-present", "local-snacks"] },
  "returning-youth": { title: "返乡青年的选择", eyebrow: "RETURNING HOME · 人物故事", summary: "从个人选择理解家乡的新工作、新生活与新可能。", meta: ["返乡", "青年", "人物采访"], intro: "返乡不是单一成功模板，每个人的原因、困难和路径都不同。", description: "采访将围绕为什么回来、正在做什么、遇到什么现实问题，以及如何看待家乡变化展开。", highlights: ["尊重个人真实动机", "记录工作和生活现场", "呈现困难而非只写励志", "采访内容交由本人确认"], related: ["memory", "industry", "tea-people"] }
};

// 资料包按主题共享可靠来源，详情页只展示其中可复核的出处。
const researchBundles = {
  overview: {
    facts: [
      { title: "古城的新等级", text: "福建省文化和旅游厅于2026年3月26日正式确定建瓯建州古城景区为国家4A级旅游景区，景区以铁井栏—紫芝街历史文化街区为核心。" },
      { title: "保护与活化同步", text: "建瓯自2022年启动古城保护活化工程，修缮街区的同时引入博物馆、非遗体验和日常商业，让历史空间继续服务今天的城市生活。" }
    ],
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
    sources: [
      { title: "建瓯新闻网：这里是建瓯｜古城记忆", date: "2025-11-10", scope: "徐文亮镜头中的古城街巷、门头与老店招牌", url: "https://www.jrjonews.com/2025-11/10/content_2278447.htm" },
      { title: "建瓯新闻网：聚焦高质量发展｜千年建州古城走向活化复兴", date: "2025-04-25", scope: "居民、经营者与文化工作者的多方讲述", url: "https://www.jrjonews.com/2025-04/25/content_2203084.htm" },
      { title: "建瓯新闻网：我在建瓯邂逅千年古城", date: "2026-03-02", scope: "古城修缮前后与人物记忆", url: "https://www.jrjonews.com/2026-03/02/content_2315266.htm" }
    ]
  },
  experience: {
    facts: [
      { title: "从观看走向参与", text: "建州古城的官方介绍把非遗体验与市井生活列为景区内容；点茶传习所等空间则提供了器具展示、讲解和体验的具体场景。" },
      { title: "活动有明确时间", text: "喊山、节庆展演和专题交流都有自己的举办日期。网页会保留报道日期，不把一次活动写成每天都能参加的常设项目。" }
    ],
    sources: [
      { title: "福建省文旅厅：建州古城景区介绍", date: "2026-03-30", scope: "古城文化地标与非遗体验概览", url: "https://wlt.fujian.gov.cn/zwgk/tzgg/gggs/202603/t20260330_7117179.htm" },
      { title: "建瓯新闻网：凤冈别墅宋式点茶非遗传习所", date: "2025-03-28", scope: "点茶展示与体验场景", url: "https://www.jrjonews.com/2025-03/28/content_2191459.htm" },
      { title: "建瓯新闻网：校园文创市集开市", date: "2025-07-07", scope: "拓印、版画、挑幡与手作互动", url: "https://www.jrjonews.com/2025-07/07/content_2231101.htm" },
      { title: "建瓯新闻网：建州ZUI江湖 等你来挑战", date: "2025-07-14", scope: "白鹤山文化街区沉浸式剧本游", url: "https://www.jrjonews.com/2025-07/14/content_2233656.htm" }
    ]
  }
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
  providedTongxianPlaque: { src: "assets/images/detail/provided/tongxian-plaque.jpg", alt: "通仙门匾额与彩绘细节", caption: "通仙门匾额与建筑彩绘细节", credit: "摄影师张雨婷提供" },
  providedInscription: { src: "assets/images/detail/provided/ancient-inscription.jpg", alt: "建瓯古建筑匾额与彩绘", caption: "古建筑匾额、木构和彩绘细节", credit: "摄影师张雨婷提供", orientation: "wide" },
  providedGulouhou: { src: "assets/images/detail/provided/gulouhou-gate.jpg", alt: "建瓯鼓楼后牌楼夜景", caption: "鼓楼后街巷牌楼夜景", credit: "摄影师张雨婷提供", orientation: "portrait" },
  providedFuqian: { src: "assets/images/detail/provided/fuqian-gate.jpg", alt: "建瓯府前牌楼夜景", caption: "府前街巷牌楼夜景", credit: "摄影师张雨婷提供", orientation: "portrait" },
  providedWufeng: { src: "assets/images/detail/provided/wufeng-night.jpg", alt: "建瓯五凤楼正面夜景", caption: "五凤楼正面夜景", credit: "摄影师张雨婷提供", orientation: "portrait" },
  providedTiejinglan: { src: "assets/images/detail/provided/tiejinglan-night.jpg", alt: "建瓯铁井栏牌楼夜景", caption: "铁井栏街区牌楼夜景", credit: "摄影师张雨婷提供", orientation: "portrait" },
  ancientZizhi: { src: "assets/images/detail/topics/ancient-zizhi.jpg", alt: "建瓯紫芝街夜景", caption: "紫芝街夜间街区景观", credit: "图虫摄影", source: "https://tuchong.com/1348496/139785966/", orientation: "portrait" },
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

// 每个详情页使用与主题对应的标题，彻底移除重复的“内容看点”。
const contentHeadingByTopic = {
  "ancient-city-scenic": "建州古城影像", themes: "八种认识建瓯的方式", routes: "三条路线怎么走", "old-city": "古城建筑与街巷",
  food: "一桌建州味", tea: "从北苑到一盏茶", craft: "活着的手艺", nature: "城墙之外的山水",
  industry: "土地、产品与人", memory: "镜头与讲述里的建瓯", experience: "今天怎样参与建州文化",
  breakfast: "建瓯人的早餐桌", "local-dishes": "建州地方菜", "seasonal-produce": "跟着季节吃建瓯",
  "route-old-city": "古城半日漫步", "route-tea": "一片茶叶的旅程", "route-nature": "山水乡村一日线",
  tongxian: "通仙门建筑细节", tiejinglan: "铁井栏街巷夜色", zizhi: "紫芝街的烟火日常", "local-snacks": "古城里的一口建瓯",
  beiyuan: "北苑贡茶故地", "tea-garden": "茶园里的四季劳动", diancha: "宋式点茶的器与技", "tea-people": "今天的建瓯茶人",
  "beijin-lake": "北津湖山水", "wanmu-forest": "万木林生态", "ancient-villages": "古村落里的时间", "rural-life": "乡村生活观察",
  "past-present": "旧影与新城", "old-shop": "老店的一天", "returning-youth": "回到家乡之后"
};

// 这些主题更适合用结构化文字说明，避免32页都呈现相同的“双图＋链接”。
const textContentByTopic = {
  themes: {
    kicker: "CONTENT MAP · 内容地图",
    items: [
      { title: "古城与味道", text: "从城门、街巷与地方餐桌进入建瓯，先认识最贴近日常的空间和味觉。" },
      { title: "茶与手艺", text: "通过北苑贡茶、宋式点茶、挑幡与竹木工艺，看传统如何由今天的人继续完成。" },
      { title: "山水与产业", text: "把北津湖、万木林、乡村物产和生产过程放在同一幅地方图景中。" },
      { title: "记忆与体验", text: "用老照片、方言、人物和当代活动，让历史与今天发生联系。" }
    ]
  },
  routes: {
    kicker: "ROUTE NOTES · 主题路线",
    items: [
      { title: "古城与家乡味", text: "通仙门—铁井栏—紫芝街—地方小吃，适合用半日时光边走边看、边走边吃。" },
      { title: "跟着一片茶叶", text: "北苑—茶园—点茶—茶人故事，以地点、生长、技艺和人物串起茶文化。" },
      { title: "走出城墙以后", text: "北津湖—万木林—古村落—乡村生活，点位分散，实际交通需单独规划。" }
    ]
  },
  memory: {
    kicker: "CITY STORIES · 城市记忆",
    items: [
      { title: "镜头里的古城细节", text: "摄影爱好者徐文亮自2012年起持续拍摄建州古城，8000多张照片留下老树、斑驳门头和旧店招，也让普通街巷成为可被看见的城市档案。", source: { name: "建瓯新闻网《这里是建瓯｜古城记忆》", date: "2025-11-10", url: "https://www.jrjonews.com/2025-11/10/content_2278447.htm" } },
      { title: "修旧如旧，也留住生活", text: "铁井栏—紫芝街保护活化保留传统街巷尺度，并通过管线下地、路面铺贴和木构修复改善环境。居民、店铺和文化空间继续共处，古城并没有变成空置的布景。", source: { name: "新华网客户端《千年建州古城 走向“活化”复兴》", date: "2025-04-25", url: "https://www.jrjonews.com/2025-04/25/content_2203084.htm" } },
      { title: "老物件讲出的建州故事", text: "建瓯文化专家邓宝生以老物件讲述地方历史；古街里的浣洗声、邻里问候和老房修缮前后的变化，则把城市记忆落回普通人的生活。", source: { name: "福建日报《我在建瓯邂逅千年古城》", date: "2026-03-02", url: "https://www.jrjonews.com/2026-03/02/content_2315266.htm" } }
    ]
  },
  experience: {
    kicker: "CULTURE IN ACTION · 当代体验",
    items: [
      { title: "在凤冈别墅看宋式点茶", text: "铁井栏28号的凤冈别墅经过保护修缮后成为建瓯宋式点茶非遗传习所。清代木构民居与点茶器具、讲解和体验相遇，让北苑茶文化有了可以走近的空间。", source: { name: "建瓯新闻网《清居留遗韵，凤冈漫茶香》", date: "2025-03-28", url: "https://www.jrjonews.com/2025-03/28/content_2191459.htm" } },
      { title: "在文创市集动手做", text: "芝山练氏夫人公园文创市集曾汇集城区20所学校，设置拓印、版画、挑幡、扎染、剪纸等互动项目。孩子和游客亲手制作，也让地方文化从观看变成参与。", source: { name: "建瓯新闻网《校园“文创市集”开市》", date: "2025-07-07", url: "https://www.jrjonews.com/2025-07/07/content_2231101.htm" } },
      { title: "走进一场建州江湖", text: "白鹤山文化街区曾推出沉浸式剧本游，把茶、酒、理学、非遗和美食写入角色任务。参与者在街区中解谜、学习技艺，让古城空间成为故事发生的舞台。", source: { name: "建瓯新闻网《建州ZUI江湖 等你来挑战》", date: "2025-07-14", url: "https://www.jrjonews.com/2025-07/14/content_2233656.htm" } }
    ]
  },
  "tea-people": {
    kicker: "PEOPLE OF TEA · 人物采访",
    items: [
      { title: "一天怎样开始", text: "从茶农、制茶人或讲解者一天的工作流程进入人物，而不是先写宏大茶史。" },
      { title: "技艺怎样学会", text: "记录学习来源、关键工序和长期练习，让经验变得具体可见。" },
      { title: "今天怎样理解北苑", text: "允许不同从业者表达不同观点，不用一个故事代表全部建瓯茶人。" }
    ]
  },
  "rural-life": {
    kicker: "FIELD NOTES · 乡村观察",
    items: [
      { title: "真实劳动", text: "记录种植、采收、加工与运输，不只寻找风景化的田园画面。" },
      { title: "不同年龄的人", text: "关注留村者、返乡者、老人和年轻人的不同生活节奏。" },
      { title: "变化与日常", text: "公共服务、产业变化和节庆活动都要注明时间与具体背景。" },
      { title: "尊重拍摄边界", text: "进入生产和居住空间前征得同意，避免打扰村民生活。" }
    ]
  },
  "old-shop": {
    kicker: "A DAY AT THE SHOP · 跟拍提纲",
    items: [
      { title: "开门与备料", text: "记录一天从何时开始，原料和工具怎样准备。" },
      { title: "营业中的关系", text: "观察熟客、街坊和店主之间长期形成的地方联系。" },
      { title: "收摊以后", text: "用清洁、盘点和店主讲述补全一间老店的完整一天。" }
    ]
  },
  "returning-youth": {
    kicker: "COMING HOME · 人物线索",
    items: [
      { title: "为什么回来", text: "从个人经历、家庭关系和对家乡的判断理解返乡选择。" },
      { title: "回来做什么", text: "具体呈现产品、工作流程、合作伙伴与服务对象。" },
      { title: "遇到哪些困难", text: "同时记录资金、市场、人才与生活适应，不把个体包装成单一成功模板。" },
      { title: "家乡因此改变什么", text: "从产品、就业与街区生活的变化，看个人选择怎样与地方发展相连。" }
    ]
  }
};

// 多个入口可共享同一组可靠素材，但每个主题都必须有图片和强相关视频，不能再回退为空置位。
const media = (images, video) => ({ images: images.map(key => mediaAssets[key]), video });
const mediaByTopic = {
  "ancient-city-scenic": media(["providedWufeng", "providedTiejinglan"], videos.city),
  themes: media(["ancientZizhi", "teaBeiyuan"], videos.city),
  routes: media(["ancientTongxian", "natureWanmu"], videos.city),
  "old-city": media(["providedGulouhou", "providedFuqian", "providedInscription"], videos.city),
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
  "route-old-city": media(["providedWufeng", "providedTiejinglan"], videos.city),
  "route-tea": media(["teaBeiyuan", "teaGarden"], videos.tea),
  "route-nature": media(["natureBeijin", "natureWanmu"], videos.nature),
  tongxian: media(["ancientTongxian", "providedTongxianPlaque"], videos.city),
  tiejinglan: media(["providedTiejinglan", "providedGulouhou"], videos.tiejinglan),
  zizhi: media(["ancientZizhi", "providedFuqian"], videos.tiejinglan),
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
  const textContent = textContentByTopic[slug];
  const topicMedia = mediaByTopic[slug];
  document.querySelector("#highlights-title").textContent = contentHeadingByTopic[slug];
  document.querySelector("#highlights-kicker").textContent = textContent?.kicker || "PHOTO ESSAY · 主题影像";
  const contentRoot = document.querySelector("#detail-media-gallery");

  if (textContent) {
    contentRoot.className = "detail-text-grid";
    contentRoot.innerHTML = textContent.items.map((item, index) => `
      <article class="detail-text-card">
        <span class="detail-text-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        ${item.source ? `<a class="detail-text-source" href="${item.source.url}" target="_blank" rel="noopener noreferrer">来源：${item.source.name} · ${item.source.date}</a>` : ""}
      </article>`).join("");
  } else {
    const imageCards = topicMedia.images.map(image => {
      const orientationClass = image.orientation ? ` is-${image.orientation}` : "";
      const credit = image.source
        ? `<a href="${image.source}" target="_blank" rel="noopener noreferrer">${image.credit}</a>`
        : `<span class="detail-user-credit">${image.credit}</span>`;
      return `
        <figure class="detail-media-card${orientationClass}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy">
          <figcaption>${image.caption} · 图片来源：${credit}</figcaption>
        </figure>`;
    });
    contentRoot.className = "detail-media-gallery";
    contentRoot.classList.toggle("is-single", imageCards.length === 1);
    contentRoot.classList.toggle("is-three", imageCards.length === 3);
    contentRoot.innerHTML = imageCards.join("");
  }
  document.querySelector("#detail-video-slot").innerHTML =
    `<a class="detail-video-link" href="${topicMedia.video.url}" target="_blank" rel="noopener noreferrer">${topicMedia.video.label}</a>`;
  document.querySelector("#detail-sources").innerHTML = research.sources
    .map(source => `
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">
        <span class="source-title">${source.title}</span>
        <span class="source-date">${source.date}</span>
        <span class="source-scope">${source.scope}</span>
      </a>`).join("");
}
