document.addEventListener('DOMContentLoaded', () => {
  
  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    // Toggle mobile menu
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active'); 
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.Navbar-container')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });

  }

  // ===== DROPDOWN MENU (Mobile Only) =====
  if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.Navbar-item.dropdown > a');
    
    dropdowns.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const parent = link.parentElement;
        
        // Close other dropdowns
        document.querySelectorAll('.Navbar-item.dropdown').forEach(item => {
          if (item !== parent) {
            item.classList.remove('open');
          }
        });
        
        // Toggle current dropdown
        parent.classList.toggle('open');
      });
    });
    
    
  }

  // ===== SCROLL FADE-IN ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => fadeObserver.observe(el));

  // ===== CLOSE MENU ON ESC KEY =====
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (navLinks) navLinks.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
      
      document.querySelectorAll('.Navbar-item.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });

  // ===== WINDOW RESIZE HANDLER =====
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Reset menu states on resize
      document.querySelectorAll('.Navbar-item.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
      
      if (navLinks) navLinks.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
    }, 250);
  });
});