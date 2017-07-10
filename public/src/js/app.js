'use strict';

angular.module('bpl-explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'monospaced.qrcode',
    'bpl-explorer.system',
    'bpl-explorer.socket',
    'bpl-explorer.blocks',
    'bpl-explorer.transactions',
    'bpl-explorer.address',
    'bpl-explorer.search',
    'bpl-explorer.tools',
    'bpl-explorer.currency'
]);

angular.module('bpl-explorer.system', []);
angular.module('bpl-explorer.socket', []);
angular.module('bpl-explorer.blocks', []);
angular.module('bpl-explorer.transactions', []);
angular.module('bpl-explorer.address', []);
angular.module('bpl-explorer.search', []);
angular.module('bpl-explorer.tools', ['naturalSort']);
angular.module('bpl-explorer.currency', []);
