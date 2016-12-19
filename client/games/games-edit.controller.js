import { merge } from 'ramda';

function GamesEditController() {
    const ctrl = this;
    ctrl.editedGames = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedGames = merge({}, ctrl.games);
    };

    ctrl.saveGames = function saveGames() {
        ctrl.save({ editedGames: ctrl.editedGames });
    };
}

export default GamesEditController;