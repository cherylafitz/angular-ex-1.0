angular.module('vote-button-module',[])

.directive('voteButton', function() {
  return {
    restrict: 'E',
    scope: {
      startingValue: 0
    },
    controller: ['$scope', function($scope){

    }])
  }
}