async function main() {
  // nav menu
  const navMenu = document.querySelector(".show_menus_button");
  const menuButtons = document.querySelector(".menu_buttons");

  // show menu buttons when clicked
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("none");
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
