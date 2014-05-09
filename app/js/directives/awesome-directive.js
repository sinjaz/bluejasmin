'use strict';

/* Directives */

sinjaz.directives.directive('awesome', [function() {
    return {
        restrict: 'E',
        compile:function(){
            console.log('Awesome Directive');
        }
    };
}]);