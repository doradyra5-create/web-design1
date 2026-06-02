export function initAccordion() {
    const toggles = document.querySelectorAll('.js-accordion-toggle');

    if (toggles.length === 0) return;

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const accordion = toggle.closest('.services__accordion');
            if (!accordion) return;

            const content = accordion.querySelector('.services__accordion-content');
            if (!content) return;

const isOpen = accordion.classList.contains('is-open');

document.querySelectorAll('.services__accordion').forEach(other => {
                other.classList.remove('is-open');
                const otherContent = other.querySelector('.services__accordion-content');
                if (otherContent) otherContent.style.maxHeight = null;
            });

if (!isOpen) {
                accordion.classList.add('is-open');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}
