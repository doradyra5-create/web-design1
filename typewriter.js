export function initAuthorTypewriter() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeElement(el, speed = 40) {
        if (!el || el.dataset.typed === "true") return;
        el.dataset.typed = "true";

const fullHTML = el.innerHTML;

        const text = el.textContent.trim().replace(/\s+/g, ' ');

const finalHeight = el.getBoundingClientRect().height;
        el.style.minHeight = `${finalHeight}px`;
        el.textContent = "";

let current = "";
        for (let i = 0; i < text.length; i++) {
            current += text[i];
            el.textContent = current;

            await sleep(speed);
        }

el.innerHTML = fullHTML;
        el.style.minHeight = "auto";
    }

const topElements = [
        document.querySelector('.author__greeting.js-author-typewriter'),
        ...Array.from(document.querySelectorAll('.author__desc .js-author-typewriter'))
    ].filter(Boolean);

    async function runTopGroup() {

        topElements.forEach(el => el.style.visibility = "hidden");

        await sleep(500);

        for (const el of topElements) {
            el.style.visibility = "visible";

            const speed = el.textContent.length > 100 ? 35 : 65;
            await typeElement(el, speed);
            await sleep(400);
        }
    }

    runTopGroup();

const eduElement = document.querySelector('.author__education.js-author-typewriter');
    if (eduElement) {

        eduElement.style.opacity = "0";

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";

                    typeElement(entry.target, 35);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(eduElement);
    }
}
