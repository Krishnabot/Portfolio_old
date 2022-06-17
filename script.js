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
/* ------------Pop up--------------  */
/* ------------Form Validation-----*/
const email = document.querySelector('.email');
const button = document.querySelector('.submit');
const errorMessege = document.querySelector('.error');

const validate = (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessege.innerHTML = 'Email must be lowercase. Please Try again';
    errorMessege.style.display = 'block';
    e.preventDefault();
  } else {
    errorMessege.style.display = 'none';
  }
};
button.addEventListener('click', validate);

/* ------------ save data in local storage---------*/

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const myformDataObj = Object.fromEntries(myFormData.entries());
  const myJSON = JSON.stringify(myformDataObj);
  localStorage.setItem('storedLocalData', myJSON);
  console.log(myJSON);
});
