// JavaScript to toggle the navigation bar for small screens
function toggleNav() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('responsive');
  }
  
  const menuIcon = document.createElement('div');
  menuIcon.classList.add('menu-icon');
  menuIcon.addEventListener('click', toggleNav);
  
  const nav = document.querySelector('nav');
  nav.appendChild(menuIcon);
  