let icons = document.querySelectorAll("#theme-icon i");
let htmlElement = document.querySelector('html');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    let state = htmlElement.getAttribute('data-theme');
  
    if(state === 'light') {
      icon.className = "fa-solid fa-sun";
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('mode', 'dark');
    } else {
      icon.className = "fa-solid fa-moon";
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('mode', 'light');
    }
  })  
})
