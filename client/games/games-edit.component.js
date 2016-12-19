import template from './games-edit.html';

import GamesEditController from './games-edit.controller';

const gamesEditComponent = {
    template,
    bindings: {
        save: '&',
        games: '<',
    },
    controller: GamesEditController,
    controllerAs: 'gamesEditCtrl',
};

export default gamesEditComponent;