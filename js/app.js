import { inject } from '@vercel/analytics';
const links = document.querySelector(".nav-links");
const navBtnDOM = document.querySelector(".nav-btn");

 
inject();
navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// agregar fecha dinámica aquí
document.getElementById("date").innerHTML = new Date().getFullYear()
