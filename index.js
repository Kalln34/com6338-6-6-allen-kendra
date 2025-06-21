var menu = document.getElementById('main-menu');
var hamburgerBtn = document.querySelector('.hamburger-btn');


// open menu
function openMenu() {
    menu.classList.add('show-menu');
    hamburgerBtn.setAttribute ('aria-expanded', 'true');
}

// close menu
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
    var isInside = menu.contains(event.target) || hamburgerBtn.contains(event.target);
    if (!isInside) {
        closeMenu();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        if (menu.classList.contains('show-menu')) {
            closeMenu();
            hamburgerBtn.focus();
        }
    }
});


