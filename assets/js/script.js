const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', e => handleHamburger(e));

function handleHamburger(e) {
    e.preventDefault();
    const navLinks = document.querySelector('#nav-links');

    navLinks.classList.contains('d-none-sm')
    ? navLinks.classList.replace('d-none-sm', 'flex-col')
    : navLinks.classList.replace('flex-col', 'd-none-sm');
}
