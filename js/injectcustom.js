var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'hello from my Moduel');
myMod.controller('controllerB', ['$scope', 'modMsg', function($scope, msg){
  $scope.message = msg;
}]);

var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'hello from the other side');
myApp.controller('controllerA', ['$scope', 'appMsg', function($scope, msg){
  $scope.message = msg;
}]);
