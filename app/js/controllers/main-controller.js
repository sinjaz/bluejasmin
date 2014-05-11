'use strict';

/* Controllers */

sinjaz.controllers.controller('MainController', ['$scope', '$rootScope', '$location', '$routeParams',
                                         function($scope ,  $rootScope , $location ,  $routeParams) {
        console.log("MainController");

        $scope.openMenuBool = false;

        $rootScope.$on('openMenu', function(event, e){
            $scope.openMenuBool = !$scope.openMenuBool;
        });

        $scope.items = 
        [
        	{
                id : 0,
        		buttonTitle : 'Our Approach',
                url : '#/approach'
        	},
        	{
                id : 1,
        		buttonTitle: 'Advertisers',
                url : '#/advertisers'
        	},
            {
                id : 1,
                buttonTitle: 'Create Ad Gallery',
                url : '#/gallery'
            },
            {
                id : 1,
                buttonTitle: 'Publishers',
                url : '#/publishers'
            },
            {
                id : 1,
                buttonTitle: 'Blog',
                url : '#/blog'
            },
            {
                id : 1,
                buttonTitle: 'Contact Us',
                url : '#/contact'
            },
            {
                id : 1,
                buttonTitle: 'Job Postings',
                url : '#/jobs'
            }
        ];
  }]);

