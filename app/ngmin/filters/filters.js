'use strict';
/* Directives */
sinjaz.filters.filter('articlesFilter', [function () {
    return function (input, acceptedTypes) {
      var result = [];
      for (var i = 0; i < input.length; i++) {
        if (acceptedTypes.indexOf(input[i].type) != -1) {
          result.push(input[i]);
        }
      }
      return result;
    };
  }]);