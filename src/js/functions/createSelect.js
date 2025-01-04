const choicesInstances = [];

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
        choicesInstances.push(choices);
    }
}

export function clearSelect() {
    choicesInstances.forEach(choices => {
        choices.setChoiceByValue('Не выбран');
    });
}