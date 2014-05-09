'use strict';

/* Directives */

sinjaz.directives.directive('helloWorld', [function() {
    return {
        restrict: 'E',
        templateUrl:'partials/hello-partial.html',
        compile:function(){
            console.log('HelloWorld Directive');
        }
    };
}]);