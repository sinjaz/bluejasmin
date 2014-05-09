'use strict';

/* Services */

sinjaz.services.service('dataService', ['$http', function($http) {
	        
	        console.log("DataService");


	        var getService = function(page, callbackFunction){

	        	var result = [];

	        	switch(page){
	        		case 'work':
	        		result = [
							{
								title:"Things I've done",
								created:"Today",
								description:"<a class='icon-github' target='_blank' href='http://github.com/sinjaz' target='_blank'>Github</a></br><a class='icon-jsfiddle' href='http://jsfiddle.net/user/sinjaz/fiddles/' target='_blank'>JSFiddle</a></br><a class='icon-linkedin' href='http://www.linkedin.com/pub/sina-jazayeri/20/576/790' target='_blank'> LinkedIn</a></br><a class='icon-pdf' href='/assets/Sina-Jazayeri-Resume.pdf' target='_blank'>Resumè</a>",
								type:'profile'
							},
							{
								title:"Things I like",
								created:"Today",
								description:"<b>HTML5/JavaScript - </b>AngularJS, RequireJS, NodeJS, ExpressJS, Backbone, _underscore, JQuery</br><b>CSS3 - </b>SASS, LESS, Compass</br><b>iOS - </b> Objective C, iPhone SDK, TestFlight</br><b>Flash & Flex - </b>ActionScript 3.0, PureMVC, RobotLegs, OSMF</br><b>Build & Deployment - </b>Grunt, Jenkins, Team City, Bower, Yeoman</br><b>Unit Test - </b>Karma, Jasmin, QUnit, Istanbul, XCTest</br><b>IDE - </b>WebStorm, IntelliJ, Sublime, XCode, Flash Builder</br><b>Other stuff - </b>Cocos3d, Cocos2d, PaperVision3D, SmartFox, GTween, TweenMax, BulkLoader And more...</br>",
								type:'profile'
							}
						];
	        			break;
	        		case 'fun':
	        		result = [
			        		{
			        			title: "<span class='icon-ear'> Music </span>",
			        			description:[
			        				{
			        					text:"Away from the world - Dave Matthews Band",
			        				},
			        				{
			        					text:"Blue haze - Miles Davis",
			        				},
			        				{
			        					text:"A Go Go - John Scotfield",
			        				},
			        				{
			        					text:"Emotion & Commotion - Jeff Beck",
			        				},
			        				{
			        					text:"Unleashed - Massive Attack",
			        				}
			        			]
			        		},
			        		{
			        			title: "<span class='icon-eye'> Movies </span>",
			        			description:[
			        				{
			        					text:"There will be blood",
			        				},
			        				{
			        					text:"Glengarry GlenRoss",
			        				},
			        				{
			        					text:"About Last Night",
			        				},
			        				{
			        					text:"Wolf of Wall Street",
			        				}
			        			]
			        		},
			        		{
			        			title: "<span class='icon-brain'>Books </span>",
			        			description:[
			        				{
			        					text:"As a Man Thinketh - James Allen",
			        				},
			        				{
			        					text:"Man's Search for Meaning",
			        				},
			        				{
			        					text:"Selfish gene - Richard Dawkins",
			        				},
			        				{
			        					text:"Insanely Simple - Ken Segall",
			        				},
			        				{
			        					text:"The Millionaire Next Door - Ken Segall",
			        				}
			        			]
			        		},
			        		{
			        			title: "<span>Other stuff</span>",
			        			description:[
			        				{text:"<b>Albert Einstein</b> - Imagination is more important than knowledge."},
			        				{text:"<b>Leonardo da Vinci</b> - Simplicity is the ultimate sophistication."},
			        				{text:"<b>Marilyn Monroe</b> - I don't know who invented high heels, but all women owe him a lot."},
			        				{text:"<b>Abraham Lincoln</b> - You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time."},
			        				{text:"<b>Walt Disney</b> - There's nothing funnier than the human animal."}
			        			]
			        		}
		        		];
	        			break;
	        	}

	        	callbackFunction(result);
	        };

	        var getJSFiddle = function(callbackFunction){
				var result;
	        	var url = 'http://jsfiddle.net/api/user/sinjaz/demo/list.json' + '?callback=JSON_CALLBACK'
				$http.jsonp(url)
				    .success(function(data){
				       console.log('JSFiddle Service: success');

						for(var i=0; i < data.list.length; i++){
							data.list[i].type = 'fiddle';
						}

						callbackFunction(data.list);
				    })
				    .error(function () {
				      console.log('JSFiddle Service: error')
				    });
	        };

	        return {
	        	get : function (page, callbackFunction) {
		            return getService(page, callbackFunction);
		        },
		        getJSFiddle : function (callbackFunction){
		        	return getJSFiddle(callbackFunction);
		        }
	        };
    	}
  ]);
