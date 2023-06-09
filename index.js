const $body = document.querySelector('.body');
const $form = document.querySelector('.form-section');
const $email = $form.elements.user_email;
const $small = $email.parentNode.querySelector('small');
const $hamburger = document.querySelector('#hamburger');
const $navbar = document.querySelector('.nav-links');
const $closeMenuButton = document.querySelector('.nav-links img');
const $linksMenu = document.querySelectorAll('.nav-links li a');
const $modal = document.querySelector('.modal');
const $modalTitle = document.querySelector('#modal-title');
const $pModal = document.querySelector('#p-modal');
const $imgModal = document.querySelector('#img-modal');
const $liModal = document.querySelectorAll('.li-modal');
const $openModal = document.querySelectorAll('.button-project');
const $closeModal = document.querySelector('.close-button');
const frstImagePath = '/resources/work-section/masks/Snapshoot PortfolioTonic-mask.png';
const scndImagePath = '/resources/work-section/masks/Snapshoot PortfolioMulti-Post-mask.png';
const thrdImagePath = '/resources/work-section/masks/Snapshoot PortfolioTonic2-mask.png';
const frthImagePath = '/resources/work-section/masks/Snapshoot PortfolioMulti-Post2-mask.png';
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
const failedMsg = "The email can't recive input in lower case";

function selectProject(buttonIndex) {
  const project = projectsInfo[buttonIndex];
  $pModal.textContent = project.description;
  $imgModal.setAttribute('src', project.image);
  $liModal.forEach((element, index) => {
    element.textContent = project.technologies[index];
  });
  $modalTitle.textContent = project.name;
}

function formValidate(event) {
  if ($email.value !== $email.value.toLowerCase()) {
    $small.innerHTML = failedMsg;
    event.preventDefault();
  } else { $small.style.visibility = 'hidden'; }
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

function popupScrollLock() {
  $body.classList.toggle('popup-open');
}

$openModal.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    selectProject(index);
    popupScrollLock();
    $modal.showModal();
  });
});

$hamburger.addEventListener('click', () => {
  displayMenu();
});

$closeMenuButton.addEventListener('click', () => {
  closeMenuHandler();
});

$form.addEventListener('submit', formValidate);

window.addEventListener('scroll', () => {
  handleScroll();
});

$linksMenu.forEach((e) => {
  e.addEventListener('click', () => {
    closeMenuHandler();
  });
});

$closeModal.addEventListener('click', () => {
  popupScrollLock();
  $modal.close();
});