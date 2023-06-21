const $hamburger = document.querySelector('#hamburger');
const $navbar = document.querySelector('.nav-links');
const $closeMenuButton = document.querySelector('.nav-links img');
const $linksMenu = document.querySelectorAll('.nav-links li a');
let scrollEnabled = true;
const projectsInfo = [{
  name: 'Tonic',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ['HTML', 'CSS', 'Javascript'],
  image: frstImagePath,
}, {
  name: 'Multi Post Stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ['HTML', 'CSS', 'Javascript'],
  image: scndImagePath,
}, {
  name: 'Tonic',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ['HTML', 'CSS', 'Javascript'],
  image: thrdImagePath,
}, {
  name: 'Multi-Post Stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ['HTML', 'CSS', 'Javascript'],
  image: frthImagePath,
}];

function selectProject(buttonIndex) {
  const project = projectsInfo[buttonIndex];
  $pModal.textContent = project.description;
  $imgModal.setAttribute('src', project.image);
  $liModal.forEach((element, index) => {
    element.textContent = project.technologies[index];
  });
  $modalTitle.textContent = project.name;
}

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