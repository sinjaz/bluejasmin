'use strict';

/* Controllers */

sinjaz.controllers.controller('HomeController', ['$scope', '$rootScope', '$location', '$routeParams',
                                         function($scope ,  $rootScope , $location ,  $routeParams) {
        console.log("HomeController");
        $scope.itemClickedOn;

        $scope.onClickItem = function(e){
        	console.log('Clicked on: ', e);
            $scope.itemClickedOn = e;
            $scope.fadeOut = true;
            window.addEventListener("webkitAnimationEnd", $scope.onAnimationEnd, false);
        };

        $scope.onAnimationEnd = function(e){
            window.removeEventListener("webkitAnimationEnd", $scope.onAnimationEnd, false);
            console.log('Go to: ' + $scope.itemClickedOn.url);
            window.location = $scope.itemClickedOn.url;
        }
        
        $scope.message = 'Which Sina?';
        $scope.sinas = 
        [
        	{
                id : 0,
        		buttonTitle : 'Work & Serious',
                pageTitle : "Let's talk business",
                url : '#/me/work'
        	},
        	{
                id : 1,
        		buttonTitle: 'Fun & Play!!',
                pageTitle : 'Sina, the person',
                url : '#/me/fun'
        	}
        ];
  }]);

