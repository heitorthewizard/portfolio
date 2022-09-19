async function main() {
  const app = document.querySelector("#app");

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
      (app.scrollTop /
        (app.scrollHeight - app.clientHeight)) *
      100;
    
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
      percentage: "80%",
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
      name: 'JavaScript Algorithms and Data Structures',
      organization: 'FreeCodeCamp',
      image: './assets/certifications/javascript.png',
      url: 'https://freecodecamp.org/certification/heitorthewizard/javascript-algorithms-and-data-structures',
      code: null
    },
    {
      name: 'Conectar - Programming Fundamentals',
      organization: 'Rocketseat',
      image: './assets/certifications/programming-fundamentals.png',
      url: 'https://app.rocketseat.com.br/discover/certificates',
      code: 'c35b5da5-ef24-4011-b9bd-cad9f7b9bab8'
    },
    {
      name: 'Web Development',
      organization: 'ProgramadorBr',
      image: './assets/certifications/html-css-js.png',
      url: 'https://programadorbr.com/autenticidade',
      code: 'DVWBHMB20HT21473'
    }
  ]

  const certificationsData = document.querySelector('.certifications_container .data_container') 

  certifications.forEach((el, idx) => {
    if (el.code === null) {
      certificationsData.innerHTML += `
      <div class="certificate">
        <a href="${el.url}" target="_blank">
          <img src="${el.image}" />
        </a>
        <ul class="certification_data">
          <li><span>Course</span>: ${el.name}</li>
          <li><span>Org</span>: ${el.organization}</li>
          <li>
            <span>Authenticity</span>: Just
            <a href="${el.url}" target="_blank">
              click here
            </a>
          </li>
        </ul>
      </div>
      `
    } else {
      certificationsData.innerHTML += `
      <div class="certificate">
        <a href="${el.url}" target="_blank">
          <img src="${el.image}" />
        </a>
        <ul class="certification_data">
          <li><span>Course</span>: ${el.name}</li>
          <li><span>Org</span>: ${el.organization}</li>
          <li><span>Code</span>: ${el.code}</li>
          <li>
            <span>Authenticity</span>: copy the code above and
            <a href="${el.url}" target="_blank">
              click here
            </a>
          </li>
        </ul>
      </div>
      `
    }
  })

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
    this.textContent = "Show Less";

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
    this.textContent = "Show More";

    const allRepos = document.querySelectorAll(".repos > li");

    allRepos.forEach((el, idx) => {
      if (idx >= 6) {
        el.classList.add("none");
      }
    });
  }
}

main();
