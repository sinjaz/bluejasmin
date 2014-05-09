'use strict';
/* Controllers */
sinjaz.controllers.controller('FunController', [
  '$scope',
  '$location',
  '$routeParams',
  'dataService',
  function ($scope, $location, $routeParams, dataService) {
    
    $scope.pageTitle = 'Fun and/or Play time';
    $scope.callbackFunction = function (data) {
      $scope.articles = data;
    };
    dataService.get('fun', $scope.callbackFunction);
  }
]);'use strict';
/* Controllers */
sinjaz.controllers.controller('HomeController', [
  '$scope',
  '$location',
  '$routeParams',
  function ($scope, $location, $routeParams) {
    
    $scope.onClickItem = function (e) {
      
      $scope.fadeOut = true;
      window.addEventListener('webkitAnimationEnd', function () {
        
        
        window.location = e.url;
      }, false);
    };
    $scope.message = 'Which Sina?';
    $scope.sinas = [
      {
        id: 0,
        buttonTitle: 'Work & Serious',
        pageTitle: 'Let\'s talk business',
        url: '/#/me/work'
      },
      {
        id: 1,
        buttonTitle: 'Fun & Play!!',
        pageTitle: 'Sina, the person',
        url: '/#/me/fun'
      }
    ];
  }
]);'use strict';
/* Controllers */
sinjaz.controllers.controller('LaterController', [
  '$scope',
  function ($scope) {
    /*angular.module('sinjaz.controllers', []).controller('LaterController', ['$scope',function ($scope) {*/
    
    $scope.message = 'Be right back';
  }
]);'use strict';
/* Controllers */
sinjaz.controllers.controller('WorkController', [
  '$scope',
  '$location',
  '$routeParams',
  '$window',
  'dataService',
  function ($scope, $location, $routeParams, $window, dataService) {
    
    $scope.pageTitle = 'Let\'s talk business!';
    $scope.articles = [];
    $scope.fiddles = [];
    $scope.showFiddles = function () {
      if ($routeParams.showfiddles === 'false' || $routeParams.showfiddles === false || $routeParams.showfiddles === undefined || $routeParams.showfiddles === '') {
        return false;
      } else if ($routeParams.showfiddles === 'true') {
        return true;
      } else {
        window.location = '#/';
      }
    };
    $scope.$on('$routeChangeSuccess', function (next, current) {
    });
    $scope.callbackFunction = function (data) {
      for (var i = 0; i < data.length; i++) {
        switch (data[i].type) {
        case 'profile':
          $scope.articles.push(data[i]);
          break;
        case 'fiddle':
          $scope.fiddles.push(data[i]);
          break;
        }
      }
    };
    $scope.clickOnArticle = function (url) {
      if (url != undefined && url != '' && url != null) {
        $window.open(url);
      } else {
        $scope.showFiddles = true;
      }
    };
    $scope.moreButtonText = function () {
      
      if ($scope.showFiddles()) {
        return '...Hide fiddles';
      } else {
        return 'Show fiddles...';
      }
    };
    $scope.moreButtonURL = function () {
      if ($scope.showFiddles()) {
        return '#/me/work?showfiddles=false';
      } else {
        return '#/me/work?showfiddles=true';
      }
    };
    dataService.get('work', $scope.callbackFunction);
    dataService.getJSFiddle($scope.callbackFunction);
  }
]);