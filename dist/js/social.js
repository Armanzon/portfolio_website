const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const linkedin = document.getElementById('linkedin');

twitter.addEventListener('click', e => {
  window.location = 'https://twitter.com/ArmanKulenovic';
});

facebook.addEventListener('click', e => {
  window.location = 'https://www.facebook.com/arman.kulenovic';
});

instagram.addEventListener('click', e => {
  window.location = 'https://www.instagram.com/armankulenovic/';
});

linkedin.addEventListener('click', e => {
  window.location = 'https://www.linkedin.com/in/arman-kulenovic-28428a192/';
});
