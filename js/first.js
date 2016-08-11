var firstApp = angular.module('firstApp', []);
firstApp.controller('firstController', function($scope){
  $scope.first = 'Name';
  $scope.last = 'Last';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last +' !';
  };
});
