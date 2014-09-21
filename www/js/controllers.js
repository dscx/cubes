angular.module('starter.controllers', ['ImageStorage'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ImagesCtrl', function($scope, $rootScope, Localized){
  //$scope.url = null;
  $scope.items = Localized.db;

  
  $scope.passDeets = function(item){
    $rootScope.this = item;
    $rootScope.url = item.image;
    console.log("url set", $rootScope.url);
    console.log($rootScope);
    console.log($rootScope.this)
  };

  $scope.mouseData = function(item){
    console.log(item);
  };
  
})

 .controller('zoomCtrl', function($scope, $rootScope){
    $scope.test = {
      "test": 1,
      "two": 2
    };

    $scope.testEr = function(){
    console.log($rootScope.this)
  }
 });