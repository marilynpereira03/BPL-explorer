'use strict';

angular.module('bpl_explorer.tools').controller('ActivityGraph',
  function (activityGraph, $scope) {
      activityGraph($scope);
  });
