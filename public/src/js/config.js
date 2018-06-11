'use strict';

// Setting up routes
angular.module('bpl_explorer').config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/views/index.html',
        title: 'Home'
    }).
    when('/blocks/:page?', {
        templateUrl: '/views/blocks.html',
        title: 'Blocks'
    }).
    when('/block/:blockId', {
        templateUrl: '/views/block.html',
        title: 'Block '
    }).
    when('/tx/:txId', {
        templateUrl: '/views/transaction.html',
        title: 'Transaction '
    }).
    when('/address/:address', {
        templateUrl: '/views/address.html',
        title: 'Address'
    })
    .when('/activityGraph', {
        templateUrl : '/views/activityGraph.html',
        title: 'Activity Graph'
    })
    .when('/topAccounts', {
        templateUrl : '/views/topAccounts.html',
        title: 'Top Accounts'
    })
    .when('/delegateMonitor', {
        templateUrl : '/views/delegateMonitor.html',
        title: 'Delegate Monitor'
    })
    .when('/marketWatcher', {
        templateUrl : '/views/marketWatcher.html',
        title: 'Market Watcher'
    })
    .when('/networkMonitor', {
        templateUrl : '/views/networkMonitor.html',
        title: 'Network Monitor'
    })
    .otherwise({
        templateUrl: '/views/404.html',
        title: 'Error'
    });
});

// Setting HTML5 location mode
angular.module('bpl_explorer')
  .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  })
  .run(function ($rootScope, $route, $location, $routeParams, $anchorScroll, $http, ngProgress, gettextCatalog) {
      gettextCatalog.currentLanguage = 'en';
      $rootScope.$on('$routeChangeStart', function () {
          ngProgress.start();
      });
      // Number of active delegate Change
      $http.get('../../constants.json').success(function (data){
        $rootScope.delegates = data.delegates;
  	});


      $rootScope.$on('$routeChangeSuccess', function () {
          ngProgress.complete();

          // Change page title, based on route information
          $rootScope.titleDetail = '';
          $rootScope.title = $route.current.title;
          $rootScope.isCollapsed = true;

          // Market Watcher
          $http.get('/api/exchanges').then (function (result) {
              if (result.data.success && result.data.enabled) {
                $rootScope.marketWatcher = true;
              }
          });

          $location.hash($routeParams.scrollTo);
          $anchorScroll();
      });
  });
