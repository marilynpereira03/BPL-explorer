'use strict';

angular.module('explorer.system').controller('HeaderController',
  function (header, $scope) {
      header($scope);
  });
