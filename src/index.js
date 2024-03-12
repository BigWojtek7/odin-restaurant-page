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


homeButton.addEventListener("click", () => {
  content.innerHTML="";
  createHomeHtml();
})

menuButton.addEventListener("click", () => {
  content.innerHTML="";
  createMenuHtml();
})

aboutButton.addEventListener("click", () => {
  content.innerHTML="";
  createAboutHtml();
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


