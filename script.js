// ==========================================
// LINKWORDS - SISTEMA PRINCIPAL
// ==========================================

const categories = [
  {
    id: "family",
    name: "Família",
    icon: "👨‍👩‍👧",
    levels: 12,
    desc: "Pessoas e relações familiares",
    questions: [
      ["👩", "👨", "Mother + Father", ["Parents", "Children", "Siblings", "Couple"], 0],
      ["👧", "👦", "Daughter + Son", ["Parents", "Children", "Friends", "Couple"], 1],
      ["👧", "👦", "Sister + Brother", ["Parents", "Siblings", "Children", "Spouses"], 1],
      ["👵", "👴", "Grandmother + Grandfather", ["Grandparents", "Parents", "Children", "Friends"], 0]
    ]
  },

  {
    id: "home",
    name: "Casa",
    icon: "🏠",
    levels: 10,
    desc: "Cômodos e objetos da casa",
    questions: [
      ["🛏️", "🛋️", "Bed + Sofa", ["Furniture", "Food", "Clothes", "Transport"], 0],
      ["🍳", "🧊", "Stove + Refrigerator", ["Bathroom", "Kitchen", "Bedroom", "Garden"], 1],
      ["🚿", "🚽", "Shower + Toilet", ["Kitchen", "Bathroom", "Garage", "Office"], 1]
    ]
  },

  {
    id: "clothes",
    name: "Roupas",
    icon: "👕",
    levels: 8,
    desc: "Peças e acessórios",
    questions: [
      ["👕", "👖", "Shirt + Pants", ["Clothes", "Food", "Furniture", "Sports"], 0],
      ["👟", "🧦", "Shoes + Socks", ["Footwear", "Food", "Furniture", "Sports"], 0],
      ["🧥", "🧣", "Jacket + Scarf", ["Clothes", "Outerwear", "Food", "Transport"], 1]
    ]
  },

  {
    id: "food",
    name: "Alimentação",
    icon: "🍎",
    levels: 9,
    desc: "Comidas, bebidas e utensílios",
    questions: [
      ["🍎", "🍌", "Apple + Banana", ["Vegetables", "Fruits", "Drinks", "Desserts"], 1],
      ["🍚", "🫘", "Rice + Beans", ["Food", "Furniture", "Clothes", "Animals"], 0],
      ["🔪", "🍴", "Knife + Fork", ["Cutlery", "Furniture", "Tools", "Sports"], 0]
    ]
  },

  {
    id: "animals",
    name: "Animais",
    icon: "🐾",
    levels: 7,
    desc: "Animais domésticos e selvagens",
    questions: [
      ["🐶", "🐱", "Dog + Cat", ["Pets", "Birds", "Farm animals", "Wild animals"], 0],
      ["🐄", "🐐", "Cow + Goat", ["Pets", "Farm animals", "Birds", "Insects"], 1],
      ["🦁", "🐯", "Lion + Tiger", ["Pets", "Farm animals", "Wild animals", "Sea animals"], 2]
    ]
  },

  {
    id: "transport",
    name: "Transportes",
    icon: "🚗",
    levels: 6,
    desc: "Veículos e meios de transporte",
    questions: [
      ["🚗", "🚌", "Car + Bus", ["Vehicles", "Furniture", "Clothes", "Food"], 0],
      ["✈️", "🚁", "Plane + Helicopter", ["Aircraft", "Vehicles", "Ships", "Rail transport"], 0],
      ["🚆", "🚇", "Train + Metro", ["Water transport", "Rail transport", "Aircraft", "Road transport"], 1]
    ]
  },

  {
    id: "jobs",
    name: "Profissões",
    icon: "👨‍⚕️",
    levels: 5,
    desc: "Trabalho e profissões",
    questions: [
      ["👨‍⚕️", "👩‍⚕️", "Doctor + Nurse", ["Education", "Healthcare workers", "Legal professionals", "Artists"], 1],
      ["👨‍🏫", "🧑‍🎓", "Teacher + Student", ["Education", "Transport", "Healthcare", "Sports"], 0],
      ["👨‍⚖️", "👩‍⚖️", "Judge + Lawyer", ["Healthcare", "Education", "Legal professionals", "Emergency services"], 2]
    ]
  },

  {
    id: "emotions",
    name: "Emoções",
    icon: "😊",
    levels: 4,
    desc: "Sentimentos e estados",
    questions: [
      ["😄", "😁", "Happiness + Smile", ["Joy", "Fear", "Anger", "Sadness"], 0],
      ["😡", "😤", "Anger + Frustration", ["Joy", "Negative emotions", "Love", "Calm"], 1],
      ["❤️", "🤝", "Love + Trust", ["Relationship", "Fear", "Anger", "Transport"], 0]
    ]
  },

  {
    id: "geography",
    name: "Geografia",
    icon: "🌍",
    levels: 6,
    desc: "Lugares, natureza e mapas",
    questions: [
      ["🌊", "🏞️", "River + Lake", ["Buildings", "Bodies of water", "Vehicles", "Clothes"], 1],
      ["🗺️", "🧭", "Map + Compass", ["Navigation", "Food", "Sports", "Furniture"], 0]
    ]
  },

  {
    id: "sports",
    name: "Desporto",
    icon: "⚽",
    levels: 5,
    desc: "Modalidades e equipamentos",
    questions: [
      ["⚽", "🥅", "Ball + Goal", ["Football", "Tennis", "Boxing", "Basketball"], 0],
      ["🎾", "🏸", "Racket + Ball", ["Tennis", "Football", "Swimming", "Boxing"], 0],
      ["🏀", "⭕", "Hoop + Ball", ["Basketball", "Football", "Hockey", "Tennis"], 0]
    ]
  },

  {
    id: "technology",
    name: "Tecnologia",
    icon: "💻",
    levels: 6,
    desc: "Computadores, internet e dispositivos",
    questions: [
      ["⌨️", "🖱️", "Keyboard + Mouse", ["Computer peripherals", "Food", "Clothes", "Transport"], 0],
      ["📱", "🌐", "Phone + Internet", ["Smartphone", "Television", "Furniture", "Vehicle"], 0],
      ["📷", "🎙️", "Camera + Microphone", ["Media", "Kitchen", "Sports", "School"], 0]
    ]
  },

  {
    id: "school",
    name: "Escola",
    icon: "🏫",
    levels: 6,
    desc: "Estudos e educação",
    questions: [
      ["👩‍🏫", "🏫", "Teacher + Classroom", ["School", "Hospital", "Airport", "Restaurant"], 0],
      ["📚", "✏️", "Book + Pen", ["Study", "Transport", "Food", "Music"], 0]
    ]
  },

  {
    id: "nature",
    name: "Natureza",
    icon: "🌳",
    levels: 7,
    desc: "Plantas, clima e ambiente",
    questions: [
      ["🌳", "🌿", "Tree + Plant", ["Nature", "Technology", "Transport", "Clothes"], 0],
      ["☀️", "🌧️", "Sun + Rain", ["Weather", "Animals", "Food", "Furniture"], 0]
    ]
  },

  {
    id: "body",
    name: "Corpo humano",
    icon: "🧍",
    levels: 8,
    desc: "Partes do corpo e sentidos",
    questions: [
      ["👁️", "👂", "Eye + Ear", ["Senses", "Clothes", "Transport", "Furniture"], 0],
      ["🦷", "👅", "Teeth + Tongue", ["Mouth", "Senses", "Food", "Tools"], 0]
    ]
  },

  {
    id: "music",
    name: "Música",
    icon: "🎵",
    levels: 5,
    desc: "Instrumentos e conceitos musicais",
    questions: [
      ["🎸", "🥁", "Guitar + Drums", ["Instruments", "Sports", "Transport", "Clothes"], 0],
      ["🎤", "🎧", "Microphone + Headphones", ["Music", "School", "Food", "Nature"], 0]
    ]
  },

  {
    id: "city",
    name: "Cidade",
    icon: "🏙️",
    levels: 6,
    desc: "Lugares e serviços urbanos",
    questions: [
      ["🏦", "🏪", "Bank + Shop", ["City places", "Animals", "Sports", "Clothes"], 0],
      ["🚦", "🛣️", "Traffic light + Road", ["Transport", "City infrastructure", "Food", "School"], 1]
    ]
  },

  {
    id: "travel",
    name: "Viagens",
    icon: "✈️",
    levels: 7,
    desc: "Viagem, aeroporto e turismo",
    questions: [
      ["🧳", "✈️", "Suitcase + Plane", ["Travel", "School", "Food", "Sports"], 0],
      ["🏨", "🗺️", "Hotel + Map", ["Tourism", "Transport", "Nature", "Music"], 0]
    ]
  }
];


