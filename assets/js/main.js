// Main Menu Toggle
let menuToggle = document.querySelector('#mainMenuToggle'),
    menuClose = document.querySelector('#mainMenuClose'),
    menu = document.querySelector('#mainMenu');

menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('is-open');
    document.querySelector('body').classList.add('no-scroll');
});
menuClose.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');
});

// Let's Talk Form Toggle
let formToggle = document.querySelector('#letsTalkToggle'),
    formClose = document.querySelector('#letsTalkClose'),
    form = document.querySelector('#letsTalk');

formToggle.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.add('is-open');
    document.querySelector('body').classList.add('no-scroll');
});
formClose.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');
});

// Let's Talk Visibility 
