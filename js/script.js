document.addEventListener('DOMContentLoaded', () => {

  // --- Simple Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Optional: Unobserve after revealing to save resources
              // observer.unobserve(entry.target);
          } else {
              // Optional: Remove class if you want elements to hide again when scrolled out
              // entry.target.classList.remove('visible');
          }
      });
  }, {
      root: null, // viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport bottom
  });

  revealElements.forEach(el => {
      revealObserver.observe(el);
  });

  // --- Hamburger Menu Toggle ---
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburgerMenu && mobileNav) {
      hamburgerMenu.addEventListener('click', () => {
          hamburgerMenu.classList.toggle('active');
          mobileNav.classList.toggle('open');
          document.body.classList.toggle('mobile-menu-open'); // Optional: for body scroll lock
          const isExpanded = hamburgerMenu.classList.contains('active');
          hamburgerMenu.setAttribute('aria-expanded', isExpanded);
      });

      // Optional: Close mobile menu when a link is clicked
      // This is useful for single-page applications where clicking a link scrolls to a section.
      const mobileNavLinks = mobileNav.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (mobileNav.classList.contains('open')) {
                  hamburgerMenu.classList.remove('active');
                  mobileNav.classList.remove('open');
                  document.body.classList.remove('mobile-menu-open');
                  hamburgerMenu.setAttribute('aria-expanded', 'false');
              }
          });
      });
  }

  // --- Mouse Move Glow Effect ---
  const backgroundGlowElement = document.querySelector('.background-glow');
  if (backgroundGlowElement) {
    document.addEventListener('mousemove', (e) => {
        // Throttling/Debouncing is recommended for performance in a production environment
        const xPercentage = (e.clientX / window.innerWidth) * 100;
        const yPercentage = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--mouse-x', `${xPercentage}%`);
        document.documentElement.style.setProperty('--mouse-y', `${yPercentage}%`);
    });
  }

  // --- Potential Future Enhancements (Add later if needed) ---

  // 2. More Sophisticated Parallax (Requires careful calculations based on scroll)

}); // End DOMContentLoaded