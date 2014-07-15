'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:QuoteCtrl
 * @description
 * # QuoteCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
    .controller('QuoteCtrl', function ($scope) {
        $scope.test = 'testing';

        $scope.result2 = '';
        $scope.options2 = {
            country: 'us',
            types: '(cities)'
        };    $scope.details2 = '';

        $scope.result1 = '';
        $scope.options1 = {
            country: 'us',
            types: '(cities)'
        };    $scope.details2 = '';

        $scope.Initialize = function(){

            var fromCurrentLocation;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                fromCurrentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                $scope.render(fromCurrentLocation)});
        } else{
            fromCurrentLocation = new google.maps.LatLng(29.7628, 95.3831);
            $scope.render(fromCurrentLocation);
            }
        };

        $scope.render = function(location){
            var mapOptions = {
                center: location,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        };

        $scope.Initialize();
    });


