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
  
document.addEventListener('DOMContentLoaded', function() {
  // Only run on mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.Navbar-item.dropdown > a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle open class
        const parent = link.parentElement;
        parent.classList.toggle('open');
        // Close other dropdowns
        document.querySelectorAll('.Navbar-item.dropdown').forEach(function(item) {
          if (item !== parent) item.classList.remove('open');
        });
      });
    });
    // Close dropdown if clicking outside
    document.addEventListener('click', function(e) {
      document.querySelectorAll('.Navbar-item.dropdown').forEach(function(item) {
        if (!item.contains(e.target)) item.classList.remove('open');
      });
    });
  }
});
  