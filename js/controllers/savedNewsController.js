angular
    .module('myApp')
    .controller('savedNewsController', ['$scope','newsDataOp', savedNewsController]); 
	
function savedNewsController($scope, newsDataOp)
{
	$scope.savnews = newsDataOp.getNews("save");
}