// ==========================================
// ESTADO
// ==========================================

let state;

try {
  state = JSON.parse(localStorage.getItem("linkwords_state"));
} catch (e) {
  state = null;
}

if (!state) {
  state = {
    xp: 0,
    coins: 50,
    streak: 1,
    completed: [],
    achievements: []
  };
}

let currentCategory = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let currentLevel = 0;
let score = 0;


// ==========================================
// GUARDAR
// ==========================================

function saveState() {
  localStorage.setItem(
    "linkwords_state",
    JSON.stringify(state)
  );

  updateStats();
}


// ==========================================
// ESTATÍSTICAS
// ==========================================

function updateStats() {

  const xpTop = document.getElementById("xpTop");
  const coinsTop = document.getElementById("coinsTop");

  if (xpTop) xpTop.textContent = state.xp;
  if (coinsTop) coinsTop.textContent = state.coins;

  const level =
    Math.floor(state.xp / 500) + 1;

  const profileLevel =
    document.getElementById("profileLevel");

  if (profileLevel)
    profileLevel.textContent = level;

  const profileXP =
    document.getElementById("profileXP");

  if (profileXP)
    profileXP.textContent = state.xp;

  const nextXP = level * 500;

  const profileNextXP =
    document.getElementById("profileNextXP");

  if (profileNextXP)
    profileNextXP.textContent = nextXP;

  const previousXP = (level - 1) * 500;

  const percentage =
    ((state.xp - previousXP) / 500) * 100;

  const bar =
    document.getElementById("profileXPBar");

  if (bar)
    bar.style.width =
      Math.max(0, Math.min(100, percentage)) + "%";

  const streak =
    document.getElementById("streak");

  if (streak)
    streak.textContent = state.streak;

  const achievementCount =
    document.getElementById("achievementCount");

  if (achievementCount)
    achievementCount.textContent =
      state.achievements.length;

  const profileCoins =
    document.getElementById("profileCoins");

  if (profileCoins)
    profileCoins.textContent = state.coins;

  const shopCoins =
    document.getElementById("shopCoins");

  if (shopCoins)
    shopCoins.textContent = state.coins;
}


