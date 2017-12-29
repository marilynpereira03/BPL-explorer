'use strict';

angular.module('explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'monospaced.qrcode',
    'explorer.system',
    'explorer.socket',
    'explorer.blocks',
    'explorer.transactions',
    'explorer.address',
    'explorer.search',
    'explorer.tools',
    'explorer.currency'
]);

angular.module('explorer.system', []);
angular.module('explorer.socket', []);
angular.module('explorer.blocks', []);
angular.module('explorer.transactions', []);
angular.module('explorer.address', []);
angular.module('explorer.search', []);
angular.module('explorer.tools', ['naturalSort']);
angular.module('explorer.currency', []);
