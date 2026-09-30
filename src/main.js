const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-mobile-menu]');
button?.addEventListener('click', () => menu?.classList.toggle('hidden'));
