import { renderHomepage } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

renderHomepage();

function clearContent() {
  const content = document.querySelector("#content");
  content.textContent = "";
}

function makeTabsSwitchable() {
  const homepageTab = document.querySelector(".home-page-tab");
  homepageTab.addEventListener("click", () => {
    clearContent();
    renderHomepage();
    makeTabsSwitchable();
  })

  const menuTab = document.querySelector(".menu-tab");
  menuTab.addEventListener("click", () => {
   clearContent();
   renderMenu();
   makeTabsSwitchable();
  });

  const contactTab = document.querySelector(".contact-tab");
  contactTab.addEventListener("click", () => {
    clearContent();
    renderContact();
    makeTabsSwitchable();
  });
}

makeTabsSwitchable();
