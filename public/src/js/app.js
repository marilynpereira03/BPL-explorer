'use strict';

angular.module('bpl_explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'monospaced.qrcode',
    'bpl_explorer.system',
    'bpl_explorer.socket',
    'bpl_explorer.blocks',
    'bpl_explorer.transactions',
    'bpl_explorer.address',
    'bpl_explorer.search',
    'bpl_explorer.tools',
    'bpl_explorer.currency'
]);

angular.module('bpl_explorer.system', []);
angular.module('bpl_explorer.socket', []);
angular.module('bpl_explorer.blocks', []);
angular.module('bpl_explorer.transactions', []);
angular.module('bpl_explorer.address', []);
angular.module('bpl_explorer.search', []);
angular.module('bpl_explorer.tools', ['naturalSort']);
angular.module('bpl_explorer.currency', []);
