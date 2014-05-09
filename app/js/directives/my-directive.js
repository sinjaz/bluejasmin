'use strict';

/* Directives */

angular.module('myApp.components', []).
    directive('helloWorld', [function() {
        return {
            restrict: 'E',
            templateUrl:'partials/hello.html'
        };
    }]);