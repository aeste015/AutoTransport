/**
 * Created by Alejandro on 7/3/2014.
 */

angular.module('autoApp')
    .service('routesService', function(){
       var rawRoute = '';
       var confirmedRoutes = '';

       return {
           rawRoutes:function(){
               return rawRoute;
           },

           addRawRoutes:function(data){
               rawRoute = data;
           },
           confirmedRoutes:function(){
               return confirmedRoutes;
           },
           addConfirmedRoutes:function(data){
               confirmedRoutes = data;
           }

       };
    });
