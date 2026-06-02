export function initMarqueeScroll() {

    const tagMarquee = document.querySelector('.ready__marquee-tags');

const workList = document.querySelector('.work__list');
    const workSection = document.querySelector('.work');

    window.addEventListener('scroll', () => {

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) {
            if (tagMarquee) tagMarquee.style.transform = '';
            if (workList) workList.style.transform = '';
            return;
        }

        const winHeight = window.innerHeight;

const readySection = document.querySelector('.ready');
        if (tagMarquee && readySection) {
            const rect = readySection.getBoundingClientRect();

const headerHeight = 75;

const totalScrollable = rect.height - (winHeight - headerHeight);

const scrolled = headerHeight - rect.top;

let progress = (scrolled / totalScrollable) * 1.2;
            progress = Math.max(0, Math.min(1, progress));

const maxTranslate = tagMarquee.scrollWidth + 50;

            if (rect.top <= headerHeight && rect.bottom >= headerHeight) {

                const moveX = -(progress * maxTranslate);
                tagMarquee.style.transform = `translateX(${moveX}px)`;
            } else if (rect.top > headerHeight) {

                tagMarquee.style.transform = 'translateX(0px)';
            } else if (rect.bottom < headerHeight) {

                tagMarquee.style.transform = `translateX(${-maxTranslate}px)`;
            }
        }

if (workList && workSection) {
            const rect = workSection.getBoundingClientRect();
            const headerHeight = 75;

const totalScrollableDistance = rect.height - (winHeight - headerHeight);

const scrolledDistance = headerHeight - rect.top;

let progress = scrolledDistance / totalScrollableDistance;
            progress = Math.max(0, Math.min(1, progress));

const maxTranslate = workList.scrollWidth - window.innerWidth + 80;

            if (rect.top <= headerHeight && rect.bottom >= headerHeight) {

                const moveX = -(progress * maxTranslate);
                workList.style.transform = `translateX(${moveX}px)`;
            } else if (rect.top > headerHeight) {

                workList.style.transform = 'translateX(0px)';
            } else if (rect.bottom < headerHeight) {

                workList.style.transform = `translateX(${-maxTranslate}px)`;
            }
        }
    });
}