// ==========================================
// MUDAR DE TELA
// ==========================================

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const target =
    document.getElementById(id);

  if (!target) return;

  target.classList.add("active");

  document
    .querySelectorAll(".nav-btn")
    .forEach(btn => {

      btn.classList.remove("active");

      if (btn.dataset.screen === id) {
        btn.classList.add("active");
      }

    });

  if (id === "home")
    renderHome();

  if (id === "categories")
    renderCategories();

  if (id === "achievements")
    renderAchievements();

  if (id === "profile")
    updateStats();

  if (id === "shop")
    renderShop();

  window.scrollTo(0, 0);
}


// ==========================================
// TELA INICIAL
// ==========================================

function renderHome() {

  const container =
    document.getElementById("homeCategories");

  if (!container) return;

  container.innerHTML = categories
    .slice(0, 8)
    .map(category => `

      <button
        class="cat-tile"
        onclick="openCategory('${category.id}')">

        <span class="emoji">
          ${category.icon}
        </span>

        <strong>
          ${category.name}
        </strong>

        <small>
          ${category.levels} níveis
        </small>

      </button>

    `)
    .join("");
}


// ==========================================
// CATEGORIAS
// ==========================================

function renderCategories() {

  const container =
    document.getElementById("categoryList");

  if (!container) return;

  container.innerHTML = categories
    .map(category => `

      <button
        class="category-item"
        onclick="openCategory('${category.id}')">

        <span class="category-icon">
          ${category.icon}
        </span>

        <span class="category-info">

          <h3>
            ${category.name}
          </h3>

          <p>
            ${category.desc}
          </p>

        </span>

        <span class="arrow">
          ›
        </span>

      </button>

    `)
    .join("");
}


// ==========================================
// ABRIR CATEGORIA
// ==========================================

