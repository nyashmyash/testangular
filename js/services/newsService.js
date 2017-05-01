angular
	.module('newsService', [])
	.factory('newsDataOp', ['$http', newsDataOpFunc]);
	
function  newsDataOpFunc($http) {

    var newsDataOp = {};

    newsDataOp.gethttpNews = function (search) {
	   return $http.get("https://newsapi.org/v1/articles?source="+search+"&apiKey=28e99ba12c924bf5aef73df5eade3323")
	};
	 newsDataOp.saveNews = function (article, type) {
		var cnt = parseInt(window.localStorage["count"+type]);
		if (isNaN(cnt))
			cnt = 0;
		article.id = cnt;
		window.localStorage[type + cnt] = JSON.stringify(article);
		window.localStorage["count" + type] = cnt + 1;
	 }
	newsDataOp.getNews = function(type){
		var cnt = parseInt(window.localStorage["count" + type]);
		if (isNaN(cnt))
			cnt = 0;
		var ret = [];
		for (var i = 0; i< cnt; i++)
		{
			var obj = window.localStorage[type +i];
			if (obj!=undefined)
				ret.push(JSON.parse(obj));
		}
		return ret;
	}
	newsDataOp.delNews = function(indx, type){
		delete window.localStorage[type + indx];
	}		
	
    return newsDataOp;

}
