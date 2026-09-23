/* =====================================================
   LINKWORDS
   Veja • Ligue • Aprenda
===================================================== */


/* =====================================================
   CATEGORIAS E PERGUNTAS
===================================================== */

const categories = [

  {
    id: "family",
    name: "Família",
    icon: "👨‍👩‍👧",
    levels: 12,
    desc: "Pessoas e relações familiares",

    questions: [

      ["👩", "👨", "Mother + Father",
        ["Parents", "Children", "Siblings", "Couple"], 0],

      ["👧", "👦", "Daughter + Son",
        ["Parents", "Children", "Friends", "Couple"], 1],

      ["👧", "👦", "Sister + Brother",
        ["Parents", "Siblings", "Children", "Spouses"], 1],

      ["👵", "👴", "Grandmother + Grandfather",
        ["Grandparents", "Parents", "Children", "Relatives"], 0],

      ["👩‍🦰", "👨‍🦱", "Aunt + Uncle",
        ["Siblings", "Relatives", "Parents", "Children"], 1]

    ]
  },


  {
    id: "home",
    name: "Casa",
    icon: "🏠",
    levels: 10,
    desc: "Cômodos e objetos da casa",

    questions: [

      ["🛏️", "🛋️", "Bed + Sofa",
        ["Furniture", "Food", "Clothes", "Transport"], 0],

      ["🍳", "🧊", "Stove + Refrigerator",
        ["Bathroom", "Kitchen", "Bedroom", "Garden"], 1],

      ["🚿", "🚽", "Shower + Toilet",
        ["Kitchen", "Bathroom", "Garage", "Office"], 1],

      ["📺", "🛋️", "TV + Sofa",
        ["Living room", "Kitchen", "Garden", "Bedroom"], 0]

    ]
  },


  {
    id: "clothes",
    name: "Roupas",
    icon: "👕",
    levels: 8,
    desc: "Peças e acessórios",

    questions: [

      ["👕", "👖", "Shirt + Pants",
        ["Clothes", "Food", "Furniture", "Sports"], 0],

      ["👟", "🧦", "Shoes + Socks",
        ["Footwear", "Outerwear", "Jewelry", "Tools"], 0],

      ["🧥", "🧣", "Jacket + Scarf",
        ["Clothes", "Outerwear", "Food", "Transport"], 1]

    ]
  },


  {
    id: "food",
    name: "Alimentação",
    icon: "🍎",
    levels: 9,
    desc: "Comidas, bebidas e utensílios",

    questions: [

      ["🍎", "🍌", "Apple + Banana",
        ["Vegetables", "Fruits", "Drinks", "Desserts"], 1],

      ["🍚", "🫘", "Rice + Beans",
        ["Food", "Furniture", "Clothes", "Animals"], 0],

      ["🔪", "🍴", "Knife + Fork",
        ["Cutlery", "Furniture", "Tools", "Sports"], 0]

    ]
  },


  {
    id: "animals",
    name: "Animais",
    icon: "🐾",
    levels: 7,
    desc: "Animais domésticos e selvagens",

    questions: [

      ["🐶", "🐱", "Dog + Cat",
        ["Pets", "Birds", "Farm animals", "Wild animals"], 0],

      ["🐄", "🐐", "Cow + Goat",
        ["Pets", "Farm animals", "Birds", "Insects"], 1],

      ["🦁", "🐯", "Lion + Tiger",
        ["Pets", "Farm animals", "Wild animals", "Sea animals"], 2]

    ]
  },


  {
    id: "transport",
    name: "Transportes",
    icon: "🚗",
    levels: 6,
    desc: "Veículos e meios de transporte",

    questions: [

      ["🚗", "🚌", "Car + Bus",
        ["Vehicles", "Furniture", "Clothes", "Food"], 0],

      ["✈️", "🚁", "Plane + Helicopter",
        ["Aircraft", "Vehicles", "Ships", "Rail transport"], 0],

      ["🚆", "🚇", "Train + Metro",
        ["Water transport", "Rail transport", "Aircraft", "Road transport"], 1]

    ]
  },


  {
    id: "jobs",
    name: "Profissões",
    icon: "👨‍⚕️",
    levels: 5,
    desc: "Trabalho e profissões",

    questions: [

      ["👨‍⚕️", "👩‍⚕️", "Doctor + Nurse",
        ["Education", "Healthcare workers", "Legal professionals", "Artists"], 1],

      ["👨‍🏫", "🧑‍🎓", "Teacher + Student",
        ["Education", "Transport", "Healthcare", "Sports"], 0],

      ["👨‍⚖️", "👩‍⚖️", "Judge + Lawyer",
        ["Healthcare", "Education", "Legal professionals", "Emergency services"], 2]

    ]
  },


  {
    id: "emotions",
    name: "Emoções",
    icon: "😊",
    levels: 4,
    desc: "Sentimentos e estados",

    questions: [

      ["😄", "😁", "Happiness + Smile",
        ["Joy", "Fear", "Anger", "Sadness"], 0],

      ["😡", "😤", "Anger + Frustration",
        ["Joy", "Negative emotions", "Love", "Calm"], 1],

      ["❤️", "🤝", "Love + Trust",
        ["Relationship", "Fear", "Anger", "Transport"], 0]

    ]
  },


  {
    id: "geography",
    name: "Geografia",
    icon: "🌍",
    levels: 6,
    desc: "Lugares, natureza e mapas",

    questions: [

      ["🌊", "🏞️", "River + Lake",
        ["Buildings", "Bodies of water", "Vehicles", "Clothes"], 1],

      ["🗺️", "🧭", "Map + Compass",
        ["Navigation", "Food", "Sports", "Furniture"], 0]

    ]
  },


  {
    id: "sports",
    name: "Desporto",
    icon: "⚽",
    levels: 5,
    desc: "Modalidades e equipamentos",

    questions: [

      ["⚽", "🥅", "Ball + Goal",
        ["Football", "Tennis", "Boxing", "Basketball"], 0],

      ["🎾", "🏸", "Racket + Ball",
        ["Tennis", "Football", "Swimming", "Boxing"], 0],

      ["🏀", "⭕", "Hoop + Ball",
        ["Basketball", "Football", "Hockey", "Tennis"], 0]

    ]
  },


  {
    id: "technology",
    name: "Tecnologia",
    icon: "💻",
    levels: 6,
    desc: "Computadores, internet e dispositivos",

    questions: [

      ["⌨️", "🖱️", "Keyboard + Mouse",
        ["Computer peripherals", "Food", "Clothes", "Transport"], 0],

      ["📱", "🌐", "Phone + Internet",
        ["Smartphone", "Television", "Furniture", "Vehicle"], 0],

      ["📷", "🎙️", "Camera + Microphone",
        ["Media", "Kitchen", "Sports", "School"], 0]

    ]
  },


  {
    id: "school",
    name: "Escola",
    icon: "🏫",
    levels: 6,
    desc: "Estudos e educação",

    questions: [

      ["👩‍🏫", "🏫", "Teacher + Classroom",
        ["School", "Hospital", "Airport", "Restaurant"], 0],

      ["📚", "✏️", "Book + Pen",
        ["Study", "Transport", "Food", "Music"], 0]

    ]
  },


  {
    id: "nature",
    name: "Natureza",
    icon: "🌳",
    levels: 7,
    desc: "Plantas, clima e ambiente",

    questions: [

      ["🌳", "🌿", "Tree + Plant",
        ["Nature", "Technology", "Transport", "Clothes"], 0],

      ["☀️", "🌧️", "Sun + Rain",
        ["Weather", "Animals", "Food", "Furniture"], 0]

    ]
  },


  {
    id: "body",
    name: "Corpo humano",
    icon: "🧍",
    levels: 8,
    desc: "Partes do corpo e saúde",

    questions: [

      ["👁️", "👂", "Eye + Ear",
        ["Senses", "Clothes", "Transport", "Furniture"], 0],

      ["🦷", "👅", "Teeth + Tongue",
        ["Mouth", "Senses", "Food", "Tools"], 0]

    ]
  },


  {
    id: "music",
    name: "Música",
    icon: "🎵",
    levels: 5,
    desc: "Instrumentos e conceitos musicais",

    questions: [

      ["🎸", "🥁", "Guitar + Drums",
        ["Instruments", "Sports", "Transport", "Clothes"], 0],

      ["🎤", "🎧", "Microphone + Headphones",
        ["Music", "School", "Food", "Nature"], 0]

    ]
  },


  {
    id: "city",
    name: "Cidade",
    icon: "🏙️",
    levels: 6,
    desc: "Lugares e serviços urbanos",

    questions: [

      ["🏦", "🏪", "Bank + Shop",
        ["City places", "Animals", "Sports", "Clothes"], 0],

      ["🚦", "🛣️", "Traffic light + Road",
        ["Transport", "City infrastructure", "Food", "School"], 1]

    ]
  },


  {
    id: "travel",
    name: "Viagens",
    icon: "✈️",
    levels: 7,
    desc: "Viagem, aeroporto e turismo",

    questions: [

      ["🧳", "✈️", "Suitcase + Plane",
        ["Travel", "School", "Food", "Sports"], 0],

      ["🏨", "🗺️", "Hotel + Map",
        ["Tourism", "Transport", "Nature", "Music"], 0]

    ]
  }

];


