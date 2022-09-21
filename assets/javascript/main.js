// variables that cannot be rewritten when main function is
// called again Org the switching languages function
const app = document.querySelector("#app");
const englishPage = app.innerHTML;
let language = "en";

async function main() {
  // nav menu
  const navMenu = document.querySelector(".show_menus_button");
  const menuButtons = document.querySelector(".menu_buttons");

  // show menu buttons when clicked
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("none");
  });

  // page scroll progress bar
  const pageProgressBar = document.querySelector("#page_progress_bar");

  app.addEventListener("scroll", () => {
    const scrolledPercentage =
      (app.scrollTop / (app.scrollHeight - app.clientHeight)) * 100;

    pageProgressBar.style.width = `${scrolledPercentage}%`;
  });

  // data to be render on the web page
  const skills = [
    {
      name: "HTML",
      percentage: "70%",
      imgPath: "./assets/images/html5.svg",
    },
    {
      name: "CSS",
      percentage: "60%",
      imgPath: "./assets/images/css3.svg",
    },
    {
      name: "JavaScript",
      percentage: "85%",
      imgPath: "./assets/images/javascript.svg",
    },
    {
      name: "Node JS",
      percentage: "70%",
      imgPath: "./assets/images/nodejs.svg",
    },
    {
      name: "React JS",
      percentage: "20%",
      imgPath: "./assets/images/react.svg",
    },
    {
      name: "Python",
      percentage: "75%",
      imgPath: "./assets/images/python.svg",
    },
    {
      name: "MySQL",
      percentage: "20%",
      imgPath: "./assets/images/mysql.svg",
    },
    {
      name: "MongoDB",
      percentage: "20%",
      imgPath: "./assets/images/mongodb.svg",
    },
  ];

  skills.forEach((el) => {
    const skillElements = document.querySelector(".skills_container");

    skillElements.innerHTML += `
      <div class="skill_data">
        <div class="data_container">
            <img src="${el.imgPath}" alt="${el.name} logo">
              <span>${el.name}</span>
              <span class="percentage">${el.percentage}</span>
        </div>
        <div class="progress_bar"></div>
      </div>
    `;
  });

  // set skills progress bar percentages
  const skillsData = document.querySelectorAll(".skill_data");

  skillsData.forEach((el) => {
    const percentage = el.children[0].children[2].textContent;
    const progressBar = el.children[1];
    progressBar.style.width = percentage;
  });

  // displaying certifications
  const certifications = [
    {
      name: "JavaScript Algorithms and Data Structures",
      organization: "FreeCodeCamp",
      hours: "300h (approximately)",
      image: "./assets/certifications/javascript.png",
      url: "https://freecodecamp.org/certification/heitorthewizard/javascript-algorithms-and-data-structures",
      code: null,
    },
    {
      name: "Conectar - Basic Concepts of Programming",
      organization: "Rocketseat",
      hours: "2h23",
      image: "./assets/certifications/programming-fundamentals.png",
      url: "https://app.rocketseat.com.br/discover/certificates",
      code: "c35b5da5-ef24-4011-b9bd-cad9f7b9bab8",
    },
    {
      name: "Web Development - HTML, CSS and JavaScript",
      organization: "ProgramadorBr",
      hours: "26h",
      image: "./assets/certifications/html-css-js.png",
      url: "https://programadorbr.com/autenticidade",
      code: "DVWBHMB20HT21473",
    },
  ];

  const certificationsData = document.querySelector(
    ".certifications_container .data_container"
  );

  certifications.forEach((el) => {
    if (el.code === null) {

      if (language == 'en') {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="${el.image}" />
          </a>
          <ul class="certification_data">
            <li><span>Course</span>: ${el.name}</li>
            <li><span>Org</span>: ${el.organization}</li>
            <li><span>Hours</span>: ${el.hours}</li>
            <li>
              <span>Authenticity</span>: Just
              <a href="${el.url}" target="_blank">
                click here
              </a>
            </li>
          </ul>
        </div>
        `;
      } else {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="${el.image}" />
          </a>
          <ul class="certification_data">
            <li><span>Curso</span>: ${el.name}</li>
            <li><span>Org</span>: ${el.organization}</li>
            <li><span>Horas</span>: ${el.hours}</li>
            <li>
              <span>Autenticidade</span>: Apenas
              <a href="${el.url}" target="_blank">
                clique aqui
              </a>
            </li>
          </ul>
        </div>
        `;
      }
    } else {

      if (language == 'en') {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="${el.image}" />
          </a>
          <ul class="certification_data">
            <li><span>Course</span>: ${el.name}</li>
            <li><span>Org</span>: ${el.organization}</li>
            <li><span>Hours</span>: ${el.hours}</li>
            <li><span>Code</span>: ${el.code}</li>
            <li>
              <span>Authenticity</span>: Copy the code above and
              <a href="${el.url}" target="_blank">
                click here
              </a>
            </li>
          </ul>
        </div>
        `;
      } else {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="${el.image}" />
          </a>
          <ul class="certification_data">
            <li><span>Curso</span>: ${el.name}</li>
            <li><span>Org</span>: ${el.organization}</li>
            <li><span>Horas</span>: ${el.hours}</li>
            <li><span>Código</span>: ${el.code}</li>
            <li>
              <span>Autenticidade</span>: Copie o código acima e
              <a href="${el.url}" target="_blank">
                clique aqui
              </a>
            </li>
          </ul>
        </div>
        `;
      }
    }
  });

  // retrieve github repos from github API
  const reposElement = document.querySelector(".repos");
  const repos = [];

  await fetch("https://api.github.com/users/heitorthewizard/repos?page=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      data.forEach((obj) => {
        repos.push({ url: obj.svn_url, name: obj.name });
      });
    })
    .catch(
      (error) => (reposElement.textContent = `Could not fetch verse: ${error}`)
    );

  // cleaning up repos elements so when main() is called again won't there be
  // repeated elements
  reposElement.innerHTML = ''

  // displaying 6 elements
  repos.forEach((obj, idx) => {
    if (idx < 6) {
      reposElement.innerHTML += `
        <li>
          <a href="${obj.url}" target="_blank">${obj.name}</a>
        </li>
        `;
    } else {
      reposElement.innerHTML += `
        <li class="none">
          <a href="${obj.url}" target="_blank">${obj.name}</a>
        </li>
        `;
    }
  });

  // displaying all elements and toggling back to 6 when clicked
  const showAndHideReposButton = document.querySelector(
    "#show_and_hide_button"
  );
  showAndHideReposButton.addEventListener("click", showMoreRepos);

  function showMoreRepos() {
    this.removeEventListener("click", showMoreRepos);
    this.addEventListener("click", showLessRepos);

    if (language == 'en') {
      this.textContent = "Show Less";
    } else {
      this.textContent = "Menos"
    }

    const allRepos = document.querySelectorAll(".repos > li");

    allRepos.forEach((el) => {
      if (el.classList.contains("none")) {
        el.classList.toggle("none");
      }
    });
  }

  function showLessRepos() {
    this.removeEventListener("click", showLessRepos);
    this.addEventListener("click", showMoreRepos);
    
    if (language == 'en') {
      this.textContent = "Show More";
    } else {
      this.textContent = "Mais"
    }

    const allRepos = document.querySelectorAll(".repos > li");

    allRepos.forEach((el, idx) => {
      if (idx >= 6) {
        el.classList.add("none");
      }
    });
  }

  // switching website language
  const switchLanguageButton = document.querySelector("#lang_button");

  switchLanguageButton.addEventListener("click", switchWebSiteLanguage);

  function switchWebSiteLanguage() {
    if (language == "en") {
      language = "pt";
      switchPageToPortuguese();
    } else {
      language = "en";
      switchPageToEnglish();
    }
  }

  async function switchPageToPortuguese() {
    // rebuilding the APP element in portuguese.
    app.innerHTML = `
    <div id="page_progress_bar"></div>

      <a href="#home">
        <div id="top_button">
          <img src="./assets/images/arrow-small-up.svg" alt="arrow icon" />
        </div>
      </a>

      <button id="lang_button">EN</button>

      <nav class="menu">
        <div class="logo">
          <img src="./assets/images/favicon.png" alt="logo" />
          HeitorTheWizard
        </div>

        <div class="menu_buttons none">
          <a href="#home">
            <img src="./assets/images/home.svg" alt="home icon" />
            <div>Início</div>
          </a>

          <a href="#about">
            <img src="./assets/images/user.svg" alt="about icon" />
            <div>Sobre</div>
          </a>

          <a href="#skills">
            <img src="./assets/images/document.svg" alt="skills icon" />
            <div>Habilidades</div>
          </a>

          <a href="#work">
            <img src="./assets/images/briefcase.svg" alt="work icon" />
            <div>Trabalho</div>
          </a>

          <a href="mailto:heitorthewizard@gmail.com" target="_blank">
            <img src="./assets/images/envelope.svg" alt="contact icon" />
            <div>Contato</div>
          </a>
        </div>

        <div class="show_menus_button">
          <div class="button_line"></div>
          <div class="button_line"></div>
          <div class="button_line"></div>
        </div>
      </nav>

      <main>
        <header>
          <div id="home">
            <h1>
              Olá, <br />
              Sou <span class="highlighted_name">Heitor</span> <br />
              Um Programador
            </h1>

            <div class="contact_button_container">
              <a href="mailto:heitorthewizard@gmail.com" target="_blank">
                <button id="contact_button">Email</button>
              </a>
            </div>

            <div class="data_container">
              <div class="social_medias">
                <a
                  href="https://www.linkedin.com/in/heitorthewizard/"
                  target="_blank"
                >
                  <img src="./assets/images/linkedin.svg" alt="linkedin icon" />
                </a>

                <a href="https://github.com/heitorthewizard" target="_blank">
                  <img src="./assets/images/github.svg" alt="github icon" />
                </a>
              </div>

              <img
                id="profile_photo"
                src="./assets/images/heitor.jpg"
                alt="profile photo"
              />
            </div>
          </div>
        </header>

        <section>
          <div id="about">
            <h2>Sobre</h2>

            <h3>Quem é Heitor?</h3>

            <p>Um mago moderno lançando feitiços com zeros e uns!</p>

            <p>
            Deixe-me contar um pouco sobre a história de como
            eu me apaixonei pelo <em>desenvolvimento de software</em>.
            <br />
              Em 2019 eu ainda estava no ensino médio e trabalhando ao mesmo
              tempo que como <em>professor de Inglês</em> na mesma instituição
              onde eu estudei Inglês. Eu também estava estudando
              <em>finanças</em>, <em>gestão de negócios</em> e
              <em>economia</em> por se divertir. eu até cheguei a brincar um pouco
              no <em>mercado de ações</em> seguindo
              <em>Método de Warren Buffet</em>, eu queria começar a colocar
              dinheiro para trabalhar para mim.
            </p>

            <p>
              Eu queria muito
              empreender em algo sustentável que durasse vários anos, mas não tinha
              ideia do que fazer, estava meio perdido. Em 2020, na mesma época
              em que a pandemia começou, uma familiar me deu um notebook para que
              eu pudesse estudar com mais qualidade.
            </p>

            <p>
              Então um dia eu
              estava olhando para o computador imerso em meus pensamentos até
              que tive uma epifania de como o computador é incrível, uma
              máquina que você pode criar o que você imaginar e o único limite é
              o hardware, a possibilidade de criar novos mundos,
              <em>resolver problemas</em> e <em>inovar</em> me deixou muito
              animado! E decidi que iria aprender
              <em>desenvolvimento de software</em> apenas por diversão. Acabei
              me <em>apaixonando</em> e perdendo a noção do tempo enquanto
              <em>estudava</em>.
            </p>

            <p>
              Como sempre me considerei uma <em>pessoa criativa</em> e me
              considero uma <em>artista</em>, achei que era a área perfeita para
              mim, se encaixava perfeitamente nas minhas características e
              objetivos. Por exemplo, poder
              <em>trabalhar de qualquer lugar</em> do mundo, poder trabalhar
              viajando, poder criar algo grandioso apenas com um computador e
              acesso à internet, entre infinitas outras possibilidades.
            </p>

            <p>
              Sou <em>altamente focado</em>,
              <em>proativo</em>,<em>compreensivo</em>, <em>divertido</em>,
              <em>inteligente</em> e <em>ambicioso</em>. Eu sigo fortemente a
              <em>filosofia estóica</em> da qual me ajuda a lidar com a vida de
              uma forma mais leve. Coloco pensamento e ação alinhados a um
              <em>bem comum</em>, que é a <em>virtude estóica da Justiça</em>. Eu
              me liberto das distrações, me concentro apenas no que está sob meu
              controle e faço tudo como se fosse meu último ato. Ao melhorar a mim
              mesmo, melhoro o mundo.
            </p>

            <h3>Porque Heitor The Wizard?</h3>

            <p>
              Acredito que os computadores são algo mágico, um artefato que
              manipula energia como desejamos, permitindo-nos expressar nossa
              imaginação, onde tudo é possível. Uma caixa mágica na qual nos
              permite interagir com outras pessoas do outro lado do mundo em tempo
              real, registrar nossos melhores momentos com entes queridos e,
              ainda, lembrar a voz e a imagem daqueles que já amamos e que se
              foram. É surreal como pegamos elementos da natureza e os
              transformamos nessa "caixa" 100% lógica... <br />Portanto, acredito
              que as pessoas que criam esses universos, jogos, programas,
              aplicativos e todas essas obras de arte são
              <em>magos modernos</em>. E eu sou um deles! :)
            </p>

            <h3>Minha Missão</h3>

            <p>
              Eu <em>procuro</em> adquirir <em>experiência</em> aplicando
              desenvolvimento de software em tudo que eu estiver trabalhando,
              <em>trazendo inovação, automação, valor e solução de problemas</em>.
              Eu gostaria de entender como uma grande empresa funciona, como
              <em>trabalhar em equipe com pessoas capacitadas</em> que eu posso
              <em>aprender</em> e <em>evoluir</em> ao máximo,
              <em>melhorando minhas habilidades</em> em lidar com pessoas,
              <em
                >negociações, resolução de problemas e desenvolvimento de
                software</em
              >. Quero <em>deixar um legado de grande valor</em> onde quer que eu
              vá. Só assim poderei começar meu próprio negócio que até agora não
              faço ideia do que vai ser... :(
            </p>
          </div>
        </section>

        <section>
          <div id="skills">
            <h2>Habilidades</h2>

            <div class="skills_container"></div>
            <ul id="levels">
              <li>20% - Básico</li>
              <li>50% - Intermediário</li>
              <li>80% - Avançado</li>
            </ul>

            <div class="certifications_container">
              <h3>Certificados</h3>

              <div class="data_container"></div>
            </div>
          </div>
        </section>

        <section>
          <div id="work">
            <h2>Trabalho</h2>

            <img src="./assets/images/coding.jpg" alt="coding picture" />

            <p>
              Abaixo você vai encontrar meus repositórios públicos do GitHub.
              Espero que goste!
            </p>

            <div class="data_container">
              <a href="https://github.com/heitorthewizard" target="_blank">
                <h3>Repositórios do GitHub</h3>
              </a>
              <ul class="repos"></ul>
            </div>
            <button id="show_and_hide_button">Mais</button>
          </div>
        </section>
      </main>
      <footer>
        <div class="rights_reserved">
          Feito Por HeitorTheWizard
          <br />
          <br />
          &copy; HeitorTheWizard - All Rights Reserved
        </div>
      </footer>
    `;

    // calling main() again to reset the events of the page
    await main();
  }

  async function switchPageToEnglish() {
    // rebuilding the APP element to the previous state
    app.innerHTML = englishPage;

    await main();
  }
}

main();
