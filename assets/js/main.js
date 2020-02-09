// Main Menu Toggle
let menuToggle = document.querySelector('#mainMenuToggle'),
    menuClose = document.querySelector('#mainMenuClose'),
    menu = document.querySelector('#mainMenu');

menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('is-open');
    document.querySelector('body').classList.add('no-scroll');
    setTimeout(function(){ document.querySelector(".menu--main").classList.add("is-visible") }, 500)
    setTimeout(function(){ document.querySelector(".menu--social").classList.add("is-visible") }, 750)
});
menuClose.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector(".menu--main").classList.remove("is-visible");
    document.querySelector(".menu--social").classList.remove("is-visible");
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

// Interesection Observer
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 140)) {
        document.getElementById('letsTalkToggle').classList.add('is-hidden');
    } else {
        document.getElementById('letsTalkToggle').classList.remove('is-hidden');
    }
};
