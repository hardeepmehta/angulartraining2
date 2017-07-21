angular
.module('app')
.controller('HelloController', ['$scope', '$http', '$rootScope', '$timeout', '$state', function( $scope, $http, $rootScope, $timeout, $state ) {
  $scope.mohit = [];
  $scope.loading = true;
  $scope.loaded = false;

  $scope.MYID = 1;

  $scope.$state = $state;

  $scope.returnIndex = function() {
    var index = -1;
    angular.forEach( $scope.mohit, function( val, ind ) {
      if( val.id == $scope.MYID ) {
        index = ind;
      }
    });

    return index;
  };

  $timeout(function() {
    $http
    .get('/mohit')
    .then(function( response ) {
      $scope.mohit = response.data;
      $scope.loading = false;
      $scope.loaded = true;
    }, function() {

    });
  },0);

  $scope.mohitClicked = function() {
    $http
    .post('/api/course', {})
    .then(function( response ) {
      $scope.mohit.push( response.data );
    });
  }

  $scope.mohitDelete = function() {
    var index = $scope.returnIndex();

    if( index == -1 ) {
      alert('SORRY COULD NOT DELETE NIGGA!');
    } else {
      $scope.mohit.splice( index, 1 );
    }
  };

}])
