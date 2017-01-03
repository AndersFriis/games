import template from './nintendo-edit.html';

import NintendoEditController from './nintendo-edit.controller';

const nintendoEditComponent = {
    template,
    bindings: {
        save: '&',
        nintendo: '<',
    },
    controller: NintendoEditController,
    controllerAs: 'nintendoEditCtrl',
};

export default nintendoEditComponent;