const linkedin = document.getElementById('linkedin');
const logo = document.getElementById('logo');

linkedin.addEventListener('click', e => {
  window.open('https://www.linkedin.com/in/arman-kulenovic-28428a192/');
});

logo.addEventListener('click', e => {
  window.location = 'index.html';
});
