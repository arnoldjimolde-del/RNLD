// Scroll animations (global duration, so no data-aos-duration="1500" needed on every element)
AOS.init({ duration: 1500, offset: 0, once: true });

// Mobile menu
const dropdown = document.querySelector('.dropdown');
function hamburg() { dropdown.classList.add('open'); }
function cancel()  { dropdown.classList.remove('open'); }

// Skill rings: count up to data-percent when scrolled into view
const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target: ring }) => {
    if (!isIntersecting) return;

    const goal = Number(ring.dataset.percent);
    const label = ring.querySelector('.per');
    let n = 0;

    const timer = setInterval(() => {
      ring.style.setProperty('--percent', ++n);
      label.textContent = n + '%';
      if (n >= goal) clearInterval(timer);
    }, 20);

    ringObserver.unobserve(ring);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.circle').forEach(ring => ringObserver.observe(ring));
