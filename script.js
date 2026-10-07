const dropdown = document.querySelector('.dropdown');
 
function hamburg() {
  dropdown.style.transform = 'translateY(0px)';
}
 

function cancel() {
  dropdown.style.transform = 'translateY(-500px)';
}
 const rings = document.querySelectorAll('.circle');

const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const ring = entry.target;
    const target = Number(ring.dataset.percent);
    const label = ring.querySelector('.per');
    let current = 0;

    const timer = setInterval(() => {
      current++;
      ring.style.setProperty('--percent', current);
      label.textContent = current + '%';
      if (current >= target) clearInterval(timer);
    }, 20);

    ringObserver.unobserve(ring);
  });
}, { threshold: 0.5 });

rings.forEach(ring => ringObserver.observe(ring));
