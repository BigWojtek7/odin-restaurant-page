import './style.css';
import { createHomeHtml } from './home';
import { createMenuHtml } from './menu';
import { createAboutHtml } from './about';
console.log("Testing webpack")


const content = document.getElementById("content");

const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const homeButton = document.getElementById("home")

createHomeHtml();
const root = document.querySelector(":root");

homeButton.addEventListener("click", () => {
  content.innerHTML="";
  createHomeHtml();
  root.style.setProperty("--my-color", "green")

})

menuButton.addEventListener("click", () => {
  content.innerHTML="";
  createMenuHtml();
  root.style.setProperty("--my-color", "#3b82f6")
})

aboutButton.addEventListener("click", () => {
  content.innerHTML="";
  createAboutHtml();
  root.style.setProperty("--my-color", "#f97316")
})





// buttons.forEach(button => {
//   button.addEventListener("click", (e) =>{
//     e.preventDefault();
//     content.innerHTML = "";
//     console.log(button.id)
//     if (button.id = "menu") createMenuHtml();
//     if (button.id = "about") createAboutHtml();
//     if (button.id = "home") createHomeHtml();
//   });
  
// });


