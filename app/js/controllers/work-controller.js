'use strict';

/* Controllers */

sinjaz.controllers.controller('WorkController', ['$scope', '$location', '$routeParams', '$window', 'dataService',
                                       function($scope ,  $location ,  $routeParams ,  $window ,  dataService) {
        console.log("WorkController");
        $scope.pageTitle = "Let's talk business!";
        $scope.articles = [];
        $scope.fiddles = [];
        $scope.shouldShowFiddles = false;

        $scope.showFiddles = function(){

            return $scope.shouldShowFiddles;
        }

        $scope.callbackFunction = function(data)
        {
            for(var i=0; i<data.length; i++){
                switch(data[i].type){
                    case 'profile':
                        $scope.articles.push(data[i]);
                        break;
                    case 'fiddle':
                        $scope.fiddles.push(data[i]);
                        break;
                }
            }
        }

        $scope.clickOnArticle = function(url){
            if(url != undefined && url != "" && url != null){
                $window.open(url);
            }else{
                $scope.showFiddles = true;
            }
        };

        $scope.moreButtonText = function(){
            if($scope.showFiddles()){
                return "...Hide fiddles"
            }else{
                return "Show fiddles..."
            }
        }

        $scope.clickOnFiddles = function(){
            $scope.shouldShowFiddles = !$scope.shouldShowFiddles;
        }

        dataService.get('work', $scope.callbackFunction);
        dataService.getJSFiddle($scope.callbackFunction);
  }]);

