// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
 // angular.module('masonryApp', ['wu.masonry']).
 //                controller('ImagesCtrl', function ($scope) {
 //                    function genBrick() {
 //                        var height = 160;
 //                        var id = ~~(Math.random() * 10000);
 //                        return {
 //                            src: 'http://lorempixel.com/g/280/' + height + '/?' + id
 //                        };
 //                    };

 //                    $scope.bricks = [
 //                        genBrick(),
 //                        genBrick(),
 //                        genBrick(),
 //                        genBrick(),
 //                        genBrick()
 //                    ];

 //                    $scope.add = function add() {
 //                        $scope.bricks.push(genBrick());
 //                    };

 //                    $scope.remove = function remove() {
 //                        $scope.bricks.splice(
 //                            ~~(Math.random() * $scope.bricks.length),
 //                            1
 //                        )
 //                    };
 //                });

angular.module('starter', ['ionic', 'starter.controllers', 'ImageStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.images', {
      url: "/images",
      views: {
        'menuContent':{
          templateUrl: "templates/images.html",
          controller: 'ImagesCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

     .state('app.zoom', {
      url: "/images/:imageId",
      views: {
        'menuContent' :{
          templateUrl: "templates/image.html",
          controller: 'zoomCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/images');
});

