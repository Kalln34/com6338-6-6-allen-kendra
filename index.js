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

// clicking on hamburger menu
hamburgerBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
});

// closing menu when clicking outside of it
document.addEventListener('click', function(event) {
    var isInside = menu.contains(event.target) || hamburgerBtn.contains(event.target);
    if (!isInside) {
        closeMenu();
    }
});

// pressing esc key to close meny and focus on button
document.addEventListener('keydown', function(event) {
    console.log("Key pressed:", event.key);
    if (event.key === 'Escape') {
        if (menu.classList.contains('show-menu')) {
            closeMenu();
            hamburgerBtn.focus();
        }
    }
});
