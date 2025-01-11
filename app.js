const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle menu for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});