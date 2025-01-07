export function createInputPlaceholderActivity() {
    const inputWrappers = document.querySelectorAll('.js-form-item');

    for (let inputWrapper of inputWrappers) {
        const input = inputWrapper.querySelector('.js-input');
        const label = inputWrapper.querySelector('.js-label');

        if (input) {
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    label.classList.remove('active');
                } else {
                    label.classList.add('active');
                }
            });
        }

    }
}

/*
СМЫСЛ ФУНКЦИИ:
На MacOS частично/полностью не работают стили на подобии "input:not(:placeholder-shown) + .label"
т.е. для лейбла, который имитирует placeholder и поднимается вверх при фокусе на инпут.
Поэтому данный функционал лейбла-плейсхолдера реализован через эту функцию
*/