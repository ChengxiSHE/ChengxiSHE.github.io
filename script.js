// All academic content is readable without JavaScript.
const filterBar = document.querySelector('.publication-tools');
const filterButtons = document.querySelectorAll('[data-filter]');
const papers = document.querySelectorAll('.publication');
filterBar.hidden = false;
for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const item of filterButtons) item.setAttribute('aria-pressed', String(item === button));
    let count = 0;
    for (const paper of papers) {
      paper.hidden = filter !== 'all' && paper.dataset.type !== filter;
      if (!paper.hidden) count++;
    }
    document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'work' : 'works'}`;
  });
}
