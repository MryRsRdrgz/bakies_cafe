// let navLinks = document.getElementById("navLinks");
// function hideNav() {
//   navLinks.style.right = "-100%";
//   navLinks.style.display = "none";
// }

// function showNav() {
//   navLinks.style.right = "0";
//   navLinks.style.display = "block";
// }

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
 
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
