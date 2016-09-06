angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.hOME', {
    url: '/HOME',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hOME.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('menu.pROFILE', {
    url: '/PROFILE',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pROFILE.html',
        controller: 'pROFILECtrl'
      }
    }
  })

  .state('aBOUT', {
    url: '/ABOUT',
    templateUrl: 'templates/aBOUT.html',
    controller: 'aBOUTCtrl'
  })

  .state('sUPPORT', {
    url: '/SUPPORT',
    templateUrl: 'templates/sUPPORT.html',
    controller: 'sUPPORTCtrl'
  })

  .state('menu.pAYMENT', {
    url: '/PAYMENT',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pAYMENT.html',
        controller: 'pAYMENTCtrl'
      }
    }
  })

  .state('menu.pROMOTION', {
    url: '/PROMOTION',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pROMOTION.html',
        controller: 'pROMOTIONCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/HOME')

  

});