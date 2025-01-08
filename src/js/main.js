import {componentsFunctions} from "./helpers/_components.js";
import {modalFunctional} from "./functions/createModalFunctional.js";
import {createInputPlaceholderActivity} from "./functions/createInputPlaceholderActivity.js";
import {phoneMaskInitialization} from "./functions/phoneMaskInitialization.js";
import {fullVideoPlay} from "./functions/fullVideoPlay.js";
import {doubleHoverFunctional} from './functions/doubleHoverFunctional.js';

document.addEventListener("DOMContentLoaded", function () {
    doubleHoverFunctional();
    componentsFunctions();
    modalFunctional();
    createInputPlaceholderActivity();
    phoneMaskInitialization();
    fullVideoPlay();
});