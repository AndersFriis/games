import template from './nintendo-item.html';

import NintendoItemController from './nintendo-item.controller';

const nintendoItemComponent = {
    template,
    bindings: {
        nintendo: '<',
        delete: '&',
        update: '&',
    },
    controller: NintendoItemController,
    controllerAs: 'nintendoItemCtrl',
};

export default nintendoItemComponent;