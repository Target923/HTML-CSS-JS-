const hamburgerButton = document.getElementById('hamburgerMenu')
const mainNavigation = document.getElementById('mainNav');

hamburgerButton.addEventListener('click', () => {
    mainNavigation.classList.toggle('active');
    hamburgerButton.classList.toggle('is-open');
});