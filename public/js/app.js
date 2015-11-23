(function(){

  var myApp = angular.module('GenderVotesApp',[]);

  myApp.run(function(){
  })

  myApp.controller('GenderVotes', ['$scope','$http', function($scope,$http){

    var female = {};
    var male = {};

    $http({
      method: 'GET',
      url: 'api/vote'
    }).then(function successCallback(response){
      console.log(response)
      female = {
            votes: response.data.femaleVotes,
            status: null
          }
      male = {
            votes: response.data.maleVotes,
            status: null
          }
      if (female.votes !== 0) {
        $scope.percentFemale = Math.round((female.votes / (female.votes + male.votes)) * 100);
      } else {
        console.log(female.votes)
        $scope.percentFemale = 0;
      }
      if (male.votes !== 0){
        $scope.percentMale = Math.round((male.votes / (female.votes + male.votes)) * 100);
      } else {
        console.log(male.votes)
        $scope.percentMale = 0;
      }
      isMajMin()
    }), function errorCallback(response) {
      console.log('error',response);
    };



    // $scope.percentMale = 0;
    // $scope.percentFemale = 0;

    $scope.incrementVotes = function(gender) {

      // ajax

      $http({
        method: 'POST',
        url: '/api/vote/' + gender
      }).then(function successCallback(response) {
          if (gender === 'female') {
            female.votes += 1;
          } else {
            male.votes += 1;
          }
          // this callback will be called asynchronously
          // when the response is available
          console.log('success',response);
          if (female.votes !== 0) {
            $scope.percentFemale = Math.round((female.votes / (female.votes + male.votes)) * 100);
          } else {
            console.log(female.votes)
            // $scope.percentFemale = 0;
          }
          if (male.votes !== 0){
            $scope.percentMale = Math.round((male.votes / (female.votes + male.votes)) * 100);
          } else {
            console.log(male.votes)
            // $scope.percentMale = 0;
          }
          isMajMin()
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('error',response);
        });
    }

    function isMajMin() {
      console.log('majmin')
      console.log(female)
      console.log($scope.percentMale)

      if ($scope.percentFemale > $scope.percentMale) {
      console.log('female maj')
        male.status = 'minority';
        female.status = 'majority';
      } else if ($scope.percentFemale < $scope.percentMale) {
      console.log('male maj')

        female.status = 'minority';
        male.status = 'majority';
      }
      else {
        male.status = null;
        female.status = null;
      }
      $scope.female = female;
      $scope.male = male;
    }

  }])
})();