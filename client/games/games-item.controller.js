import { merge } from 'ramda';

function GamesItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.gamesToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.gamesToEdit = merge({}, ctrl.games);
    };

    ctrl.editGames = function editGames(gamesToEdit) {
        ctrl.update({ gamesToUpdate: gamesToEdit });
        ctrl.games = gamesToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteGames = function deleteGames() {
        ctrl.delete({ gamesToDelete: ctrl.games });
    };
}



export default GamesItemController;