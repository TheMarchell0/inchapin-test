export function doubleHoverFunctional() {
    const blocks = document.querySelectorAll('.js-double-hover');

    for (let block of blocks) {
        const mainText = block.querySelector('.js-double-hover-main-text'),
            doubleText = block.querySelector('.js-double-hover-double-text');

        doubleText.innerHTML = mainText.innerHTML;
    }
}