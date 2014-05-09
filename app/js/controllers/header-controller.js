'use strict';

/* Controllers */

sinjaz.controllers.controller('HeaderController', ['$scope', '$location', '$routeParams',
                                         function($scope ,  $location ,  $routeParams) {
        console.log("HeaderController");
        
        $scope.items = 
        [
        	{
                id : 0,
        		buttonTitle : 'Our Approach',
                url : '#/me/work'
        	},
        	{
                id : 1,
        		buttonTitle: 'Advertisers',
                url : '#/me/fun'
        	},
            {
                id : 1,
                buttonTitle: 'Create Ad Gallery',
                url : '#/me/fun'
            },
            {
                id : 1,
                buttonTitle: 'Publishers',
                url : '#/me/fun'
            },
            {
                id : 1,
                buttonTitle: 'Blog',
                url : '#/me/fun'
            },
            {
                id : 1,
                buttonTitle: 'Contact Us',
                url : '#/me/fun'
            },
            {
                id : 1,
                buttonTitle: 'Job Postings',
                url : '#/me/fun'
            }
        ];
  }]);

