import {createFormValidation} from "./functions/createFormValidation.js";
import {componentsFunctions} from "./helpers/_components.js";

document.addEventListener("DOMContentLoaded", function () {
    createFormValidation();
    componentsFunctions();
    console.log('main.js')
});