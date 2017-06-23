'use strict';

// Global service for global variables
angular.module('bpl_explorer.system')
  .factory('Global', [ function () { return true; } ])
  .factory('Version',
    function ($resource) {
        return $resource('/api/version');
    });
