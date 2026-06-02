export function initAuthorExpand() {
    const textCard = document.querySelector('.author__box-text');
    if (!textCard) return;

    textCard.addEventListener('click', () => {

        if (window.innerWidth > 1100) return;

if (textCard.classList.contains('is-expanded')) return;

        textCard.classList.add('is-expanded');

setTimeout(() => {
            textCard.style.maxHeight = 'none';
        }, 500);
    });
}
