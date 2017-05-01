angular
    .module('myApp')
    .directive('gList', funcList);

function funcList() {
    return {
        scope: {
			data: '=',
			fnd: '@',
			send: '='
		}
		,
        restrict: 'AEC',
		templateUrl: 'partials/gList.html',
		
    };
}
