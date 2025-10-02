import { navigation } from "./navigation";
document.querySelector("#nav__list").innerHTML = navigation;
document.querySelector("#sidenav__list").innerHTML = navigation;

document.addEventListener('scroll', e => {
  if(document.documentElement.scrollTop >= window.innerHeight) {
    document.querySelector('header').classList.add("fixed");
  } else {
    document.querySelector('header').classList.remove("fixed");
  }
})

window.onload = () => {
  let saved_mode = localStorage.getItem('mode');
  if(saved_mode === 'light') {
    document.querySelector('html').setAttribute('data-theme', saved_mode);
    document.querySelectorAll("#theme-icon > i").forEach(icon => icon.className = 'fa-solid fa-moon')
  }
}