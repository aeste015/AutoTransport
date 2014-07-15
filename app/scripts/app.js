'use strict';

/**
 * @ngdoc overview
 * @name autoApp
 * @description
 * # autoApp
 *
 * Main module of the application.
 */
angular
  .module('autoApp', ['ngResource', 'ngRoute', 'ngTable', 'angularFileUpload'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tableroutes', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/upload', {
        templateUrl: '/views/upload.html',
        controller: 'MainCtrl'
      })
      .when('/confirmedRoutes', {
        templateUrl: '/views/confirmedRoutes.html',
        controller: 'MainCtrl'
      })
      .when('/getQuotes', {
        templateUrl: '/views/getQuotes.html',
        controller: 'QuoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
