import Inputmask from "inputmask/lib/inputmask.js";

export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-input');

    for (let phoneInput of phoneInputs) {
        Inputmask({
            mask: '+7 (999) 999-99-99',
            showMaskOnHover: false
        }).mask(phoneInput);
    }
}
