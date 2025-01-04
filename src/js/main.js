import {createFormValidation} from "./functions/createFormValidation.js";
import {componentsFunctions} from "./helpers/_components.js";
import {createSelect} from "./functions/createSelect.js";

document.addEventListener("DOMContentLoaded", function () {
    createSelect();
    componentsFunctions();
    createFormValidation();
});