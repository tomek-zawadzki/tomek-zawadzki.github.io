import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

fetch(
  "https://api.github.com/users/tomek-zawadzki/repos?sort=created&direction=asc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    const projectsSection = document.querySelector(".window__container");
    for (let repo of resp) {
      const { name, description, html_url, url } = repo;
      const myTemplate = `<div class="window window--js">
    <div class="window__dots">
    <img class="window__dots--element" src="/src/assets/img/circles_top.svg">
    </div>
    <img class="window__img" alt="Github logo" src="/src/assets/img/Vector.png">
    <ul class="window__list">
      <li class="window__list--element"><p class ="window__list--p" >project:</p> <span class="window__list--name">${name}</span></li>
      <li class="window__list--element window__list--element-specjal "><p class ="window__list--p">description:</p> <span class="window__list--description"> ${description} </span></li>
      <li class="window__list--element"><p class ="window__list--p">demo:</p> <a class="window__list--url" href="${url}"> &lt;see here&gt;</a> </li>
      <li class="window__list--element"><p class ="window__list--p">github:</p> <a class="window__list--url" href="${html_url}">&lt;source code&gt;</a></li>
    </ul>`;

      //   reposData.innerHTML += myTemplate;
      projectsSection.insertAdjacentHTML("beforeend", myTemplate);
    }
  })
  .catch((error) => {
    console.log(error);
  });
