import { findIndex } from 'ramda';

function NintendoPageController(nintendoAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedNintendo = {};

    function getNintendo() {
        nintendoAPIService.nintendo.get().$promise.then((data) => {
            ctrl.nintendo = data.results;
        });
    }

    getNintendo();
    $interval(getNintendo, 3000);

    ctrl.saveNintendo = function saveNintendo(editedNintendo) {
       nintendoAPIService.nintendo.save(editedNintendo).$promise.then((savedNintendo) => {
            ctrl.nintendo = [
                savedNintendo,
                ...ctrl.nintendo,
            ];
            ctrl.editedNintendo = {};
            flashesService.displayMessage('Game Added!');
        });
    };

    ctrl.updateNintendo = function updateNintendo(nintendoToUpdate) {
        nintendoAPIService.nintendo.update(nintendoToUpdate).$promise.then(() => {
            flashesService.displayMessage('Game Updated!');
        });
    };

    ctrl.deleteNintendo = function deleteNintendo(nintendoToDelete) {
        const findNintendo = findIndex(item => nintendoToDelete.id === item.id);
        const index = findNintendo(ctrl.nintendo);

        if (index !== -1) {
            ctrl.nintendo.splice(index, 1);
        }

        nintendoAPIService.nintendo.delete(nintendoToDelete).$promise.then(() => {
            flashesService.displayMessage('Game Deleted');
        });
    };
}

export default NintendoPageController;