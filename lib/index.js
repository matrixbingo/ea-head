'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../css/index.less');

var _headJs = require('./head.js');

var _headJs2 = _interopRequireDefault(_headJs);

exports.Head = _headJs2['default'];

var _footerJs = require('./footer.js');

var _footerJs2 = _interopRequireDefault(_footerJs);

exports.Footer = _footerJs2['default'];

window['Head'] = exports['Head'];
window['Footer'] = exports['Footer'];