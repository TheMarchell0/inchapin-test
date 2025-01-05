import Choices from "choices.js";

export function createSelect() {
    const selects = document.querySelectorAll('.js-select');

    for (let select of selects) {
        const choices = new Choices(select, {
            searchEnabled: false,
            position: 'bottom',
            itemSelectText: '',
            openState: 'is-open',
            shouldSort: false,
        });
    }
}