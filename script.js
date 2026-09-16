const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');
const backTop = document.querySelector('[data-back-top]');

const setScrolledState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
  backTop?.classList.toggle('is-visible', window.scrollY > 560);
};

setScrolledState();
window.addEventListener('scroll', setScrolledState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = primaryNav?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  formStatus.textContent = '记录已封存。学院会在安全窗口内回复。';
  contactForm.reset();
});
