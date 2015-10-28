(function(){

  var myApp = angular.module('GenderVotesApp',[]);

  myApp.run(function(){
  })

  myApp.controller('GenderVotes', ['$scope', function($scope){

    var female = {
          votes: 0,
          status: null
        }
    var male = {
          votes: 0,
          status: null
        }
    $scope.percentMale = 0;
    $scope.percentFemale = 0;

    $scope.incrementVotes = function(gender) {
      if (gender === 'female') {
        female.votes += 1;
      } else {
        male.votes += 1;
      }
        $scope.percentFemale = Math.round((female.votes / (female.votes + male.votes)) * 100);
        $scope.percentMale = Math.round((male.votes / (female.votes + male.votes)) * 100);
      isMajMin()
    }

    var isMajMin = function() {
      if ($scope.percentFemale > $scope.percentMale) {
        male.status = 'minority';
        female.status = 'majority';
      } else if ($scope.percentFemale < $scope.percentMale) {
        female.status = 'minority';
        male.status = 'majority';
      }
      else {
        male.status = null;
        female.status = null;
      }
      $scope.male = male;
      $scope.female = female;
    }

  }])
})();