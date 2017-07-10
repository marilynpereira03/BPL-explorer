'use strict';

angular.module('bpl-explorer.tools').controller('ActivityGraph',
  function (activityGraph, $scope) {
      activityGraph($scope);
  });
