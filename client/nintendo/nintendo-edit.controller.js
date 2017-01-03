import { merge } from 'ramda';

function NintendoEditController() {
    const ctrl = this;
    ctrl.editedNintendo = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedNintendo = merge({}, ctrl.nintendo);
    };

    ctrl.saveNintendo = function saveNintendo() {
        ctrl.save({ editedNintendo: ctrl.editedNintendo });
    };
}

export default NintendoEditController;