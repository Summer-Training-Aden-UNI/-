document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.site-header__menu-toggle');
    const nav = document.querySelector('.site-header__nav');

    if (!menuToggle || !nav) {
        console.warn('Mobile menu: toggle button or nav not found in DOM.');
        return;
    }

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('is-open');
        menuToggle.classList.toggle('is-active');
    });

    // Close menu when clicking a nav link
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (nav.classList.contains('is-open') &&
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            nav.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
        }
    });
});