document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const dropdownToggles = document.querySelectorAll('.Navbar-item.dropdown > a');
  
    // Toggle mobile nav
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Toggle dropdowns
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.parentElement.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    });
  });
  