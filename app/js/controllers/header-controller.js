'use strict';

/* Controllers */

sinjaz.controllers.controller('HeaderController', ['$scope', '$location', '$routeParams',
                                         function($scope ,  $location ,  $routeParams) {
        console.log("HeaderController");
        
        $scope.items = 
        [
        	{
                id : 0,
        		buttonTitle : 'Work & Serious',
                url : '#/me/work'
        	},
        	{
                id : 1,
        		buttonTitle: 'Fun & Play!!',
                url : '#/me/fun'
        	}
        ];
  }]);

