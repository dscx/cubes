angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ImagesCtrl', function($scope){
  $scope.items = [ 
  {id: 1, text: '385#', image: 'http://scontent-b-dfw.cdninstagram.com/hphotos-xaf1/t51.2885-15/10607938_294319204095723_950231021_n.jpg'},
  {id: 2, text: 'love', image: 'http://photos-a.ak.instagram.com/hphotos-ak-xpa1/925057_1479510908978536_916675241_n.jpg'},
  {id: 3, text: 'swing', image: 'http://photos-d.ak.instagram.com/hphotos-ak-xfa1/914731_736981239678323_2034575128_n.jpg'},
  {id: 4, text: 'baby&me', image: 'http://photos-f.ak.instagram.com/hphotos-ak-xfa1/10432013_861848833842565_2112626240_n.jpg'},
  {id: 5, text: 'us', image: 'http://scontent-a-dfw.cdninstagram.com/hphotos-xfp1/t51.2885-15/10401685_308250586005918_1187856595_n.jpg'},
  ];
});
