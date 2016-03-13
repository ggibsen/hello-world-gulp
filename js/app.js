// Angular controller based app
// Create the testApp module
var testApp = angular.module('testApp', []);

// define the controller and it's constructor function here, to avoid
// having the function be apart of global scope
testApp.controller('TestController', ['$scope', function($scope) {
	$scope.testProp = "It worked!";
}]);

// now the $scope variable's testProp property can be used in a template's ng-controller directive
// as it's bound to data, e.g. the string "It worked"
// test
