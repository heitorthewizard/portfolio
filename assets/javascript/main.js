const body = document.body

// nav menu
const navMenu = document.querySelector(".show-menus-button");
const menuButtons = document.querySelector(".menu-buttons");

// show menu buttons when clicked
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuButtons.classList.toggle("none");
});

// set skills percentages
const skillsData = document.querySelectorAll('.skill-data')
skillsData.forEach(el => {
  const data = el.children[0].children[2].textContent
  console.log(el.children[1])
  el.children[1].style.width = data
})