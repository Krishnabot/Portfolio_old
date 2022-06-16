const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.nav-bar');
const navLink = document.querySelector('.nav-link');
function myFunction() {
  const collection = document.querySelector('.nav-item').children;
  const l = collection.length;
  for (let i = 0; i <= l; i += 1) {
    hamburger.addEventListener('click', () => {
      navLink.classList.toggle('active');
    });
  }
}
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active');
    myFunction();
  });
}
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('active');
  navLink.classList.remove('active');
}));
/* ------------Section for Pop up--------------  */

document.querySelector('.submit').addEventListener('click', (event) => {
  const email = document.querySelector('.email');
  if (email.checkValidity(/[A-Z]/.test(email))) {
    event.preventDefault();
    email.setCustomValidity('Email must be lowercase. Please Try agin');
  }
});
