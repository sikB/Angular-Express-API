var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){
	$scope.search = function(){
		$scope.message = 'wasup';

		var apiUrl = 'http://localhost:3000/search';
		$http.post(apiUrl, {name : $scope.who}).then(function successCallback(response){
			$scope.result = response.data.message;
			$scope.status = response.status;
			},
			function errorCallback(response){
				$scope.result = 'ERROR';
			})
		}
	});