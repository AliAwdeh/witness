import { openSidebar, closeSidebar } from './sidebar'

let button = document.querySelector(".header__controls > button");
let sidebar = document.querySelector("#sidebar");
let items = document.querySelectorAll('#sidenav__list ul li')

button.addEventListener("click", () => {
  const sidebarState = sidebar.getAttribute("aria-expanded");
  
  if(!sidebarState || sidebarState === "false") {
    openSidebar();
  } else {
    closeSidebar();
  }
});

items.forEach(e => {
  e.addEventListener('click', e => {
    closeSidebar()
  })
})