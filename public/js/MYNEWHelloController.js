angular
  .module('app')
  .controller('MohitController', ['$scope', '$http', '$state', function( $scope, $http, $state ) {
      $scope.myVideoId = $state.params.videoId;
      $scope.courseId = $state.params.courseId;
      $scope.video = {};

      $http.get('/api/video/'+ $scope.myVideoId)
      .then(function( response ) {
        $scope.video = response.data;
      });
  }]);
