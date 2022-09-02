// nav menu
const navMenu = document.querySelector(".show-menus-button");
const menuButtons = document.querySelector(".menu-buttons");

// show menu buttons when clicked
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuButtons.classList.toggle("none");
});

// set skills percentages
const skillsData = document.querySelectorAll(".skill-data");

skillsData.forEach((el) => {
  const percentage = el.children[0].children[2].textContent;
  const progressBar = el.children[1];
  progressBar.style.width = percentage;
});


// retrieve github repos from github
const reposElement = document.querySelector('.repos')
const repos = []

fetch('https://api.github.com/users/heitorthewizard/repos?page=1')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.text();
  })
  .then((text) => (reposElement.textContent = text))
  .catch(
    (error) => (reposElement.textContent = `Could not fetch verse: ${error}`)
  );
