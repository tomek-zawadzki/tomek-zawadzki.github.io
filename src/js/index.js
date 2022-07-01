import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

fetch("https://api.github.com/users/tomek-zawadzki/repos?sort=created&direction=asc")
 .then(resp => resp.json())
 .then(resp => {
for (let repo of resp) {
    const {name, description, html_url, url} = repo;
    const reposData = document.querySelector('.window--js');
    const myTemplate =  `<div class="window window--js">
    <div class="window__dots">
    <img class="window__dots--element" src="/src/assets/img/circles_top.svg">
    </div>
    <img class="window__img" alt="Github logo" src="/src/assets/img/Vector.png">
    <ul class="window__list">
      <li class="window__list--element">project:${name}</li>
      <li class="window__list--element">description:${description}</li>
      <li class="window__list--element">demo:${url}</li>
      <li class="window__list--element">github:${html_url}</li>
    </ul>`;
    reposData.innerHTML += myTemplate;
}
})
.catch(error =>{
    console.log(error);
})