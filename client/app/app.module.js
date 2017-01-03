import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import angularCookies from 'angular-cookies';


import GamesModule from '../games/games.module';
import NintendoModule from '../nintendo/nintendo.module';
import FlashesModule from '../flashes/flashes.module';


import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    GamesModule.name,
    NintendoModule.name,
    FlashesModule.name,
    
    
])  
    .config(function($httpProvider, $stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('index', {
            url: '/',
            component: 'gamesPage',

        }).state('games', {
            url: '/ps4/',
            component: 'gamesPage',
        

        }).state('nintendo', {
            url: '/nintendo/',
            component: 'nintendoPage',
        });
    

        $httpProvider.defaults.xsrfCookieName = 'csrftoken'
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
    })
    .component('app', appComponent);

export default AppModule;