const phoneRegex = /^(\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/,
    emailRegex = /\S+@\S+\.\S+/;

export function createFormFunctional() {
    const forms = document.querySelectorAll('.js-form');

    for (let form of forms) {
        const inputItems = form.querySelectorAll('.js-form-item'),
            submitButton = form.querySelector('.js-submit-button'),
            sendMessage = form.querySelector('.js-form-send-message');

        inputItems.forEach((inputItem) => {
            const input = inputItem.querySelector('.js-input');

            if (inputItem.classList.contains('required')) {
                input.addEventListener('input', () => {
                    validateInput(input, inputItem);
                });
            }
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            inputItems.forEach(inputItem => {
                const input = inputItem.querySelector('.js-input');

                if (inputItem.classList.contains('required')) {
                    validateInput(input, inputItem);
                }
            });

            checkAllFieldsValid(inputItems, sendMessage);
        });
    }


    function validateInput(input, inputWrapper) {
        const inputType = inputWrapper.getAttribute('data-input-type');
        const value = input.value.trim();
        const isEmpty = value === '';
        inputWrapper.classList.remove('error', 'email-error', 'phone-error');

        if (isEmpty) {
            inputWrapper.classList.add('error');

        } else {
            if (inputType === 'email' && !validateEmail(value)) {
                inputWrapper.classList.add('error', 'email-error');
            }
            if (inputType === 'phone' && !validatePhone(value)) {
                inputWrapper.classList.add('error', 'phone-error');
            }
        }
    }


    function checkAllFieldsValid(inputItems, sendMessage) {
        const allValid = Array.from(inputItems).every((input) => {
            return !input.classList.contains('error') && !input.classList.contains('email-error') && !input.classList.contains('phone-error');
        });

        if (allValid) {
            let consoleResult = '';

            for (let inputItem of inputItems) {
                const labelText = inputItem.querySelector('.js-label').innerText;
                const formattedLabelText = labelText.charAt(0).toUpperCase() + labelText.slice(1).toLowerCase();
                const inputText = inputItem.querySelector('.js-input').value;

                consoleResult += `${formattedLabelText}: ${inputText}\n`;
            }

            console.log(consoleResult);

            if (!sendMessage.classList.contains('active')) {
                sendMessage.classList.add('active');
                setTimeout(() => sendMessage.classList.remove('active'), 3000);
            }
            clearFormFields(inputItems);
        }
    }
}

function validatePhone(phoneInput) {
    return phoneRegex.test(phoneInput)
}

function validateEmail(emailInput) {
    return emailRegex.test(emailInput);
}

function clearFormFields(inputItems) {
    inputItems.forEach((inputItem) => {
        const input = inputItem.querySelector('.js-input');
        const label = inputItem.querySelector('.js-label');
        input.value = '';
        label.classList.remove('active');
    });
}