const anchor = document.getElementById('projects-anchor');
const projects = document.getElementsByClassName('project-content')[0];
const header = document.getElementById('header');
const bg = document.getElementById('bg');
const footer = document.getElementsByTagName('footer')[0];

const popProjects = () => {
  anchor.addEventListener("click", () => {
    projects.classList.remove('disactive');
    projects.classList.add('active');
    bg.classList.add('blured');
    header.classList.add('blured');
    footer.classList.add('blured');
  })
}

const removeActive = () => {
  bg.addEventListener("click", () => {
    projects.classList.remove('active');
    projects.classList.add('disactive');
    bg.classList.remove('blured');
    header.classList.remove('blured');
    footer.classList.remove('blured');
  })
}

popProjects();
removeActive();
