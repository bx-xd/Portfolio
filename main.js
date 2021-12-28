const toggle = () => {
  const anchor = document.getElementById('projects-anchor');
  const projects = document.getElementsByClassName('project-content')[0];
  const main = document.getElementById('main');

  anchor.addEventListener("click", () => {
    projects.classList.toggle('active');
    main.classList.toggle('blured');
  })
}

toggle();
