window.addEventListener('scroll', function () {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active-reveal');
    } else {
      reveals[i].classList.remove('active-reveal');
    }
  }

  const nav = document.querySelector('nav');
  // Get the offset position of the navbar
  const sticky = nav.offsetTop;
  if (this.window.pageYOffset > sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

const windowHeight = window.innerHeight;
const revealer = document.querySelectorAll('.reveal');

if (revealer[0]) {
  const revealTop = revealer[0].getBoundingClientRect().top;
  const revealPoint = 100;

  if (revealTop < windowHeight - revealPoint) {
    revealer[0].classList.add('active-reveal');
  } else {
    revealer[0].classList.remove('active-reveal');
  }
}
