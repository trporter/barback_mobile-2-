/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jsonObjectOrNull = jsonObjectOrNull;

var _type = require('./type');

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function jsonObjectOrNull(s) {
    var obj = void 0;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (type.isNonArrayObject(obj)) {
        return obj;
    } else {
        return null;
    }
}