// 首版内容数据：后续增加条目时，只需按相同格式复制一项。
const stories = [
  { slug: "old-city", title: "古城与建筑", category: "city", tag: "建州古城", symbol: "城", color: "#315f53", text: "从铁井栏、紫芝街到鼓楼和文庙，在街巷里读懂建州。" },
  { slug: "food", title: "建州味道", category: "food", tag: "家乡餐桌", symbol: "味", color: "#a94d39", text: "从光饼、芋饺和豆浆粉开始，认识食物背后的生活。" },
  { slug: "tea", title: "北苑茶", category: "culture", tag: "千年茶事", symbol: "茶", color: "#657641", text: "连接北苑御焙遗址、宋式点茶与今天的制茶人。" },
  { slug: "craft", title: "非遗与手艺", category: "culture", tag: "人在传承", symbol: "艺", color: "#8b583a", text: "看挑幡、版画、唱曲子和扎纸如何留在日常里。" },
  { slug: "nature", title: "乡村与山水", category: "nature", tag: "城外建瓯", symbol: "山", color: "#397065", text: "去湖畔、森林和古村，看见更辽阔的家乡。" },
  { slug: "industry", title: "物产与产业", category: "nature", tag: "建瓯出品", symbol: "竹", color: "#71804f", text: "一根竹、一颗锥栗和一门木艺，连起土地与今天。" },
  { slug: "memory", title: "城市记忆", category: "city", tag: "旧影新声", symbol: "忆", color: "#c7c9b3", cover: "assets/images/home/city-memory-original.jpg", text: "老照片、方言、店招与人物，保存城市变化的温度。" },
  { slug: "experience", title: "当代体验", category: "culture", tag: "正在发生", symbol: "游", color: "#b66b3c", text: "点茶、拓印、展馆与演艺，遇见当下的建州。" }
];

const grid = document.querySelector("#story-grid");

function renderStories() {
  grid.innerHTML = stories.map((story, index) => {
    // 城市记忆使用用户指定的原邮票图；其余主题仍保留原来的色块识别方式。
    const cover = story.cover
      ? `<img class="story-card-cover" src="${story.cover}" alt="" loading="lazy">`
      : "";
    const coverClass = story.cover ? " story-card--cover" : "";

    return `
      <a class="story-card${coverClass}" href="detail.html?topic=${story.slug}" data-category="${story.category}" data-symbol="${story.symbol}" style="--card-color:${story.color}" aria-label="查看${story.title}介绍">
        ${cover}
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <p class="tag">${story.tag}</p>
        <h3>${story.title}</h3>
        <p>${story.text}</p>
      </a>
    `;
  }).join("");
}

renderStories();

// 内容筛选：同步按钮状态，且保留无 JavaScript 时的完整内容结构。
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".story-card").forEach(card => {
      card.classList.toggle("is-hidden", selected !== "all" && card.dataset.category !== selected);
    });
  });
});

// 手机导航：点击菜单、链接或 Escape 后自动关闭。
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const willOpen = !navigation.classList.contains("is-open");
  navigation.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
});

navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

// 轻量进入动画；不支持观察器的旧浏览器直接显示内容。
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();
