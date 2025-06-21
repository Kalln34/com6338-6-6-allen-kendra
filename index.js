var menu = document.getElementById('main-menu');
var hamburgerBtn = document.querySelector('.hamburger-btn');

function openMenu() {
    menu.classList.add('show-menu');
    hamburgerBtn.setAttribute ('aria-expanded', 'true');
}

function closeMenu() {
    menu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
    var isOpen = menu.classList.contains('show-menu');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

hamburgerBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(event) {
    var isClickInside = menu.contains(event.target) || hamburgerBtn.contains(event.target);
    if (!isClickInside) {
        closeMenu();
    }
});

