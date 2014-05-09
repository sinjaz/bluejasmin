'use strict';

/* Controllers */

sinjaz.controllers.controller('FunController', ['$scope', '$location', '$routeParams', 'dataService',
                                        function($scope ,  $location ,  $routeParams ,  dataService) {
        console.log("FunController");

        $scope.pageTitle = 'Fun and/or Play time';

        $scope.callbackFunction = function(data){

        	$scope.articles = data;
        }

        dataService.get('fun', $scope.callbackFunction);
  }]);

