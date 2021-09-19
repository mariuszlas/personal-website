const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', e => handleHamburger(e));

function handleHamburger(e) {
    e.preventDefault();
    const navLinks = document.querySelector('#nav-links');
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
}
