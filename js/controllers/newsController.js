angular
    .module('myApp')
    .controller('newsController', ['$scope', 'newsDataOp', newsController]); 

function newsController($scope, newsDataOp){
      
    $scope.allnews = ["ars-technica", "techcrunch","bbc-sport"];
    function fetch(){
	  newsDataOp.gethttpNews($scope.search).success(function (res) {
                $scope.details = res;
            });
    }

	$scope.sendNews = function(id){
		newsDataOp.saveNews($scope.details.articles[id],"save");
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

  };
      