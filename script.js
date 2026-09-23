/* =========================================================
   LINKWORDS — SCRIPT
   Plataforma de aprendizagem
   "Veja • Ligue • Aprenda"
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DADOS
       ===================================================== */

    const categories = [
        {
            id: "familia",
            name: "Família",
            icon: "👨‍👩‍👧‍👦",
            description: "Aprenda palavras relacionadas à família.",
            color: "blue",
            lessons: [
                {
                    title: "Pessoas da família",
                    description: "Conheça os principais membros da família.",
                    words: [
                        ["Pai", "Homem que é progenitor de uma pessoa."],
                        ["Mãe", "Mulher que é progenitora de uma pessoa."],
                        ["Irmão", "Pessoa que tem os mesmos pais que outra pessoa."],
                        ["Irmã", "Pessoa do sexo feminino que tem os mesmos pais que outra pessoa."],
                        ["Avô", "Pai do pai ou da mãe."],
                        ["Avó", "Mãe do pai ou da mãe."]
                    ]
                },
                {
                    title: "Relações familiares",
                    description: "Aprenda outras relações dentro da família.",
                    words: [
                        ["Tio", "Irmão do pai ou da mãe."],
                        ["Tia", "Irmã do pai ou da mãe."],
                        ["Primo", "Filho de um tio ou de uma tia."],
                        ["Prima", "Filha de um tio ou de uma tia."],
                        ["Filho", "Pessoa em relação aos seus pais."],
                        ["Filha", "Pessoa do sexo feminino em relação aos seus pais."]
                    ]
                }
            ]
        },

        {
            id: "casa",
            name: "Casa",
            icon: "🏠",
            description: "Descubra palavras usadas no ambiente doméstico.",
            color: "purple",
            lessons: [
                {
                    title: "Objetos da casa",
                    description: "Aprenda o nome de objetos comuns.",
                    words: [
                        ["Mesa", "Móvel usado para apoiar objetos ou alimentos."],
                        ["Cadeira", "Móvel utilizado para sentar."],
                        ["Cama", "Móvel usado principalmente para dormir."],
                        ["Porta", "Estrutura que permite abrir ou fechar uma entrada."],
                        ["Janela", "Abertura que permite entrada de luz e ventilação."],
                        ["Armário", "Móvel usado para guardar objetos ou roupas."]
                    ]
                }
            ]
        },

        {
            id: "roupas",
            name: "Roupas",
            icon: "👕",
            description: "Aprenda palavras relacionadas às roupas.",
            color: "pink",
            lessons: [
                {
                    title: "Peças de roupa",
                    description: "Conheça diferentes peças de roupa.",
                    words: [
                        ["Camisa", "Peça de roupa usada na parte superior do corpo."],
                        ["Calça", "Peça de roupa que cobre as pernas."],
                        ["Vestido", "Peça de roupa geralmente usada por mulheres e meninas."],
                        ["Casaco", "Peça usada para proteger o corpo do frio."],
                        ["Sapato", "Calçado usado para proteger os pés."],
                        ["Boné", "Peça usada na cabeça, geralmente com uma aba."]
                    ]
                }
            ]
        },

        {
            id: "alimentacao",
            name: "Alimentação",
            icon: "🍎",
            description: "Aprenda palavras relacionadas aos alimentos.",
            color: "green",
            lessons: [
                {
                    title: "Alimentos",
                    description: "Conheça alimentos presentes no dia a dia.",
                    words: [
                        ["Arroz", "Cereal muito utilizado como alimento."],
                        ["Pão", "Alimento preparado normalmente com farinha e água."],
                        ["Leite", "Líquido nutritivo produzido por mamíferos."],
                        ["Fruta", "Parte comestível de muitas plantas que contém sementes."],
                        ["Carne", "Parte comestível de animais usada como alimento."],
                        ["Água", "Substância essencial à vida."]
                    ]
                }
            ]
        },

        {
            id: "animais",
            name: "Animais",
            icon: "🦁",
            description: "Conheça nomes e características de animais.",
            color: "orange",
            lessons: [
                {
                    title: "Animais comuns",
                    description: "Aprenda sobre alguns animais conhecidos.",
                    words: [
                        ["Leão", "Grande felino conhecido pela sua juba nos machos."],
                        ["Elefante", "Grande mamífero com uma longa tromba."],
                        ["Cão", "Animal doméstico conhecido também como cachorro."],
                        ["Gato", "Pequeno mamífero frequentemente criado como animal doméstico."],
                        ["Cavalo", "Mamífero utilizado historicamente para transporte e trabalho."],
                        ["Águia", "Ave de rapina conhecida pela sua visão e capacidade de voo."]
                    ]
                }
            ]
        },

        {
            id: "transportes",
            name: "Transportes",
            icon: "🚗",
            description: "Aprenda palavras relacionadas aos meios de transporte.",
            color: "cyan",
            lessons: [
                {
                    title: "Meios de transporte",
                    description: "Conheça diferentes formas de transporte.",
                    words: [
                        ["Carro", "Veículo usado principalmente para transportar pessoas."],
                        ["Autocarro", "Veículo coletivo utilizado para transportar passageiros."],
                        ["Comboio", "Meio de transporte que circula sobre carris."],
                        ["Avião", "Veículo capaz de voar e transportar pessoas ou cargas."],
                        ["Navio", "Embarcação de grande porte usada para transporte."],
                        ["Bicicleta", "Veículo de duas rodas movido pela força das pernas."]
                    ]
                }
            ]
        },

        {
            id: "profissoes",
            name: "Profissões",
            icon: "👨‍⚕️",
            description: "Conheça diferentes profissões.",
            color: "blue",
            lessons: [
                {
                    title: "Profissões",
                    description: "Aprenda o significado de diferentes profissões.",
                    words: [
                        ["Médico", "Profissional especializado na prevenção e tratamento de doenças."],
                        ["Professor", "Profissional que ensina e orienta estudantes."],
                        ["Engenheiro", "Profissional que aplica conhecimentos científicos e técnicos."],
                        ["Advogado", "Profissional que atua na área jurídica."],
                        ["Agricultor", "Pessoa que trabalha na produção agrícola."],
                        ["Jornalista", "Profissional que pesquisa e comunica informações ao público."]
                    ]
                }
            ]
        },

        {
            id: "emocoes",
            name: "Emoções",
            icon: "❤️",
            description: "Aprenda a reconhecer e compreender emoções.",
            color: "pink",
            lessons: [
                {
                    title: "Sentimentos",
                    description: "Conheça algumas emoções humanas.",
                    words: [
                        ["Alegria", "Sensação de felicidade ou satisfação."],
                        ["Tristeza", "Estado emocional associado a perda, sofrimento ou desânimo."],
                        ["Medo", "Emoção provocada pela percepção de perigo ou ameaça."],
                        ["Raiva", "Emoção associada à irritação ou indignação."],
                        ["Surpresa", "Reação diante de algo inesperado."],
                        ["Amor", "Sentimento de forte afeto, carinho ou ligação."]
                    ]
                }
            ]
        },

        {
            id: "geografia",
            name: "Geografia",
            icon: "🌍",
            description: "Explore lugares, continentes e conceitos geográficos.",
            color: "cyan",
            lessons: [
                {
                    title: "O nosso planeta",
                    description: "Aprenda conceitos básicos sobre a Terra.",
                    words: [
                        ["Terra", "Planeta onde vivemos."],
                        ["Continente", "Grande extensão de terra do planeta."],
                        ["Oceano", "Grande massa de água salgada."],
                        ["País", "Território com organização política própria."],
                        ["Cidade", "Área urbana onde vive uma população."],
                        ["Capital", "Cidade que funciona como centro político de um país ou região."]
                    ]
                }
            ]
        },

        {
            id: "desporto",
            name: "Desporto",
            icon: "⚽",
            description: "Aprenda palavras relacionadas ao mundo do desporto.",
            color: "green",
            lessons: [
                {
                    title: "Futebol",
                    description: "Conheça conceitos básicos do futebol.",
                    words: [
                        ["Gol", "Quando a bola ultrapassa completamente a linha de baliza."],
                        ["Goleiro", "Jogador responsável principalmente por defender a baliza."],
                        ["Defesa", "Ação ou jogadores responsáveis por impedir ataques adversários."],
                        ["Passe", "Ação de enviar a bola para um companheiro."],
                        ["Campo", "Local onde uma partida de futebol é disputada."],
                        ["Árbitro", "Pessoa responsável por aplicar as regras durante a partida."]
                    ]
                }
            ]
        },

        {
            id: "tecnologia",
            name: "Tecnologia",
            icon: "💻",
            description: "Descubra conceitos básicos de tecnologia.",
            color: "purple",
            lessons: [
                {
                    title: "Tecnologia básica",
                    description: "Conheça alguns conceitos importantes.",
                    words: [
                        ["Computador", "Máquina eletrónica capaz de processar informações."],
                        ["Internet", "Rede mundial que conecta computadores e dispositivos."],
                        ["Aplicação", "Programa desenvolvido para realizar determinadas funções."],
                        ["Site", "Conjunto de páginas acessíveis através da internet."],
                        ["Ficheiro", "Unidade de informação armazenada digitalmente."],
                        ["Senha", "Código utilizado para proteger o acesso a uma conta ou sistema."]
                    ]
                }
            ]
        },

        {
            id: "escola",
            name: "Escola",
            icon: "📚",
            description: "Aprenda conceitos relacionados ao ambiente escolar.",
            color: "orange",
            lessons: [
                {
                    title: "Na escola",
                    description: "Conheça palavras usadas no dia a dia escolar.",
                    words: [
                        ["Aluno", "Pessoa que frequenta uma instituição de ensino."],
                        ["Professor", "Pessoa responsável por ensinar."],
                        ["Livro", "Obra escrita ou impressa utilizada para leitura e estudo."],
                        ["Caderno", "Conjunto de folhas usado para escrever e estudar."],
                        ["Aula", "Período destinado ao ensino de determinado conteúdo."],
                        ["Biblioteca", "Local onde livros e outros materiais são organizados para consulta."]
                    ]
                }
            ]
        },

        {
            id: "natureza",
            name: "Natureza",
            icon: "🌿",
            description: "Conheça elementos do mundo natural.",
            color: "green",
            lessons: [
                {
                    title: "Elementos da natureza",
                    description: "Aprenda palavras relacionadas ao ambiente natural.",
                    words: [
                        ["Árvore", "Planta de grande porte com tronco e ramos."],
                        ["Rio", "Curso natural de água que se desloca para outro local."],
                        ["Montanha", "Grande elevação natural do terreno."],
                        ["Floresta", "Área coberta principalmente por árvores e vegetação."],
                        ["Chuva", "Água que cai da atmosfera em forma de gotas."],
                        ["Sol", "Estrela que fornece luz e energia à Terra."]
                    ]
                }
            ]
        },

        {
            id: "corpo",
            name: "Corpo humano",
            icon: "🧍",
            description: "Conheça partes e conceitos básicos do corpo humano.",
            color: "pink",
            lessons: [
                {
                    title: "Partes do corpo",
                    description: "Aprenda o nome de algumas partes do corpo.",
                    words: [
                        ["Cabeça", "Parte superior do corpo onde se encontram o cérebro, olhos, nariz e boca."],
                        ["Olho", "Órgão responsável pela visão."],
                        ["Ouvido", "Órgão relacionado principalmente à audição."],
                        ["Mão", "Parte do corpo localizada na extremidade do braço."],
                        ["Perna", "Parte do corpo utilizada principalmente para sustentação e movimento."],
                        ["Coração", "Órgão muscular que bombeia o sangue pelo corpo."]
                    ]
                }
            ]
        },

        {
            id: "musica",
            name: "Música",
            icon: "🎵",
            description: "Conheça conceitos básicos do universo musical.",
            color: "purple",
            lessons: [
                {
                    title: "Conceitos musicais",
                    description: "Aprenda algumas palavras importantes da música.",
                    words: [
                        ["Música", "Arte de organizar sons de forma expressiva."],
                        ["Ritmo", "Organização dos sons e silêncios ao longo do tempo."],
                        ["Melodia", "Sequência organizada de notas musicais."],
                        ["Instrumento", "Objeto utilizado para produzir sons musicais."],
                        ["Cantor", "Pessoa que utiliza a voz para interpretar músicas."],
                        ["Banda", "Grupo de músicos que toca em conjunto."]
                    ]
                }
            ]
        },

        {
            id: "cidade",
            name: "Cidade",
            icon: "🏙️",
            description: "Aprenda palavras relacionadas à vida urbana.",
            color: "cyan",
            lessons: [
                {
                    title: "Na cidade",
                    description: "Conheça locais e elementos encontrados nas cidades.",
                    words: [
                        ["Rua", "Via utilizada para circulação de pessoas e veículos."],
                        ["Hospital", "Local destinado ao atendimento e tratamento de pessoas."],
                        ["Escola", "Instituição destinada à educação."],
                        ["Mercado", "Local onde são vendidos produtos e alimentos."],
                        ["Praça", "Espaço público geralmente aberto e destinado à convivência."],
                        ["Banco", "Instituição que presta serviços financeiros."]
                    ]
                }
            ]
        },

        {
            id: "viagens",
            name: "Viagens",
            icon: "✈️",
            description: "Aprenda palavras importantes para viajar.",
            color: "blue",
            lessons: [
                {
                    title: "Durante uma viagem",
                    description: "Conheça palavras úteis para viagens.",
                    words: [
                        ["Passaporte", "Documento utilizado para identificação e viagens internacionais."],
                        ["Aeroporto", "Local onde aviões chegam, partem e são operados."],
                        ["Hotel", "Estabelecimento onde viajantes podem ficar hospedados."],
                        ["Bilhete", "Documento ou comprovativo que permite utilizar determinado serviço de transporte."],
                        ["Bagagem", "Conjunto de objetos transportados por um viajante."],
                        ["Destino", "Lugar para onde uma pessoa está viajando."]
                    ]
                }
            ]
        }
    ];


    /* =====================================================
       ESTADO DA APLICAÇÃO
       ===================================================== */

    let currentCategory = null;
    let currentLesson = null;
    let currentWordIndex = 0;

    let progress = JSON.parse(
        localStorage.getItem("linkwords_progress") || "{}"
    );

    let completedLessons = JSON.parse(
        localStorage.getItem("linkwords_completed") || "[]"
    );


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const splash = document.getElementById("splash-screen");
    const app = document.getElementById("app");

    const screens = document.querySelectorAll(".screen");
    const navItems = document.querySelectorAll("[data-screen]");


    /* =====================================================
       SPLASH SCREEN
       ===================================================== */

    function startSplash() {

        if (!splash) return;

        document.body.classList.add("loading");

        setTimeout(() => {

            splash.classList.add("hidden");

            document.body.classList.remove("loading");

            setTimeout(() => {
                splash.style.display = "none";
            }, 700);

        }, 5000);
    }


    /* =====================================================
       NAVEGAÇÃO
       ===================================================== */

    function showScreen(screenId) {

        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        const target = document.getElementById(screenId);

        if (target) {
            target.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        navItems.forEach(item => {

            item.classList.remove("active");

            if (item.dataset.screen === screenId) {
                item.classList.add("active");
            }

        });

        updateGlobalProgress();
    }


    navItems.forEach(item => {

        item.addEventListener("click", event => {

            event.preventDefault();

            const screenId = item.dataset.screen;

            if (screenId) {
                showScreen(screenId);
          }

        });

    });


    /* =====================================================
       LOCAL STORAGE
       ===================================================== */

    function saveProgress() {

        localStorage.setItem(
            "linkwords_progress",
            JSON.stringify(progress)
        );

        localStorage.setItem(
            "linkwords_completed",
            JSON.stringify(completedLessons)
        );
    }


    function getLessonKey(categoryId, lessonIndex) {
        return `${categoryId}-${lessonIndex}`;
    }


    function isLessonCompleted(categoryId, lessonIndex) {

        const key = getLessonKey(categoryId, lessonIndex);

        return completedLessons.includes(key);
    }


    function markLessonCompleted(categoryId, lessonIndex) {

        const key = getLessonKey(categoryId, lessonIndex);

        if (!completedLessons.includes(key)) {
            completedLessons.push(key);
        }

        saveProgress();
    }


    /* =====================================================
       PROGRESSO
       ===================================================== */

    function calculateOverallProgress() {

        let total = 0;
        let completed = 0;

        categories.forEach(category => {

            category.lessons.forEach((lesson, index) => {

                total++;

                if (isLessonCompleted(category.id, index)) {
                    completed++;
                }

            });

        });

        return total === 0
            ? 0
            : Math.round((completed / total) * 100);
    }


    function updateGlobalProgress() {

        const value = calculateOverallProgress();

        document.querySelectorAll("[data-progress]").forEach(element => {
            element.textContent = `${value}%`;
        });

        document.querySelectorAll("[data-progress-bar]").forEach(bar => {
            bar.style.width = `${value}%`;
        });
    }


    /* =====================================================
       CATEGORIAS
       ===================================================== */

    function renderCategories() {

        const containers = document.querySelectorAll(
            "[data-categories-container]"
        );

        if (!containers.length) return;

        containers.forEach(container => {

            container.innerHTML = "";

            categories.forEach(category => {

                const completed = category.lessons.filter(
                    (_, index) =>
                        isLessonCompleted(category.id, index)
                ).length;

                const percentage = Math.round(
                    (completed / category.lessons.length) * 100
                );

                const card = document.createElement("article");

                card.className = `category-card ${category.color || ""}`;

                card.innerHTML = `
                    <button
                        class="category-card-button"
                        data-category="${category.id}"
                        aria-label="Abrir categoria ${category.name}"
                    >

                        <div class="category-icon">
                            ${category.icon}
                        </div>

                        <div class="category-card-content">

                            <h3>${category.name}</h3>

                            <p>${category.description}</p>

                            <div class="category-progress">
                                <div class="progress-track">
                                    <span style="width:${percentage}%"></span>
                                </div>

                                <small>${percentage}% concluído</small>
                            </div>

                        </div>

                        <span class="category-arrow">→</span>

                    </button>
                `;

                container.appendChild(card);
            });

        });

        document
            .querySelectorAll("[data-category]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const categoryId = button.dataset.category;

                    openCategory(categoryId);

                });

            });
    }


    /* =====================================================
       ABRIR CATEGORIA
       ===================================================== */

    function openCategory(categoryId) {

        currentCategory = categories.find(
            category => category.id === categoryId
        );

        if (!currentCategory) return;

        const title = document.querySelector(
            "[data-category-title]"
        );

        const description = document.querySelector(
            "[data-category-description]"
        );

        if (title) {
            title.textContent = currentCategory.name;
        }

        if (description) {
            description.textContent =
                currentCategory.description;
        }

        renderLessons();

        showScreen("levels");
    }


    /* =====================================================
       LIÇÕES
       ===================================================== */

    function renderLessons() {

        const container = document.querySelector(
            "[data-lessons-container]"
        );

        if (!container || !currentCategory) return;

        container.innerHTML = "";

        currentCategory.lessons.forEach((lesson, index) => {

            const completed = isLessonCompleted(
                currentCategory.id,
                index
            );

            const card = document.createElement("article");

            card.className =
                `lesson-card ${completed ? "completed" : ""}`;

            card.innerHTML = `

                <button
                    class="lesson-card-button"
                    data-lesson="${index}"
                >

                    <div class="lesson-number">
                        ${completed ? "✓" : String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="lesson-info">

                        <span class="lesson-label">
                            ${completed ? "Concluída" : "Lição"}
                        </span>

                        <h3>${lesson.title}</h3>

                        <p>${lesson.description}</p>

                        <span class="lesson-count">
                            ${lesson.words.length} conceitos
                        </span>

                    </div>

                    <span class="lesson-arrow">→</span>

                </button>

            `;

            container.appendChild(card);
        });


        container
            .querySelectorAll("[data-lesson]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const index =
                        Number(button.dataset.lesson);

                    openLesson(index);

                });

            });
    }


    /* =====================================================
       ABRIR LIÇÃO
       ===================================================== */

    function openLesson(index) {

        if (!currentCategory) return;

        currentLesson =
            currentCategory.lessons[index];

        if (!currentLesson) return;

        currentWordIndex = 0;

        const title = document.querySelector(
            "[data-lesson-title]"
        );

        const description = document.querySelector(
            "[data-lesson-description]"
        );

        if (title) {
            title.textContent =
                currentLesson.title;
        }

        if (description) {
            description.textContent =
                currentLesson.description;
        }

        renderLearningContent();

        showScreen("game");
    }


    /* =====================================================
       CONTEÚDO DE APRENDIZAGEM
       ===================================================== */

    function renderLearningContent() {

        if (!currentLesson) return;

        const word = currentLesson.words[currentWordIndex];

        if (!word) return;

        const wordElement = document.querySelector(
            "[data-word]"
        );

        const definitionElement = document.querySelector(
            "[data-definition]"
        );

        const currentElement = document.querySelector(
            "[data-current-word]"
        );

        const totalElement = document.querySelector(
            "[data-total-words]"
        );

        const progressBar = document.querySelector(
            "[data-lesson-progress]"
        );

        if (wordElement) {
            wordElement.textContent = word[0];
        }

        if (definitionElement) {
            definitionElement.textContent = word[1];
        }

        if (currentElement) {
            currentElement.textContent =
                currentWordIndex + 1;
        }

        if (totalElement) {
            totalElement.textContent =
                currentLesson.words.length;
        }

        if (progressBar) {

            const percentage =
                ((currentWordIndex + 1) /
                currentLesson.words.length) * 100;

            progressBar.style.width =
                `${percentage}%`;
        }

        updateLearningButtons();
    }


    /* =====================================================
       BOTÕES DA LIÇÃO
       ===================================================== */

    function updateLearningButtons() {

        const previous =
            document.querySelector("[data-previous]");

        const next =
            document.querySelector("[data-next]");

        if (previous) {
            previous.disabled =
                currentWordIndex === 0;
        }

        if (next) {

            next.textContent =
                currentWordIndex ===
                currentLesson.words.length - 1
                    ? "Concluir aprendizagem"
                    : "Próximo";
        }
    }


    const nextButton =
        document.querySelector("[data-next]");

    const previousButton =
        document.querySelector("[data-previous]");


    if (nextButton) {

        nextButton.addEventListener("click", () => {

            if (!currentLesson) return;

            if (
                currentWordIndex <
                currentLesson.words.length - 1
            ) {

                currentWordIndex++;

                renderLearningContent();

                return;
            }

            completeCurrentLesson();
        });
    }


    if (previousButton) {

        previousButton.addEventListener("click", () => {

            if (currentWordIndex > 0) {

                currentWordIndex--;

                renderLearningContent();
            }
        });
    }


    /* =====================================================
       CONCLUIR LIÇÃO
       ===================================================== */

    function completeCurrentLesson() {

        if (!currentCategory || !currentLesson) {
            return;
        }

        const lessonIndex =
            currentCategory.lessons.indexOf(currentLesson);

        markLessonCompleted(
            currentCategory.id,
            lessonIndex
        );

        renderResult();

        renderCategories();

        showScreen("result");
    }


    /* =====================================================
       RESULTADO / CONCLUSÃO
       ===================================================== */

    function renderResult() {

        const title =
            document.querySelector("[data-result-title]");

        const message =
            document.querySelector("[data-result-message]");

        const category =
            document.querySelector("[data-result-category]");

        if (title) {
            title.textContent = "Aprendizagem concluída!";
        }

        if (message) {

            message.textContent =
                `Você terminou a lição "${currentLesson.title}".`;
        }

        if (category) {
            category.textContent =
                currentCategory.name;
        }
    }


    /* =====================================================
       BOTÃO CONTINUAR
       ===================================================== */

    document
        .querySelectorAll("[data-continue]")
        .forEach(button => {

            button.addEventListener("click", () => {

                if (currentCategory) {
                    renderLessons();
                    showScreen("levels");
                } else {
                    showScreen("home");
                }

            });

        });


    /* =====================================================
       BOTÃO VOLTAR
       ===================================================== */

    document
        .querySelectorAll("[data-back]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const destination =
                    button.dataset.back;

                if (destination) {
                    showScreen(destination);
                }
            });

        });


    /* =====================================================
       PESQUISA
       ===================================================== */

    const searchInputs =
        document.querySelectorAll("[data-search]");

    searchInputs.forEach(input => {

        input.addEventListener("input", () => {

            const query =
                input.value.toLowerCase().trim();

            const container =
                document.querySelector(
                    "[data-search-results]"
                );

            if (!container) return;

            if (!query) {

                container.innerHTML = "";

                return;
            }

            const results = [];

            categories.forEach(category => {

                category.lessons.forEach(
                    (lesson, lessonIndex) => {

                        lesson.words.forEach(
                            word => {

                                if (
                                    word[0]
                                        .toLowerCase()
                                        .includes(query) ||
                                    word[1]
                                        .toLowerCase()
                                        .includes(query)
                                ) {

                                    results.push({
                                        category,
                                        lesson,
                                        lessonIndex,
                                        word
                                    });

                                }

                            }
                        );

                    }
                );

            });

            renderSearchResults(results, container);
        });

    });


    function renderSearchResults(results, container) {

        if (!results.length) {

            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🔎</div>
                    <h3>Nenhum resultado encontrado</h3>
                    <p>Tente pesquisar outra palavra.</p>
                </div>
            `;

            return;
        }

        container.innerHTML = results
            .slice(0, 20)
            .map(result => `

                <article class="search-result">

                    <div class="search-result-icon">
                        ${result.category.icon}
                    </div>

                    <div>

                        <strong>
                            ${result.word[0]}
                        </strong>

                        <p>
                            ${result.word[1]}
                        </p>

                        <small>
                            ${result.category.name}
                        </small>

                    </div>

                </article>

            `)
            .join("");
    }


    /* =====================================================
       PÁGINA INICIAL
       ===================================================== */

    function setupHome() {

        const continueButton =
            document.querySelector("[data-continue-learning]");

        if (!continueButton) return;

        continueButton.addEventListener("click", () => {

            const next = findNextLesson();

            if (!next) {

                showScreen("categories");

                return;
            }

            currentCategory = next.category;

            openLesson(next.lessonIndex);
        });
    }


    function findNextLesson() {

        for (const category of categories) {

            for (
                let index = 0;
                index < category.lessons.length;
                index++
            ) {

                if (
                    !isLessonCompleted(
                        category.id,
                        index
                    )
                ) {

                    return {
                        category,
                        lessonIndex: index
                    };

                }
            }
        }

        return null;
    }


    /* =====================================================
       PERFIL / PROGRESSO
       ===================================================== */

    function updateProfile() {

        const percentage =
            calculateOverallProgress();

        document
            .querySelectorAll("[data-profile-progress]")
            .forEach(element => {

                element.textContent =
                    `${percentage}%`;

            });

        document
            .querySelectorAll("[data-profile-progress-bar]")
            .forEach(element => {

                element.style.width =
                    `${percentage}%`;

            });


        const completedCount =
            completedLessons.length;

        document
            .querySelectorAll("[data-completed-count]")
            .forEach(element => {

                element.textContent =
                    completedCount;

            });
    }


    /* =====================================================
       BOTÕES GENÉRICOS DE CATEGORIAS
       ===================================================== */

    document
        .querySelectorAll("[data-open-categories]")
        .forEach(button => {

            button.addEventListener("click", () => {
                showScreen("categories");
            });

        });


    /* =====================================================
       TECLADO
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (!currentLesson) return;

        const activeScreen =
            document.querySelector(".screen.active");

        if (!activeScreen) return;

        if (activeScreen.id !== "game") return;

        if (event.key === "ArrowRight") {

            if (
                currentWordIndex <
                currentLesson.words.length - 1
            ) {

                currentWordIndex++;

                renderLearningContent();

            }

        }

        if (event.key === "ArrowLeft") {

            if (currentWordIndex > 0) {

                currentWordIndex--;

                renderLearningContent();

            }

        }

    });


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    renderCategories();

    updateGlobalProgress();

    updateProfile();

    setupHome();

    startSplash();

});
