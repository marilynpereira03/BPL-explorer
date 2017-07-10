'use strict';

angular.module ('bpl-explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('bpl-explorer-currency') || 'BPL';

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('bpl-explorer-currency', currency);
      }
    };
  });
