const lang = document.querySelectorAll('.content a');

const activeLang = (e) => {
  e.preventDefault();
  for (let i = 0; i < lang.length; i++) {
    lang[i].classList.remove("active");
  }

  e.target.classList.add('active');
}

lang[0].addEventListener('click', activeLang);
lang[1].addEventListener('click', activeLang);