/* =====================================================
   ESTADO DO JOGADOR
===================================================== */

let state = JSON.parse(
  localStorage.getItem("linkwords_state") || "null"
);

if (!state) {

  state = {
    xp: 0,
    coins: 50,
    streak: 1,
    completed: [],
    achievements: [],
    daily: 0
  };

}


/* =====================================================
   VARIÁVEIS DO JOGO
===================================================== */

let currentCategory = null;

let currentQuestionIndex = 0;

let currentQuestions = [];

let score = 0;

let lastLevel = null;


/* =====================================================
   GUARDAR PROGRESSO
===================================================== */

function save() {

  localStorage.setItem(
    "linkwords_state",
    JSON.stringify(state)
  );

  updateStats();

}


/* =====================================================
   ATUALIZAR ESTATÍSTICAS
===================================================== */

function updateStats() {

  const xpTop =
    document.querySelector("#xpTop");

  const coinsTop =
    document.querySelector("#coinsTop");

  if (xpTop)
    xpTop.textContent = state.xp;

  if (coinsTop)
    coinsTop.textContent = state.coins;


  const profileCoins =
    document.querySelector("#profileCoins");

  if (profileCoins)
    profileCoins.textContent = state.coins;


  const shopCoins =
    document.querySelector("#shopCoins");

  if (shopCoins)
    shopCoins.textContent = state.coins;


  const level =
    Math.floor(state.xp / 500) + 1;


  const previousXP =
    (level - 1) * 500;

  const nextXP =
    level * 500;


  const profileLevel =
    document.querySelector("#profileLevel");

  if (profileLevel)
    profileLevel.textContent = level;


  const profileXP =
    document.querySelector("#profileXP");

  if (profileXP)
    profileXP.textContent = state.xp;


  const profileNextXP =
    document.querySelector("#profileNextXP");

  if (profileNextXP)
    profileNextXP.textContent = nextXP;


  const profileXPBar =
    document.querySelector("#profileXPBar");

  if (profileXPBar) {

    const percentage =
      ((state.xp - previousXP) /
      (nextXP - previousXP)) * 100;

    profileXPBar.style.width =
      Math.min(100, percentage) + "%";

  }


  const streak =
    document.querySelector("#streak");

  if (streak)
    streak.textContent = state.streak;


  const achievementCount =
    document.querySelector("#achievementCount");

  if (achievementCount)
    achievementCount.textContent =
      state.achievements.length;

}


