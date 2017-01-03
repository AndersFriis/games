import { merge } from 'ramda';

function NintendoItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.nintendoToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.nintendoToEdit = merge({}, ctrl.nintendo);
    };

    ctrl.editNintendo = function editNintendo(nintendoToEdit) {
        ctrl.update({ nintendoToUpdate: nintendoToEdit });
        ctrl.nintendo = nintendoToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteNintendo = function deleteNintendo() {
        ctrl.delete({ nintendoToDelete: ctrl.nintendo });
    };
}



export default NintendoItemController;