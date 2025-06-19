const menu = document.getElementById('main-menu');
const hamburgerBtn = document.querySelector('.hamburger-btn');

function openMenu() {
    menu.classList.add('show-menu');
    hamburgerBtn.setAttribute ('aria-expanded', 'true');
}

function closeMenu() {
    menu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
    const isOpen = menu.classList.contains('show-menu');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}