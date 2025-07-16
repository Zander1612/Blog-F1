// JavaScript para el menú de navegación
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.barra-nav ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
