var rally = angular.module('rally', ['ngRoute']);

rally.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'rallyController'
	})
	.when('/info', {
		templateUrl : 'pages/informacion.html',
		controller : 'infoController'
	})
	.when('/campeonato', {
		templateUrl : 'pages/campeonato.html',
		controller : 'campeonatoController'
	})
	.otherwise({
		redirectTo:'/'
	});

});

rally.controller('rallyController', ['$scope', function($scope){
	$scope.message = 'CAMPEONATO DE RALLY EN MÉXICO';

	$scope.tab = 1;

	$scope.setTab = function(newTab){
		$scope.tab = newTab;
	};

	$scope.isSet = function(tabNum){
			return $scope.tab === tabNum;
	};
}]);

rally.controller('infoController', function($scope){
	$scope.message = 'Info de rally mexico rally';
});

rally.controller('campeonatoController', function($scope){
	$scope.message = 'Campeonato de rally';
});