import {createFormFunctional} from "./functions/createFormFunctional.js";
import {componentsFunctions} from "./helpers/_components.js";
import {createSelect} from "./functions/createSelect.js";
import {modalFunctional} from "./functions/createModalFunctional.js";
import {fixedHeaderFunctional} from "./functions/createFixedHeaderFunctional.js";
import {createInputPlaceholderActivity} from "./functions/createInputPlaceholderActivity.js";
import {phoneMaskInitialization} from "./functions/phoneMaskInitialization.js";
import {fullVideoPlay} from "./functions/fullVideoPlay.js";

document.addEventListener("DOMContentLoaded", function () {
    fixedHeaderFunctional();
    createSelect();
    componentsFunctions();
    modalFunctional();
    createInputPlaceholderActivity();
    createFormFunctional();
    phoneMaskInitialization();
    fullVideoPlay();
});