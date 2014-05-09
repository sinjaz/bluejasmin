'use strict';
/* Directives */
sinjaz.directives.directive('awesome', [function () {
    return {
      restrict: 'E',
      compile: function () {
        
      }
    };
  }]);'use strict';
/* Directives */
sinjaz.directives.directive('helloWorld', [function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/hello-partial.html',
      compile: function () {
        
      }
    };
  }]);'use strict';
/* Directives */
angular.module('myApp.components', []).directive('helloWorld', [function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/hello.html'
    };
  }]);