const $hamburger = document.querySelector('#hamburger');
const $navbar = document.querySelector('.nav-links');
const $closeMenuButton = document.querySelector('.nav-links img');
const $linksMenu = document.querySelectorAll('.nav-links li a');
let scrollEnabled = true;

function handleScroll() {
  if (!scrollEnabled) {
    window.scrollTo(0, 0);
  }
}

function displayMenu() {
  scrollEnabled = false;
  $navbar.style.display = 'flex';
}

function closeMenuHandler() {
  scrollEnabled = true;
  $navbar.style.display = 'none';
}

$hamburger.addEventListener('click', () => {
  displayMenu();
});

$closeMenuButton.addEventListener('click', () => {
  closeMenuHandler();
});

window.addEventListener('scroll', () => {
  handleScroll();
});

$linksMenu.forEach((e) => {
  e.addEventListener('click', () => {
    closeMenuHandler();
  });
});