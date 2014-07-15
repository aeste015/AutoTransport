'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
