const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const linkedin = document.getElementById('linkedin');
const logo = document.getElementById('logo');

twitter.addEventListener('click', e => {
  window.open('https://twitter.com/ArmanKulenovic');
});

facebook.addEventListener('click', e => {
  window.open('https://www.facebook.com/arman.kulenovic');
});

instagram.addEventListener('click', e => {
  window.open('https://www.instagram.com/armankulenovic/');
});

linkedin.addEventListener('click', e => {
  window.open('https://www.linkedin.com/in/arman-kulenovic-28428a192/');
});

logo.addEventListener('click', e => {
  window.location = 'index.html';
});