function openCategory(id) {

  currentCategory =
    categories.find(cat => cat.id === id);

  if (!currentCategory) return;

  const header =
    document.getElementById("levelHeader");

  const completed =
    state.completed.filter(
      item => item.startsWith(id + ":")
    ).length;

  const percent =
    (completed / currentCategory.levels) * 100;

  header.innerHTML = `

    <div class="level-head">

      <div class="level-icon">
        ${currentCategory.icon}
      </div>

      <span class="eyebrow">
        CATEGORIA
      </span>

      <h1>
        ${currentCategory.name}
      </h1>

      <p>
        ${currentCategory.desc}
      </p>

      <div class="level-progress">

        <div style="width:${percent}%"></div>

      </div>

      <small>
        ${completed}/${currentCategory.levels} níveis concluídos
      </small>

    </div>

  `;

  const list =
    document.getElementById("levelList");

  list.innerHTML =
    Array.from(
      { length: currentCategory.levels },
      (_, i) => {

        const completed =
          state.completed.includes(
            id + ":" + i
          );

        const unlocked =
          i === 0 ||
          state.completed.includes(
            id + ":" + (i - 1)
          );

        return `

          <div class="level-item
            ${unlocked ? "" : "locked"}">

            <div class="level-number">

              ${
                completed
                  ? "✓"
                  : unlocked
                    ? i + 1
                    : "🔒"
              }

            </div>

            <div class="level-info">

              <h3>
                Nível ${i + 1}
              </h3>

              <small>
                ${
                  completed
                    ? "Concluído"
                    : unlocked
                      ? "Disponível"
                      : "Bloqueado"
                }
              </small>

            </div>

            ${
              unlocked
                ? `
                  <button
                    class="play-btn"
                    onclick="startLevel(${i})">

                    ${completed ? "Rever" : "Jogar"}

                  </button>
                `
                : ""
            }

          </div>

        `;
      }
    ).join("");

  showScreen("levels");
}


// ==========================================
// INICIAR NÍVEL
// ==========================================

function startLevel(level) {

  if (!currentCategory) return;

  currentLevel = level;
  currentQuestionIndex = 0;
  score = 0;

  currentQuestions =
    currentCategory.questions;

  showScreen("game");

  renderQuestion();
}


// ==========================================
// PERGUNTA
// ==========================================

function renderQuestion() {

  const question =
    currentQuestions[currentQuestionIndex];

  if (!question) return;

  const progress =
    document.getElementById("gameProgress");

  progress.textContent =
    `${currentQuestionIndex + 1}/${currentQuestions.length}`;

  const progressBar =
    document.getElementById("progressBar");

  progressBar.style.width =
    ((currentQuestionIndex + 1) /
      currentQuestions.length * 100) + "%";


  document.getElementById("question").innerHTML = `

    <div class="question-card">

      <div class="question-title">
        QUAL É A RELAÇÃO?
      </div>

      <div class="visuals">

        <span>${question[0]}</span>

        <b>+</b>

        <span>${question[1]}</span>

      </div>

      <div class="question-prompt">
        ${question[2]}
      </div>

    </div>

  `;


  const answers =
    document.getElementById("answers");

  answers.innerHTML =
    question[3]
      .map((answer, index) => `

        <button
          class="answer"
          onclick="answerQuestion(${index})">

          ${answer}

        </button>

      `)
      .join("");


  document.getElementById(
    "gameMessage"
  ).textContent = "";

  document
    .getElementById("nextBtn")
    .classList.add("hidden");
}


// ==========================================
// RESPONDER
// ==========================================

function answerQuestion(index) {

  const question =
    currentQuestions[currentQuestionIndex];

  const correct =
    question[4];

  const buttons =
    document.querySelectorAll(".answer");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (index === correct) {

    buttons[index]
      .classList.add("correct");

    score++;

    state.xp += 20;
    state.coins += 10;

    document.getElementById(
      "gameMessage"
    ).textContent =
      "🎉 Correto! +20 XP e +10 moedas";

  } else {

    buttons[index]
      .classList.add("wrong");

    buttons[correct]
      .classList.add("correct");

    document.getElementById(
      "gameMessage"
    ).textContent =
      "💡 A resposta correta é: " +
      question[3][correct];

  }

  saveState();

  document
    .getElementById("nextBtn")
    .classList.remove("hidden");
}


// ==========================================
// PRÓXIMA
// ==========================================

function nextQuestion() {

  currentQuestionIndex++;

  if (
    currentQuestionIndex >=
    currentQuestions.length
  ) {

    finishLevel();

  } else {

    renderQuestion();

  }
}


// ==========================================
// TERMINAR NÍVEL
// ==========================================

