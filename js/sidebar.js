let button = document.querySelector(".header__controls > button");
let sidebar = document.querySelector("#sidebar");
let body = document.querySelector('body');
let sidebarItems = document.querySelectorAll('.sidebar__nav > ul li');

function openSidebar() {
  body.style.overflowY = 'hidden';
  sidebar.setAttribute("aria-expanded", "true");
  sidebarItems.forEach(el => el.style.animationName = "appearfromleft");
  
  button.setAttribute("data-state", "opened");
  button.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  body.style.overflowY = 'auto';
  sidebar.setAttribute("aria-expanded", "false");
  sidebarItems.forEach(el => el.style.animationName = "");
  button.setAttribute("data-state", "closed");
  button.setAttribute("aria-expanded", "false");
}

export {
  openSidebar,
  closeSidebar
}