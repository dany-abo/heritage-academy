document.addEventListener('DOMContentLoaded', () => {
  const menus = [
    { btn: 'mobile-menu-btn', menu: 'mobile-menu' },
    { btn: 'mobile-menu-btn-2', menu: 'mobile-menu-2' },
  ];

  menus.forEach(({ btn, menu }) => {
    const button = document.getElementById(btn);
    const menuEl = document.getElementById(menu);
    if (!button || !menuEl) return;

    button.addEventListener('click', () => {
      menuEl.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });

    menuEl.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuEl.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  });
});
