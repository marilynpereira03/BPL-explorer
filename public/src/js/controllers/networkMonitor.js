'use strict';

angular.module('bpl-explorer.tools').controller('NetworkMonitor',
  function (networkMonitor, $scope) {
      networkMonitor($scope);
  });