function finishLevel() {

  const key =
    currentCategory.id +
    ":" +
    currentLevel;

  const already =
    state.completed.includes(key);

  let bonusXP = 0;
  let bonusCoins = 0;

  if (!already) {

    state.completed.push(key);

    bonusXP = 50;
    bonusCoins = 20;

    state.xp += bonusXP;
    state.coins += bonusCoins;
  }


  if (
    score === currentQuestions.length &&
    !state.achievements.includes("perfect")
  ) {

    state.achievements.push("perfect");

  }


  if (
    state.completed.length >= 10 &&
    !state.achievements.includes("explorer")
  ) {

    state.achievements.push("explorer");

  }


  if (
    state.xp >= 2000 &&
    !state.achievements.includes("learner")
  ) {

    state.achievements.push("learner");

  }


  saveState();


  document.getElementById(
    "resultText"
  ).textContent =
    `Você acertou ${score} de ${currentQuestions.length} desafios.`;

  document.getElementById(
    "resultXP"
  ).textContent =
    (score * 20) + bonusXP;

  document.getElementById(
    "resultCoins"
  ).textContent =
    (score * 10) + bonusCoins;

  showScreen("result");
}


// ==========================================
// REPETIR
// ==========================================

function replayLevel() {

  startLevel(currentLevel);

}


// ==========================================
// DESAFIO DO DIA
// ==========================================

function startDaily() {

  currentCategory = categories[0];

  currentLevel = 0;

  currentQuestionIndex = 0;

  score = 0;

  currentQuestions =
    currentCategory.questions;

  showScreen("game");

  renderQuestion();
}


// ==========================================
// CONQUISTAS
// ==========================================

function renderAchievements() {

  const container =
    document.getElementById(
      "achievementList"
    );

  if (!container) return;

  const achievements = [

    {
      id: "perfect",
      icon: "🧠",
      title: "Mestre das conexões",
      text: "Complete um nível sem errar"
    },

    {
      id: "explorer",
      icon: "🌍",
      title: "Explorador",
      text: "Complete 10 níveis"
    },

    {
      id: "learner",
      icon: "🥇",
      title: "Aprendiz",
      text: "Alcance 2.000 XP"
    }

  ];

  container.innerHTML =
    achievements
      .map(item => {

        const unlocked =
          state.achievements.includes(
            item.id
          );

        return `

          <div class="achievement
            ${unlocked ? "done" : ""}">

            <div class="badge">
              ${item.icon}
            </div>

            <h3>
              ${item.title}
            </h3>

            <small>
              ${item.text}
            </small>

            <p>
              ${unlocked
                ? "🏆 Conquistada"
                : "🔒 Bloqueada"}
            </p>

          </div>

        `;

      })
      .join("");
}


// ==========================================
// LOJA
// ==========================================

function renderShop() {

  const container = document.getElementById("shopList");

  if (!container) return;

  const items = [

    {
      icon: "❤️",
      name: "Vida extra",
      description: "Uma vida adicional nos desafios",
      price: 100
    },

    {
      icon: "💡",
      name: "Dica",
      description: "Revela uma pista durante o jogo",
      price: 50
    },

    {
      icon: "⚡",
      name: "XP Boost",
      description: "Receba 100 XP imediatamente",
      price: 150
    },

    {
      icon: "🔥",
      name: "Sequência",
      description: "Aumenta sua sequência",
      price: 200
    }

  ];

  container.innerHTML = items.map((item, index) => `

    <div class="shop-item">

      <div class="shop-icon">
        ${item.icon}
      </div>

      <div class="shop-info">

        <h3>
          ${item.name}
        </h3>

        <p>
          ${item.description}
        </p>

      </div>

      <button
        class="buy-btn"
        onclick="buyItem(${index})">

        🪙 ${item.price}

      </button>

    </div>

  `).join("");
}


// ==========================================
// COMPRAR ITEM
// ==========================================

function buyItem(index) {

  const items = [

    {
      name: "Vida extra",
      price: 100
    },

    {
      name: "Dica",
      price: 50
    },

    {
      name: "XP Boost",
      price: 150
    },

    {
      name: "Sequência",
      price: 200
    }

  ];

  const item = items[index];

  if (!item) return;

  if (state.coins < item.price) {

    alert(
      "🪙 Você não tem moedas suficientes."
    );

    return;
  }

  state.coins -= item.price;

  if (item.name === "XP Boost") {
    state.xp += 100;
  }

  saveState();

  renderShop();

  alert(
    "✅ Você comprou: " + item.name
  );
}


// ==========================================
// INICIALIZAÇÃO DO APP
// ==========================================

function initApp() {

  console.log("LinkWords iniciado");

  updateStats();

  renderHome();

  renderCategories();

  renderAchievements();

  renderShop();

  showScreen("home");
}


// ==========================================
// INICIAR QUANDO A PÁGINA CARREGAR
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  initApp
);
