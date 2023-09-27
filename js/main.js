document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navbar ul li a');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const targetOffset = targetSection.offsetTop;
          const duration = 800; // Adjust the scroll duration
          const increment = 20; // Adjust the scroll increment

          scrollToTarget(targetOffset, duration, increment);
        }
      });
    });

    function scrollToTarget(targetOffset, duration, increment) {
      const start = window.pageYOffset;
      const distance = targetOffset - start;
      const iterations = Math.ceil(duration / increment);

      let i = 0;
      const scrollStep = () => {
        i++;
        const easeInOutCubic = 0.5 * (1 + Math.cos(Math.PI * (i / iterations) - 1));
        window.scrollTo(0, start + distance * easeInOutCubic);

        if (i < iterations) {
          requestAnimationFrame(scrollStep);
        } else {
          window.scrollTo(0, targetOffset);
        }
      };

      scrollStep();
    }
  });