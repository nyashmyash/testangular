angular
    .module('myApp')
    .controller('addNewsController',['$scope','newsDataOp', addNewsController]); 
	
function addNewsController($scope, newsDataOp){
   
	$scope.addNews = function ()
	{
		var news = {"id": 0 ,"title":$scope.title , "text": $scope.text};
		newsDataOp.saveNews(news,"new");
		$scope.title = "";
		$scope.text = "";
	}
	 
}	