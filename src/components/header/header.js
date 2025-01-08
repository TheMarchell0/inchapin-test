import Scrollbar from 'smooth-scrollbar';

export function header() {

    fixedHeaderFunctional();

    function fixedHeaderFunctional() {
        const header = document.querySelector('.js-header');
        const headerHeight = header.offsetHeight;

        const scrollbar = Scrollbar.init(document.querySelector('.js-root'), {
            damping: 0.1,
            renderByPixels: true,
        });

        scrollbar.addListener(() => {
            checkScroll();
        });

        function checkScroll() {
            if (scrollbar.scrollTop > headerHeight) {
                if (!header.classList.contains('colored')) {
                    header.classList.add('colored');
                }
            } else {
                if (header.classList.contains('colored')) {
                    header.classList.remove('colored');
                }
            }
        }
    }
}