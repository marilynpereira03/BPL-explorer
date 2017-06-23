'use strict';

angular.module('bpl_explorer.tools').controller('MarketWatcher',
  function (marketWatcher, $scope) {
      marketWatcher($scope);
  });