/* =====================================================
   TROCAR DE TELA
===================================================== */

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });


  const screen =
    document.getElementById(id);

  if (screen)
    screen.classList.add("active");


  document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.screen === id
      );

    });


  if (id === "categories")
    renderCategories();


  if (id === "home")
    renderHome();


  if (id === "achievements")
    renderAchievements();


  if (id === "profile")
    updateStats();


  if (id === "shop")
    renderShop();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   TELA INICIAL
===================================================== */

function renderHome() {

  const box =
    document.querySelector("#homeCategories");

  if (!box)
    return;


  box.innerHTML =
    categories
      .slice(0, 9)
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


/* =====================================================
   LISTA DE CATEGORIAS
===================================================== */

function renderCategories() {

  const list =
    document.querySelector("#categoryList");

  if (!list)
    return;


  list.innerHTML =
    categories
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
              •
              ${category.levels} níveis
            </p>

          </span>

          <span class="arrow">
            ›
          </span>

        </button>

      `)
      .join("");

}


/* =====================================================
   ABRIR CATEGORIA
===================================================== */

function openCategory(id) {

  currentCategory =
    categories.find(
      category => category.id === id
    );


  if (!currentCategory)
    return;


  const completedLevels =
    state.completed.filter(
      item => item.startsWith(id + ":")
    ).length;


  const percentage =
    Math.min(
      100,
      (completedLevels /
      currentCategory.levels) * 100
    );


  document.querySelector("#levelHeader").innerHTML = `

    <div class="level-head">

      <div style="font-size:42px">
        ${currentCategory.icon}
      </div>

      <h1>
        ${currentCategory.name}
      </h1>

      <p>
        ${currentCategory.desc}
      </p>

      <div class="level-progress">

        <div
          style="width:${percentage}%">
        </div>

      </div>

    </div>

  `;


  const levelList =
    document.querySelector("#levelList");


  levelList.innerHTML =
    Array.from(
      {
        length: currentCategory.levels
      },
      (_, index) => {

        const completed =
          state.completed.includes(
            id + ":" + index
          );


        const unlocked =
          index === 0 ||
          state.completed.includes(
            id + ":" + (index - 1)
          );


        return `

          <div
            class="level-item
            ${unlocked ? "" : "locked"}">

            <div class="level-number">

              ${
                completed
                  ? "✅"
                  : unlocked
                    ? index + 1
                    : "🔒"
              }

            </div>


            <div class="level-info">

              <h3>
                Nível ${index + 1}
              </h3>

              <small>

                ${
                  completed
                    ? "Concluído"
                    : unlocked
                      ? "Disponível"
                      : "Complete o nível anterior"
                }

              </small>

            </div>


            ${
              unlocked

              ?

              `<button
                class="play-btn"
                onclick="startLevel(${index})">

                ${completed ? "Rever" : "Jogar"}

              </button>`

              :

              ""

            }

          </div>

        `;

      }
    )
    .join("");


  showScreen("levels");

}


/* =====================================================
   INICIAR NÍVEL
===================================================== */

function startLevel(index) {

  if (!currentCategory)
    return;


  lastLevel = index;

  currentQuestionIndex = 0;

  score = 0;


  currentQuestions =
    [...currentCategory.questions];


  showScreen("game");

  renderQuestion();

}


/* =====================================================
   MOSTRAR PERGUNTA
===================================================== */

function renderQuestion() {

  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  if (!question)
    return;


  document.querySelector(
    "#gameProgress"
  ).textContent =
    `${currentQuestionIndex + 1}/${currentQuestions.length}`;


  document.querySelector(
    "#progressBar"
  ).style.width =
    `${((currentQuestionIndex + 1) /
    currentQuestions.length) * 100}%`;


  document.querySelector("#question").innerHTML = `

    <div class="question-card">

      <div class="question-title">
        QUAL É O CONCEITO?
      </div>

      <div class="visuals">

        <span>
          ${question[0]}
        </span>

        <b>
          +
        </b>

        <span>
          ${question[1]}
        </span>

      </div>

      <div class="question-prompt">
        ${question[2]}
      </div>

    </div>

  `;


  document.querySelector("#answers").innerHTML =

    question[3]
      .map(
        (answer, index) => `

          <button
            class="answer"
            onclick="answer(${index})">

            ${answer}

          </button>

        `
      )
      .join("");


  document.querySelector(
    "#gameMessage"
  ).textContent = "";


  document.querySelector(
    "#nextBtn"
  ).classList.add("hidden");

}


/* =====================================================
   RESPONDER
===================================================== */

function answer(index) {

  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  const buttons =
    [
      ...document.querySelectorAll(
        ".answer"
      )
    ];


  buttons.forEach(button => {
    button.disabled = true;
  });


  const correctIndex =
    question[4];


  buttons[
    correctIndex
  ].classList.add("correct");


  if (index === correctIndex) {

    score++;


    document.querySelector(
      "#gameMessage"
    ).textContent =
      "🎉 Correto! +20 XP";


    state.xp += 20;

    state.coins += 10;

  }

  else {

    buttons[index]
      .classList.add("wrong");


    document.querySelector(
      "#gameMessage"
    ).textContent =
      "💡 A resposta é: " +
      question[3][correctIndex];

  }


  save();


  document.querySelector(
    "#nextBtn"
  ).classList.remove("hidden");

}


/* =====================================================
   PRÓXIMA PERGUNTA
===================================================== */

function nextQuestion() {

  currentQuestionIndex++;


  if (
    currentQuestionIndex >=
    currentQuestions.length
  ) {

    finishLevel();

  }

  else {

    renderQuestion();

  }

}


/* =====================================================
   TERMINAR NÍVEL
===================================================== */

function finishLevel() {

  const id =
    currentCategory.id +
    ":" +
    lastLevel;


  const alreadyCompleted =
    state.completed.includes(id);


  if (!alreadyCompleted) {

    state.completed.push(id);

    state.xp += 50;

    state.coins += 20;

  }


  /* CONQUISTA: PERFEITO */

  if (
    score === currentQuestions.length &&
    !state.achievements.includes("perfect")
  ) {

    state.achievements.push("perfect");

  }


  /* CONQUISTA: EXPLORADOR */

  if (
    state.completed.length >= 10 &&
    !state.achievements.includes("explorer")
  ) {

    state.achievements.push("explorer");

  }


  /* CONQUISTA: APRENDIZ */

  if (
    state.xp >= 2000 &&
    !state.achievements.includes("learner")
  ) {

    state.achievements.push("learner");

  }


  save();


  document.querySelector(
    "#resultText"
  ).textContent =
    `Você acertou ${score} de ${currentQuestions.length} desafios.`;


  document.querySelector(
    "#resultXP"
  ).textContent =
    score * 20 +
    (alreadyCompleted ? 0 : 50);


  document.querySelector(
    "#resultCoins"
  ).textContent =
    score * 10 +
    (alreadyCompleted ? 0 : 20);


  showScreen("result");

}


/* =====================================================
   REPETIR NÍVEL
===================================================== */

function replayLevel() {

  startLevel(lastLevel);

}


/* =====================================================
   DESAFIO DIÁRIO
===================================================== */

function startDaily() {

  openCategory("family");

  startLevel(0);

}


====================================================
   CONQUISTAS
===================================================== */

function renderAchievements() {

  const data = [

    [
      "perfect",
      "🧠",
      "Mestre das conexões",
      "Complete um nível sem errar"
    ],

    [
      "explorer",
      "🌍",
      "Explorador",
      "Complete 10 níveis"
    ],

    [
      "learner",
      "🥇",
      "Aprendiz",
      "Alcance 2.000 XP"
    ],

    [
      "streak",
      "🔥",
      "Sequência",
      "Jogue 7 dias seguidos"
    ]

  ];


  const list =
    document.querySelector(
      "#achievementList"
    );


  if (!list)
    return;


  list.innerHTML =
    data
      .map(item => {

        const unlocked =
          state.achievements
            .includes(item[0]);


        return `

          <div
            class="achievement
            ${unlocked ? "done" : ""}">

            <div class="badge">
              ${item[1]}
            </div>

            <h3>
              ${item[2]}
            </h3>

            <small>

              ${
                unlocked
                  ? "🏆 Conquistada"
                  : "🔒 Em progresso"
              }

              <br>

              ${item[3]}

            </small>

          </div>

        `;

      })
      .join("");

}


/* =====================================================
   LOJA
===================================================== */

function renderShop() {

  const items = [

    [
      "❤️",
      "Vida extra",
      "+1 vida durante os desafios",
      100
    ],

    [
      "💡",
      "Dica",
      "Revela uma pista",
      50
    ],

    [
      "🔀",
      "Eliminar resposta",
      "Remove uma opção",
      75
    ],

    [
      "⏱️",
      "Tempo extra",
      "Mais tempo no modo rápido",
      80
    ]

  ];


  const shop =
    document.querySelector(
      "#shopList"
    );


  if (!shop)
    return;


  shop.innerHTML =
    items
      .map(
        (item, index) => `

          <div class="shop-item">

            <div class="shop-icon">
              ${item[0]}
            </div>

            <div class="shop-info">

              <h3>
                ${item[1]}
              </h3>

              <p>
                ${item[2]}
              </p>

            </div>

            <button
              class="buy"
              onclick="buyItem(${index})">

              🪙 ${item[3]}

            </button>

          </div>

        `
      )
      .join("");

}


/* =====================================================
   COMPRAR ITEM
===================================================== */

function buyItem(index) {

  const prices = [
    100,
    50,
    75,
    80
  ];


  const names = [
    "Vida extra",
    "Dica",
    "Eliminar resposta",
    "Tempo extra"
  ];


  if (
    state.coins <
    prices[index]
  ) {

    alert(
      "Você não tem moedas suficientes."
    );

    return;

  }


  state.coins -=
    prices[index];


  save();


  alert(
    names[index] +
    " comprado!"
  );


  renderShop();

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderHome();

renderCategories();

renderAchievements();

renderShop();

updateStats();
