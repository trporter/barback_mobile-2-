/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerStorage = registerStorage;

var _string = require('./storage/implementation/string');

var _taskenums = require('./storage/implementation/taskenums');

var _xhriopool = require('./storage/implementation/xhriopool');

var _reference = require('./storage/reference');

var _service = require('./storage/service');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var STORAGE_TYPE = 'storage';

function factory(app, unused, opt_url) {
    return new _service.Service(app, new _xhriopool.XhrIoPool(), opt_url);
}
function registerStorage(instance) {
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, {
        'TaskState': _taskenums.TaskState,
        'TaskEvent': _taskenums.TaskEvent,
        'StringFormat': _string.StringFormat,
        'Storage': _service.Service,
        'Reference': _reference.Reference
    }, undefined, true);
}
registerStorage(_app2.default);