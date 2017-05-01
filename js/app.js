'use strict';

angular
	.module('myApp', ['ngRoute','newsService'])
    .config(config);
	

function config($routeProvider){
        $routeProvider.when('/main',
        {
            templateUrl:'partials/main.html',
            controller:'newsController'
        });
        $routeProvider.when('/saveforlater',
        {
            templateUrl:'partials/saveforlater.html',
            controller:'savedNewsController'
        });
	    $routeProvider.when('/addnews',
        {
            templateUrl:'partials/addnews.html',
            controller:'addNewsController'
        });
		$routeProvider.when('/modifynews',
        {
            templateUrl:'partials/modifynews.html',
            controller:'modiNewsController'
        });
		
}
        

