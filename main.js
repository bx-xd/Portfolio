const anchor = document.getElementById('projects-anchor');
const projects = document.getElementsByClassName('project-content')[0];
const main = document.getElementById('main');
const bg = document.getElementById('bg');

const toggle = () => {
  anchor.addEventListener("click", () => {
    projects.classList.toggle('active');
    main.classList.toggle('blured');
  })
}

const removeActive = () => {
  bg.addEventListener("click", () => {
    projects.classList.remove('active')
  })
}

toggle();
removeActive();
