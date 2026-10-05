const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  buttons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  projects.forEach(project => { project.hidden = category !== 'todos' && project.dataset.category !== category; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
