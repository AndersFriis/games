import { findIndex } from 'ramda';

function GamesPageController(gamesAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedGames = {};

    function getGames() {
        gamesAPIService.games.get().$promise.then((data) => {
            ctrl.games = data.results;
        });
    }

    getGames();
    $interval(getGames, 3000);

    ctrl.saveGames = function saveGames(editedGames) {
       gamesAPIService.games.save(editedGames).$promise.then((savedGames) => {
            ctrl.games = [
                savedGames,
                ...ctrl.games,
            ];
            ctrl.editedGames = {};
            flashesService.displayMessage('Game Added!');
        });
    };

    ctrl.updateGames = function updateGames(gamesToUpdate) {
        gamesAPIService.games.update(gamesToUpdate).$promise.then(() => {
            flashesService.displayMessage('Game Updated!');
        });
    };

    ctrl.deleteGames = function deleteGames(gamesToDelete) {
        const findGames = findIndex(item => gamesToDelete.id === item.id);
        const index = findGames(ctrl.games);

        if (index !== -1) {
            ctrl.games.splice(index, 1);
        }

        gamesAPIService.games.delete(gamesToDelete).$promise.then(() => {
            flashesService.displayMessage('Game Deleted');
        });
    };
}

export default GamesPageController;