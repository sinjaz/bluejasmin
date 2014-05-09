'use strict';

/* Controllers */

sinjaz.controllers.controller('FooterController', ['$scope', '$rootScope', '$location', '$routeParams', '$window', 'dataService',
                               		        function($scope , $rootScope , $location ,  $routeParams ,  $window ,  dataService) {
        console.log("FooterController");

        $scope.clickOnNote = function(){
        	$rootScope.$broadcast("openOverlay", "MY MESSAGE");
        };
  }]);

