angular
    .module('myApp')
    .controller('modiNewsController', ['$scope', 'newsDataOp',modiNewsController]);

function modiNewsController($scope, newsDataOp){

	$scope.addsnews = [];
	$scope.update = function ()
	{ 
	    $scope.addsnews = newsDataOp.getNews("new");	
	}
	$scope.update();
	$scope.delNews = function(indx)
	{
		newsDataOp.delNews(indx,"new");
		$scope.update();
	}
	 
}