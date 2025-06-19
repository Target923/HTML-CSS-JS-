const hamburgerButton = document.getElementById('hamburgerMenu')
const mainNavigation = document.getElementById('mainNav');

hamburgerButton.addEventListener('click', () => {
    mainNavigation.classList.toggle('active');
    hamburgerButton.classList.toggle('open');

    if (mainNavigation.classList.contains('active')) {
        const navHeight = mainNavigation.offsetHeight; // 要素の高さ
        hamburgerButton.style.transform = `translateY(${navHeight}px)`;
    } else {
        hamburgerButton.style.transform = `translateY(0)`
    }
});