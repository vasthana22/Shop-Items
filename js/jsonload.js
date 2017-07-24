    var myApp  =  angular.module('myApp', []);
    myApp.controller('jsonCtrl', function($scope, $http){
    $http.get('json/products.json').success(function (data){
	   //console.log(data);
		$scope.products = data;
    });
})