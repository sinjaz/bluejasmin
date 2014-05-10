'use strict';

/* Controllers */

sinjaz.controllers.controller('HeaderController', ['$scope', '$rootScope', '$location', '$routeParams',
                                         function(  $scope ,  $rootScope , $location ,  $routeParams) {
        console.log("HeaderController");

        $scope.clickOnMenu = function(){
            $rootScope.$broadcast('openMenu'); 
        }
  }]);

