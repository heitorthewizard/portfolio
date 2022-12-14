// variables that cannot be rewritten when main function is
// called again when switching languages
const app = document.querySelector("#app");
const englishPage = app.innerHTML;
let language = "en";
let isFullScreen = false;

async function main() {
  // nav menu
  const navMenu = document.querySelector(".show_menus_button");
  const menuButtons = document.querySelector(".menu_buttons");

  // show menu buttons when clicked
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("none");
  });

  // full screen mode
  const toggleFullScreenButtonImage = document.querySelector(
    "#toggleFullScreen > img"
  );

  // check if page is Fullscreen
  function checkIfFullscreen() {
    // English Page
    if (isFullScreen === true && language == "en") {
      isFullScreen = false;

      toggleFullScreenButtonImage.setAttribute(
        "src",
        "./assets/images/exit-fullscreen.svg"
      );
    } else if (isFullScreen === false && language == "en") {
      isFullScreen = true;

      toggleFullScreenButtonImage.setAttribute(
        "src",
        "./assets/images/fullscreen.svg"
      );
    }

    // Portuguese Page has to be the reversed
    if (isFullScreen === true && language == "pt") {
      isFullScreen = false;

      toggleFullScreenButtonImage.setAttribute(
        "src",
        "./assets/images/fullscreen.svg"
      );
    } else if (isFullScreen === false && language == "pt") {
      isFullScreen = true;

      toggleFullScreenButtonImage.setAttribute(
        "src",
        "./assets/images/exit-fullscreen.svg"
      );
    }
  }

  checkIfFullscreen();

  const toggleFullScreenButton = document.querySelector("#toggleFullScreen");

  toggleFullScreenButton.addEventListener("click", () => {
    let requestFullScreen =
      document.documentElement.requestFullscreen ||
      document.documentElement.mozRequestFullScreen ||
      document.documentElement.webkitRequestFullScreen ||
      document.documentElement.msRequestFullscreen;
    let cancelFullScreen =
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      requestFullScreen.call(document.documentElement);
    } else {
      cancelFullScreen.call(document);
    }

    checkIfFullscreen();
  });

  // page scroll progress bar
  const pageProgressBar = document.querySelector("#page_progress_bar");

  app.addEventListener("scroll", () => {
    const scrolledPercentage =
      (app.scrollTop / (app.scrollHeight - app.clientHeight)) * 100;

    pageProgressBar.style.width = `${scrolledPercentage}%`;
  });

  // skills data to be render on the web page
  const skills = [
    {
      name: "HTML",
      percentage: "70%",
      image: "html5.svg",
    },
    {
      name: "CSS",
      percentage: "60%",
      image: "css3.svg",
    },
    {
      name: "JavaScript",
      percentage: "85%",
      image: "javascript.svg",
    },
    {
      name: "Node JS",
      percentage: "70%",
      image: "nodejs.svg",
    },
    {
      name: "React JS",
      percentage: "20%",
      image: "react.svg",
    },
    {
      name: "Python",
      percentage: "80%",
      image: "python.svg",
    },
    {
      name: "MySQL",
      percentage: "20%",
      image: "mysql.svg",
    },
    {
      name: "MongoDB",
      percentage: "20%",
      image: "mongodb.svg",
    },
  ];

  skills.forEach((el) => {
    const skillElements = document.querySelector(".skills_container");

    skillElements.innerHTML += `
      <div class="skill_data">
        <div class="data_container">
            <img src="./assets/images/${el.image}" alt="${el.name} logo">
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
      name:'Scientific Computing With Python',
      organization: 'FreeCodeCamp',
      hours: '300h',
      image: 'scientific-computing-with-python.png',
      url: 'https://www.freecodecamp.org/certification/heitorthewizard/scientific-computing-with-python-v7',
      code: null
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      organization: "FreeCodeCamp",
      hours: "300h",
      image: "javascript.png",
      url: "https://freecodecamp.org/certification/heitorthewizard/javascript-algorithms-and-data-structures",
      code: null,
    },
    {
      name: "Conectar - Basic Concepts of Programming",
      organization: "Rocketseat",
      hours: "2h23",
      image: "programming-fundamentals.png",
      url: "https://app.rocketseat.com.br/discover/certificates",
      code: "c35b5da5-ef24-4011-b9bd-cad9f7b9bab8",
    },
    {
      name: "Web Development - HTML, CSS and JavaScript",
      organization: "ProgramadorBr",
      hours: "26h",
      image: "html-css-js.png",
      url: "https://programadorbr.com/autenticidade",
      code: "DVWBHMB20HT21473",
    },
  ];

  const certificationsData = document.querySelector(
    ".certifications_container .data_container"
  );

  certifications.forEach((el) => {
    if (el.code === null) {
      if (language == "en") {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="./assets/certifications/${el.image}" />
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
            <img src="./assets/certifications/${el.image}" />
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
      if (language == "en") {
        certificationsData.innerHTML += `
        <div class="certificate">
          <a href="${el.url}" target="_blank">
            <img src="./assets/certifications/${el.image}" />
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
            <img src="./assets/certifications/${el.image}" />
          </a>
          <ul class="certification_data">
            <li><span>Curso</span>: ${el.name}</li>
            <li><span>Org</span>: ${el.organization}</li>
            <li><span>Horas</span>: ${el.hours}</li>
            <li><span>C??digo</span>: ${el.code}</li>
            <li>
              <span>Autenticidade</span>: Copie o c??digo acima e
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

  // works slide show
  const slideShowContainer = document.querySelector(".slideshow_container");
  const slideShowDotsContainer = document.querySelector(".dots_container");

  const slidesData = [
    {
      image: "xprime.png",
      caption: "Xprime-Life",
    },
    {
      image: "broadfarma.png",
      caption: "Broadfarma",
    },
    {
      image: "agroibi.png",
      caption: "Agroibi",
    },
  ];

  // display slides and dots
  slidesData.forEach((el, idx) => {
    const totalNumberOfItems = slidesData.length;
    const itemNumber = idx + 1;

    slideShowContainer.innerHTML += `
    <div class="my_slides">
      <div class="number_text">${itemNumber} / ${totalNumberOfItems}</div>
      <img src="./assets/projects/${el.image}" style="width: 100%" />
      <div class="text">${el.caption}</div>
    </div>
    `;
  });

  const dots = slidesData.length;

  for (let i = 0; i < dots; i++) {
    slideShowDotsContainer.innerHTML += `
    <span class="dot"></span>
    `;
  }

  const prevSlideButtons = document.querySelector(".prev");
  prevSlideButtons.addEventListener("click", () => {
    plusSlides(-1);
  });

  const nextSlideButton = document.querySelector(".next");
  nextSlideButton.addEventListener("click", () => {
    plusSlides(1);
  });

  const currentSlideButtons = document.querySelectorAll(".dot");
  currentSlideButtons.forEach((el, idx) => {
    const index = idx + 1;

    el.addEventListener("click", () => {
      currentSlide(index);
    });
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my_slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active2";
  }

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
  reposElement.innerHTML = "";

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

    if (language == "en") {
      this.textContent = "Show Less";
    } else {
      this.textContent = "Menos";
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

    if (language == "en") {
      this.textContent = "Show More";
    } else {
      this.textContent = "Mais";
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
        <button id="toggleFullScreen">
          <img alt="full screen icon">
        </button>

        <div class="logo">
          <img src="./assets/images/favicon.png" alt="logo" />
          HeitorTheWizard
        </div>

        <div class="menu_buttons none">
          <a href="#home">
            <img src="./assets/images/home.svg" alt="home icon" />
            <div>In??cio</div>
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
              Ol??, <br />
              Sou <span class="highlighted_name">Heitor</span> <br />
              Um Programador
            </h1>

            <div class="contact_button_container">
              <a href="mailto:heitorthewizard@gmail.com" target="_blank">
                <button id="contact_button">Contate-me</button>
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

            <h3>Quem ?? Heitor?</h3>

            <p>Um mago moderno lan??ando feiti??os com zeros e uns!</p>

            <p>
            Deixe-me contar um pouco sobre a hist??ria de como
            eu me apaixonei pelo <em>desenvolvimento de software</em>.
            <br />
              Em 2019 eu ainda estava no ensino m??dio e trabalhando como 
              <em>professor de Ingl??s</em> na mesma institui????o
              onde eu cursei a l??ngua. Eu tamb??m estava estudando
              <em>finan??as</em>, <em>gest??o de neg??cios</em> e
              <em>economia</em> por divers??o. Cheguei a brincar um pouco
              no <em>mercado de a????es</em> seguindo a metodologia 
              de <em>Warren Buffet</em>, estava come??ando a colocar
              dinheiro para trabalhar para mim.
            </p>

            <p>
              Eu tamb??m queria muito empreender em algo lucrativo e que 
              perdurasse por v??rios anos, por??m, n??o tinha
              ideia do que fazer, estava meio perdido. Em 2020, na mesma ??poca
              em que a pandemia come??ou, uma familiar me deu um notebook para que
              eu pudesse estudar com melhores condi????es.
            </p>

            <p>
              Ent??o, um dia eu
              estava olhando para o computador, imerso em meus pensamentos, at??
              que tive uma epifania de como o computador ?? surreal, uma
              m??quina da qual voc?? pode criar o que imaginar sendo o ??nico limite 
              o hardware, a possibilidade de <em>criar</em> novos mundos,
              <em>resolver problemas</em> com <em>automa????o</em> e 
              <em>inolet</em> me deixaram muito animado! Decidi naquele
              momento que daria uma chance e aprender
              <em>desenvolvimento de software</em> apenas por divers??o. Acabei
              me <em>apaixonando</em> e perdendo a no????o do tempo enquanto
              estudava.
            </p>

            <p>
              Como sempre fui considerado uma <em>pessoa criativa</em> e me
              considero um <em>artista</em>, achei que era a ??rea ideal para
              mim, uma mistura de humanas com exatas, 
              se encaixava perfeitamente nas minhas caracter??sticas e
              objetivos. Por exemplo, poder
              <em>trabalhar de qualquer lugar do mundo</em>, poder trabalhar
              enquanto estiver viajando, aproveitando a vida, e poder criar algo
              grandioso apenas com um computador e acesso ?? internet, como fizeram
              algumas pessoas que fundaram suas empresas de uma garagem e at?? mesmo
              do pr??prio quarto. Um universo de <em>infinitas possibilidades</em>.
            </p>

            <p>
              Eu sou <em>altamente focado</em>,
              <em>proativo</em>, <em>compreensivo</em>, <em>divertido</em>,
              <em>ambicioso</em> e <em>inteligente</em>. Sigo fortemente a
              <em>filosofia est??ica</em>, da qual me ajuda a lidar com a vida de
              uma forma mais leve e equilibrada. 
              Coloco pensamento e a????o alinhados a um
              <em>bem comum</em>, que ?? a <em>virtude est??ica da Justi??a</em>. Eu
              me liberto das distra????es, me concentro apenas no que est?? sob meu
              controle e fa??o tudo como se fosse meu ??ltimo ato, entregando o meu
              melhor. Ao melhorar a mim mesmo, estou melhorando o mundo.
            </p>

            <h3>Por que Heitor The Wizard?</h3>

            <p>
              Acredito que os computadores s??o algo m??gico, um artefato que
              manipula energia como desejamos, permitindo-nos expressar nossa
              imagina????o, onde tudo ?? poss??vel. Eles nos permitem
              interagir com outras pessoas do outro lado do mundo em tempo
              real, registrar nossos melhores momentos com entes queridos e,
              ainda, lembrar a voz e a imagem daqueles que j?? amamos e que se
              foram. <em>Facilitam nossas vidas</em> no dia a dia, auxiliam pessoas 
              debilitadas. Eles nos ajudam
              a curar doen??as, a <em>resolver problemas</em> que leletiam
              anos e anos para serem resolvidos sem eles. ?? a <em>cria????o mais importante
              da humanidade</em>.
              ?? surreal como pegamos elementos da natureza e os
              transformamos nessa "caixinha" 100% l??gica.
              Portanto, acredito que as pessoas que manipulam esse artefato, est??o,
              na verdade, manipulando energia, criando novos universos, programas,
              aplicativos, jogos, etc. Incr??veis <em>obras de arte</em>. Essas pessoas
              para mim s??o como os <em>magos</em> fazendo m??gicas e feiti??os. 
              E eu sou uma delas!
            </p>
          </div>
        </section>

        <section>
          <div id="skills">
            <h2>Habilidades</h2>

            <div class="skills_container"></div>

            <div class="certifications_container">
              <h3>Certificados</h3>

              <div class="data_container"></div>
            </div>
          </div>
        </section>

        <section>
          <div id="work">
            <h2>Trabalho</h2>

            <div class="slide_and_dot_container">
              <div class="slideshow_container">
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>
              </div>

              <div class="dots_container"></div>
            </div>

            <p>
              Abaixo voc?? vai encontrar meus reposit??rios p??blicos do GitHub.
              Espero que goste!
            </p>

            <div class="data_container">
              <a href="https://github.com/heitorthewizard" target="_blank">
                <h3>Reposit??rios do GitHub</h3>
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

    // calling main() again to reset the page's events
    await main();
  }

  async function switchPageToEnglish() {
    // rebuilding the APP element to the previous state
    app.innerHTML = englishPage;

    await main();
  }
}

main();
