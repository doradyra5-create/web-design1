export function initTypewriter() {
    const lineElements = document.querySelectorAll('.js-typewriter-line');
    if (!lineElements.length) return;

const linesData = Array.from(lineElements).map(el => {
        return {
            element: el,
            originalText: el.textContent.trim()
        };
    });

    let currentLineIndex = 0;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function eraseText(lineObj) {
        const el = lineObj.element;
        const text = el.textContent;

        for (let i = text.length; i >= 0; i--) {

            el.textContent = text.substring(0, i) || "\u00A0";
            await sleep(40);
        }
    }

async function typeText(lineObj) {
        const el = lineObj.element;
        const text = lineObj.originalText;

        for (let i = 0; i <= text.length; i++) {
            el.textContent = text.substring(0, i) || "\u00A0";
            await sleep(80);
        }
    }

    async function mainLoop() {

for (let i = 0; i < linesData.length; i++) {
            linesData[i].element.textContent = linesData[i].originalText;
            linesData[i].element.classList.add('is-crossed');
            await sleep(300);
        }

        await sleep(1500);

for (let i = 0; i < linesData.length; i++) {
            const currentLine = linesData[i];

await eraseText(currentLine);

currentLine.element.classList.remove('is-crossed');
            await sleep(200);

await typeText(currentLine);

await sleep(600);
        }

await sleep(4000);

mainLoop();
    }

mainLoop();
}
