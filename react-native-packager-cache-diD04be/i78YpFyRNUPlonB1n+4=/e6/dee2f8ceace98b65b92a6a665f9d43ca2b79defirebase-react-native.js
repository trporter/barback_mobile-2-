/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('./auth');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Storage, XMLHttpRequest;

require('./database');
require('./storage');

var AsyncStorage = require('react-native').AsyncStorage;
_app2.default.INTERNAL.extendNamespace({
    'INTERNAL': {
        'reactNative': {
            'AsyncStorage': AsyncStorage
        }
    }
});

exports.default = _app2.default;
module.exports = exports['default'];