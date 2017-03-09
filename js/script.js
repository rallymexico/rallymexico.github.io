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
	});

});

rally.controller('rallyController', function($scope){
	$scope.message = 'El mundo del rally';
});

rally.controller('infoController', function($scope){
	$scope.message = 'Info de rally mexico rally';
});

rally.controller('campeonatoController', function($scope){
	$scope.message = 'Campeonato de rally';
});