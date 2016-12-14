
'use strict';

import 'angular-material/angular-material.min.css';
import 'fullcalendar/dist/fullcalendar.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessage from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import uiMaterial from 'angular-material';
import 'restangular';
import 'fullcalendar';

import HomeController from './home/home.controller';
import HomeService from './home/home.service';
import ToolBarController from './components/toolbar/toolbar.component';
import SideNavController from './components/sidenav/sidenav.component';
import CalendarController from './components/calendar/calendar.component';

export default angular.module('koinonApp', [
    uiRouter,
    ngAnimate,
    ngAria,
    ngMessage,
    ngSanitize,
    uiMaterial
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController'
    });
  })
  .controller('HomeController', HomeController)
  .service('HomeSerivce', HomeService)
  .component('toolbar', {
    templateUrl: 'toolbar.html',
    controller: ToolBarController
  })
  .component('sidenav', {
    templateUrl: 'sidenav.html',
    controller: SideNavController
  });
