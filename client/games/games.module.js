import angular from 'angular';
import 'angular-resource';
import FlashesModule from '../flashes/flashes.module';

import gamesPageComponent from './games-page.component';
import gamesComponent from './games-item.component';
import gamesEditComponent from './games-edit.component';

import gamesAPIService from './games-api.service';

const gamesModule = angular.module('games', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('gamesAPIService', gamesAPIService)
    .component('gamesPage', gamesPageComponent)
    .component('gamesEdit', gamesEditComponent)
    .component('gamesItem', gamesItemComponent);

export default gamesModule;