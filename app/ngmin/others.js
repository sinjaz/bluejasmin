'use strict';
var sinjaz = sinjaz || {};
sinjaz.constants = angular.module('sinjaz.constants', []);
sinjaz.services = angular.module('sinjaz.services', []);
sinjaz.controllers = angular.module('sinjaz.controllers', []);
sinjaz.filters = angular.module('sinjaz.filters', []);
sinjaz.directives = angular.module('sinjaz.directives', []);
sinjaz.components = angular.module('sinjaz.components', []);
angular.module('sinjaz', [
  'sinjaz.filters',
  'sinjaz.services',
  'sinjaz.directives',
  'sinjaz.controllers',
  'sinjaz.components',
  'sinjaz.constants'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/later', {
      templateUrl: 'partials/later-partial.html',
      controller: 'LaterController'
    });
    $routeProvider.when('/home', {
      templateUrl: 'partials/home-partial.html',
      controller: 'HomeController'
    });
    //$routeProvider.when('/me/:pageid', {templateUrl: 'partials/me-partial.html', controller: 'MeController'});
    $routeProvider.when('/me/work', {
      templateUrl: 'partials/work-partial.html',
      controller: 'WorkController'
    });
    $routeProvider.when('/me/fun', {
      templateUrl: 'partials/fun-partial.html',
      controller: 'FunController'
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
    
  }
]);window.onload = function () {
  var $rootElement = angular.element(window.document);
};'use strict';
/* Filters */
angular.module('sinjaz.filters', []).filter('interpolate', [
  'version',
  function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/gm, version);
    };
  }
]);