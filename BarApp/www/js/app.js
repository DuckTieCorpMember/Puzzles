// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var app = angular.module('starter', ['ionic', 'ngCordova']);
var app = angular.module('starter', ['ionic']);

//app.factory('$localstorage', ['$window', function($window) {
//  return {
//    set: function (key, value) {
//      $window.localStorage[key] = value;
//    },
//    get: function (key, defaultValue) {
//      return $window.localStorage[key] || defaultValue;
//    },
//    setObject: function (key, value) {
//      $window.localStorage[key] = JSON.stringify(value);
//    },
//    getObject: function (key) {
//      return JSON.parse($window.localStorage[key] || '{}');
//    }/*,*/
//    //getPicture: function (options) {
//    //  var q = $q.defer();
//    //
//    //  navigator.camera.getPicture(function (result) {
//    //    // Do any magic you need
//    //    q.resolve(result);
//    //  }, function (err) {
//    //    q.reject(err);
//    //  }, options);
//    //
//    //  return q.promise;
//    //}
//  };
//}]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
});

app.config (function ($stateProvider, $urlRouterProvider) {

  //$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

  $urlRouterProvider.otherwise('/slides');

  $stateProvider.state ('slides', {
    url: '/slides',
    views: {
      header: {
        templateUrl: 'views/slidesheader.html'
      },
      content: {
        templateUrl: 'views/slides.html'
      }
    }
  });

  $stateProvider.state ('theone', {
      url: '/theone',
      views: {
        header: {
          templateUrl: 'views/theoneheader.html'
        },
        content: {
          templateUrl: 'views/theone.html'
        }
      }

  });

  $stateProvider.state('menu', {
    url: '/menu',
    views: {
      content: {
        templateUrl: 'views/menu_Assyl.html'
      }
    }
  });

  $stateProvider.state('menu_open', {
    url: '/menu_open',
    views: {
      content: {
        templateUrl: 'views/menu_open_Assyl.html'
      }
    }
  });

  $stateProvider.state('contacts', {
    url: '/contacts',
    views: {
      content: {
        templateUrl: 'views/contacts.html'
      }
    }
  });

  $stateProvider.state('regitser-form', {
    url: '/register-form',
    views: {
      content: {
        templateUrl: 'views/register-form.html'
      }
    }
  });
});
