'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the autoApp
 */

angular.module('autoApp')
.controller('MainCtrl', function ($scope, $filter, ngTableParams, $http, $upload, $timeout, $location, routesService) {

        $scope.rawRoutes = routesService.rawRoutes();

        $scope.confirmedRoutes = routesService.confirmedRoutes();


        //Get Data from Server and Pass it to the Table
        $http.get('http://localhost:5370/api/Route').success(function(data, status){
        $scope.tableRoute = new ngTableParams({
            page: 1,            // show first page
            count: 100,
            sorting: {
                cdate:'asc'
            }
                       // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
        });

        //Uploading File
        $scope.onFileSelect = function($file){
            $upload.upload({
                url: "http://localhost:5370/api/Upload",
                method: "POST",
                file: $file
            }).progress(function(evt){
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config){
                routesService.addRawRoutes(data);
                $location.path('/upload');
            });
        };

        $scope.getRoutes = function(){
            $http.post('http://localhost:5370/api/Location', routesService.rawRoutes())
                .success(function(data){
                    routesService.addConfirmedRoutes(data);
                    $location.path('/confirmedRoutes')
                });
        };

        $scope.uploadRoutes = function(){
            $http.post('http://localhost:5370/api/Route', routesService.confirmedRoutes())
                .success(function(){
                    $location.path('/')
                })
                .error(function(){

                });
        };



});
