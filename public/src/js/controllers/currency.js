'use strict';

angular.module ('bpl_explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('bpl_explorer-currency') || app.get('currency');

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('bpl_explorer-currency', currency);
      }
    };
  });
