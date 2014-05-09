'use strict';

/* Controllers */

sinjaz.controllers.controller('OverlayController', ['$scope', '$rootScope', '$location', '$routeParams', '$window', 'dataService', '$element',
                               		        function($scope ,  $rootScope ,  $location ,  $routeParams ,  $window ,  dataService ,  $element) {
        console.log("OverlayController");
        $rootScope.showOverlay = false;
        $scope.message = {name:'Name', body:'Body'};
        $scope.showConfirmation = false;
        $scope.sinahaha = false;

        $scope.onAnimationEnd = function(){
            if(!$rootScope.showOverlay){
                $scope.sinahaha = false;
                $scope.$apply();
            }
        }

        $element[0].addEventListener("webkitAnimationEnd", $scope.onAnimationEnd, true);

        $scope.closeOverlay = function(){
        	$rootScope.$broadcast('closeOverlay');
        }

        $rootScope.$on('openOverlay', function(e) {
            $rootScope.showOverlay = true;
            $scope.sinahaha = true;
        });

        $rootScope.$on('closeOverlay', function(e) {
            $rootScope.showOverlay = false;
        });

        $scope.onSubmit = function(){
            
            var Message = Parse.Object.extend("Message");
            var message = new Message();
             
            message.save({
                name: $scope.message.name,
                body: $scope.message.body
            }, {
              success: function(gameScore) {
                console.log("SAVED");
                $scope.showConfirmation = true;
                //$scope.$apply();
                $scope.closeOverlay();
              },
              error: function(gameScore, error) {
                console.log("Failed");
              }
            });
        }
  }]);

