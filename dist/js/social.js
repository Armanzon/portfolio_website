const linkedin = document.getElementById('linkedin');
const logo = document.getElementById('logo');
const git = document.getElementById('github');

linkedin.addEventListener('click', e => {
  window.open('https://www.linkedin.com/in/arman-kulenovic-28428a192/');
});

git.addEventListener('click', e => {
  window.open('https://github.com/Armanzon');
});

logo.addEventListener('click', e => {
  window.location = 'index.html';
});
