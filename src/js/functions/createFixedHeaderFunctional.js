export function fixedHeaderFunctional() {
    const header = document.querySelector('.js-header'),
        headerHeight = header.offsetHeight;

    checkScroll();

    document.addEventListener('scroll', checkScroll);

    function checkScroll() {
        if (window.pageYOffset > headerHeight) {
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