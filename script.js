const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const navLink = document.querySelector(".nav-link");
function myFunction() {
  const collection = document.querySelector(".nav-item").children;
  const l = collection.length;
  for (let i = 0; i <= l; i++) {
    hamburger.addEventListener("click", () => {
      navLink.classList.toggle("active");
      console.log("itworks");
    });
  }
}
if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    myFunction();
  });
}
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
    navLink.classList.remove("active");
  })
);