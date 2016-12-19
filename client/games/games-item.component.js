import template from './games-item.html';

import GamesItemController from './games-item.controller';

const gamesItemComponent = {
    template,
    bindings: {
        games: '<',
        delete: '&',
        update: '&',
    },
    controller: gamesItemController,
    controllerAs: 'gamesItemCtrl',
};

export default gamesItemComponent;