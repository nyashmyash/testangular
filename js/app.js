'use strict';

window.localStorage["countnews"] = 0;

var newsApp = angular.module('myApp', ["ngRoute"])
    .config(function($routeProvider){
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
		
});
newsApp.controller('modiNewsController', function($scope){

	$scope.addsnews = [];
	$scope.update = function ()
	{ 
	    $scope.addsnews = [];
		var cnt = parseInt(window.localStorage["countnews"]);
		for (var i = 0; i< cnt; i++)
		{
			var obj = window.localStorage["new"+i];
			if (obj!=undefined)
				$scope.addsnews.push(JSON.parse(obj));
		}
	}
	$scope.update();
	$scope.delNews = function(indx)
	{
		delete window.localStorage["new"+indx];
		var cnt = parseInt(window.localStorage["countnews"]);
		if (cnt >= 0)
		{
			$scope.update();
		}
	}
	 
})
newsApp.controller('savedNewsController', function($scope){

	$scope.savnews = [];
	var cnt = parseInt(window.localStorage["count"]);
	for (var i = 0; i< cnt; i++)
	{
		var obj = window.localStorage["sel"+i];
		if(obj!=undefined)
		$scope.savnews.push(JSON.parse(obj));
	}
	 
})
	
newsApp.controller('addNewsController', function($scope){
   
	$scope.addNews = function ()
	{
		var cnt = parseInt(window.localStorage["countnews"]);
		var news = {"id": cnt ,"title":$scope.title , "text": $scope.text};
		window.localStorage["new" + cnt] = JSON.stringify(news);
		window.localStorage["countnews"] = cnt + 1;
		$scope.title = "";
		$scope.text = "";
	}
	
	 
})	
newsApp.controller('newsController', function($scope,$http){
      
    $scope.indxstor = 0;
    $scope.allnews = ["ars-technica", "techcrunch","bbc-sport"];
    
    function fetch(){
      $http.get("https://newsapi.org/v1/articles?source="+$scope.search+"&apiKey=28e99ba12c924bf5aef73df5eade3323")
      .then(function(response){ $scope.details = response.data; });
    }

	$scope.sendNews = function(id){
		window.localStorage["sel" + $scope.indxstor] = JSON.stringify($scope.details.articles[id]);
		$scope.indxstor++;
		window.localStorage["count"] = $scope.indxstor;
	};
    $scope.update = function(){
      $scope.search = $scope.selnews;  
	  if ($scope.selnews == $scope.allnews[0])
			$("th" ).css( "background", "black" );
      if ($scope.selnews == $scope.allnews[1])
			$("th" ).css( "background", "green" );
      if ($scope.selnews == $scope.allnews[2])
			$("th" ).css( "background", "red" );
      
	  fetch();
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
