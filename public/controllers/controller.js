var myApp = angular.module('myApp', []);
myApp.controller('AppControl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/contactList').success(function (response) {
    console.log("Data received");
    $scope.contactList = response;
});

}]);
