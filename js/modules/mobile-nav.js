export function initMobileNav() {
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.header__burger');

    if (nav && burger) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('is-open');
        });

document.addEventListener('click', (e) => {
            if (nav.classList.contains('is-open') && !nav.contains(e.target)) {
                nav.classList.remove('is-open');
            }
        });
    }
}
