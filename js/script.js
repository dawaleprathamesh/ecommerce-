document.addEventListener('DOMContentLoaded', () => {
  // Parallax effect on Hero Image
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
    });
  }

  // Wishlist Toggle Interaction
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');
      const svg = btn.querySelector('svg');

      // Simple pop animation
      btn.style.transform = 'scale(0.8)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        if (svg) {
          if (btn.classList.contains('active')) {
            svg.style.fill = 'currentColor';
          } else {
            svg.style.fill = 'transparent';
          }
        }
      }, 100);
    });
  });

  // Form Toggle for Login Page
  const authToggles = document.querySelectorAll('.auth-toggle span');
  if (authToggles.length > 0) {
    authToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        authToggles.forEach(t => t.classList.remove('active'));
        toggle.classList.add('active');
      });
    });
  }

  // Smooth scrolling for anchor links (safe)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
