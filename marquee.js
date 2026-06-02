import { initTypewriter } from './modules/typewriter.js';
import { initSkillsAnimation } from './modules/skills.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initAuthorTypewriter } from './modules/author-text.js';
import { initMobileNav } from './modules/mobile-nav.js';
import { initMarqueeScroll } from './modules/marquee.js';
import { initAuthorExpand } from './modules/author-expand.js';
import { initAccordion } from './modules/accordion.js';

document.addEventListener("DOMContentLoaded", () => {

    initTypewriter();
    initSkillsAnimation();
    initScrollReveal();
    initAuthorTypewriter();
    initMobileNav();
    initMarqueeScroll();
    initAuthorExpand();
    initAccordion();
});
