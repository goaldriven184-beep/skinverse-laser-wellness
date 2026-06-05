// Nav scroll state
const nav = document.querySelector('.nav');
const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

// Band slow-zoom on enter
const bandIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); bandIO.unobserve(e.target); } });
}, { threshold: 0.2 });
document.querySelectorAll('.band').forEach(el => bandIO.observe(el));
