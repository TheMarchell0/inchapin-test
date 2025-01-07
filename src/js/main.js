import {createFormValidation} from "./functions/createFormValidation.js";
import {componentsFunctions} from "./helpers/_components.js";
import {createSelect} from "./functions/createSelect.js";
import {modalFunctional} from "./functions/createModalFunctional.js";
import {fixedHeaderFunctional} from "./functions/createFixedHeaderFunctional.js";
import {GSAPAnimations} from "./functions/createGSAPAnimations.js";
import {createInputPlaceholderActivity} from "./functions/createInputPlaceholderActivity.js";

document.addEventListener("DOMContentLoaded", function () {
    GSAPAnimations();
    fixedHeaderFunctional();
    createSelect();
    componentsFunctions();
    modalFunctional();
    createInputPlaceholderActivity();
    createFormValidation();
});