'use strict';

var sinjaz = sinjaz || {};

sinjaz.constants    = angular.module('sinjaz.constants', []);
sinjaz.services     = angular.module('sinjaz.services', []);
sinjaz.controllers  = angular.module('sinjaz.controllers', []);
sinjaz.filters      = angular.module('sinjaz.filters', []);
sinjaz.directives   = angular.module('sinjaz.directives', []);
sinjaz.components   = angular.module('sinjaz.components', []);



angular.module('sinjaz', ['sinjaz.filters', 'sinjaz.services', 'sinjaz.directives', 'sinjaz.controllers', 'sinjaz.components', 'sinjaz.constants']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', 		{templateUrl: 'partials/pages/home-partial.html', 		controller: 'HomeController'});
    $routeProvider.when('/approach', 	{templateUrl: 'partials/pages/approach-partial.html', 	controller: 'HomeController'});
    $routeProvider.when('/advertisers', {templateUrl: 'partials/pages/advertisers-partial.html', 	controller: 'HomeController'});
    $routeProvider.when('/gallery', 	{templateUrl: 'partials/pages/gallery-partial.html', 		controller: 'HomeController'});
    $routeProvider.when('/publishers', 	{templateUrl: 'partials/pages/publishers-partial.html', 	controller: 'HomeController'});
    $routeProvider.when('/blog', 		{templateUrl: 'partials/pages/blog-partial.html', 		controller: 'HomeController'});
    $routeProvider.when('/contact', 	{templateUrl: 'partials/pages/contact-partial.html', 		controller: 'HomeController'});
    $routeProvider.when('/jobs', 		{templateUrl: 'partials/pages/jobs-partial.html', 		controller: 'HomeController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);