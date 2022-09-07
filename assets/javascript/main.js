async function main() {
  // nav menu
  const navMenu = document.querySelector(".show-menus-button");
  const menuButtons = document.querySelector(".menu-buttons");

  // show menu buttons when clicked
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("none");
  });

  // data to be render on the web page
  const skills = [
    {
      name: "HTML",
      percentage: "77%",
      imgPath: "./assets/images/html5.svg",
    },
    {
      name: "CSS",
      percentage: "68%",
      imgPath: "./assets/images/css3.svg",
    },
    {
      name: "JavaScript",
      percentage: "84%",
      imgPath: "./assets/images/javascript.svg",
    },
    {
      name: "Node JS",
      percentage: "72%",
      imgPath: "./assets/images/nodejs.svg",
    },
    {
      name: "React JS",
      percentage: "22%",
      imgPath: "./assets/images/react.svg",
    },
    {
      name: "Python",
      percentage: "73%",
      imgPath: "./assets/images/python.svg",
    },
    {
      name: "MySQL",
      percentage: "18%",
      imgPath: "./assets/images/mysql.svg",
    },
  ];

  skills.forEach((el) => {
    const skillElements = document.querySelector("#skills");

    skillElements.innerHTML += `
      <div class="skill-data">
        <div class="data-container">
            <img src="${el.imgPath}" alt="${el.name} logo">
              <span>${el.name}</span>
              <span class="percentage">${el.percentage}</span>
        </div>
        <div class="progress-bar"></div>
      </div>
    `;
  });

  // set skills progress bar percentages 
  const skillsData = document.querySelectorAll(".skill-data");

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

  repos.forEach((obj) => {
    reposElement.innerHTML += `<li><a href="${obj.url}" target="_blank">${obj.name}</a><li>`;
  });
}

main();
