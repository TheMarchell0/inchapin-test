import Scrollbar from 'smooth-scrollbar';

export function fixedHeaderFunctional() {
    const header = document.querySelector('.js-header');
    const headerHeight = header.offsetHeight;

    // Инициализация Smooth Scrollbar
    const scrollbar = Scrollbar.init(document.querySelector('.js-root'), {
        damping: 0.1,
        renderByPixels: true, // Попробуйте включить или отключить
    });

    // Используем событие scroll на scrollbar
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
