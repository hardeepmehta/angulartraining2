angular
.module('app')
.config([ '$stateProvider', function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/video/{courseId}/{videoId}',
    templateUrl: '/hello.html',
    controller: 'MohitController'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}]);
