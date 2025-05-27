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

  // --- Potential Future Enhancements (Add later if needed) ---

  // 1. Mouse Move Glow Effect (Example - needs refinement & performance tuning)
  // const backgroundGlow = document.querySelector('.background-glow');
  // document.addEventListener('mousemove', (e) => {
  //     // Throttling/Debouncing recommended here for performance
  //     const x = e.clientX / window.innerWidth * 100;
  //     const y = e.clientY / window.innerHeight * 100;
  //     if (backgroundGlow) {
  //        // This way is simpler but less performant than updating CSS vars
  //        // backgroundGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 255, 0.08) 0%, rgba(0, 255, 255, 0) 60%)`;
  //
  //        // Better: Update CSS variables (define --mouse-x, --mouse-y in CSS)
  //        // document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  //        // document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  //     }
  // });


  // 2. More Sophisticated Parallax (Requires careful calculations based on scroll)

}); // End DOMContentLoaded