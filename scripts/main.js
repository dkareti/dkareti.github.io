// Back to top button
window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;
  btn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }

  // Mark active nav link
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
