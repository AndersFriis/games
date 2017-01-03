import angular from 'angular';
import 'angular-resource';
import FlashesModule from '../flashes/flashes.module';

import nintendoPageComponent from './nintendo-page.component';
import nintendoItemComponent from './nintendo-item.component';
import nintendoEditComponent from './nintendo-edit.component';

import nintendoAPIService from './nintendo-api.service';

const nintendoModule = angular.module('nintendo', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('nintendoAPIService', nintendoAPIService)
    .component('nintendoPage', nintendoPageComponent)
    .component('nintendoEdit', nintendoEditComponent)
    .component('nintendoItem', nintendoItemComponent);

export default nintendoModule;