export function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.author__skill-bar');
    if (!skillBars.length) return;

    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');

bar.style.width = targetWidth;

observer.unobserve(bar);
            }
        });
    }, observerOptions);

skillBars.forEach(bar => observer.observe(bar));
}
