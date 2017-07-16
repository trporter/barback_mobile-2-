/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkXhrIo = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _error = require('./error');

var errorsExports = _interopRequireWildcard(_error);

var _object = require('./object');

var object = _interopRequireWildcard(_object);

var _promise_external = require('./promise_external');

var promiseimpl = _interopRequireWildcard(_promise_external);

var _type = require('./type');

var type = _interopRequireWildcard(_type);

var _xhrio = require('./xhrio');

var XhrIoExports = _interopRequireWildcard(_xhrio);

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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var NetworkXhrIo = exports.NetworkXhrIo = function () {
    function NetworkXhrIo() {
        var _this = this;

        _classCallCheck(this, NetworkXhrIo);

        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = XhrIoExports.ErrorCode.NO_ERROR;
        this.sendPromise_ = promiseimpl.make(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = XhrIoExports.ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = XhrIoExports.ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }


    _createClass(NetworkXhrIo, [{
        key: 'send',
        value: function send(url, method, opt_body, opt_headers) {
            var _this2 = this;

            if (this.sent_) {
                throw errorsExports.internalError('cannot .send() more than once');
            }
            this.sent_ = true;
            this.xhr_.open(method, url, true);
            if (type.isDef(opt_headers)) {
                object.forEach(opt_headers, function (key, val) {
                    _this2.xhr_.setRequestHeader(key, val.toString());
                });
            }
            if (type.isDef(opt_body)) {
                this.xhr_.send(opt_body);
            } else {
                this.xhr_.send();
            }
            return this.sendPromise_;
        }
    }, {
        key: 'getErrorCode',
        value: function getErrorCode() {
            if (!this.sent_) {
                throw errorsExports.internalError('cannot .getErrorCode() before sending');
            }
            return this.errorCode_;
        }
    }, {
        key: 'getStatus',
        value: function getStatus() {
            if (!this.sent_) {
                throw errorsExports.internalError('cannot .getStatus() before sending');
            }
            try {
                return this.xhr_.status;
            } catch (e) {
                return -1;
            }
        }
    }, {
        key: 'getResponseText',
        value: function getResponseText() {
            if (!this.sent_) {
                throw errorsExports.internalError('cannot .getResponseText() before sending');
            }
            return this.xhr_.responseText;
        }
    }, {
        key: 'abort',
        value: function abort() {
            this.xhr_.abort();
        }
    }, {
        key: 'getResponseHeader',
        value: function getResponseHeader(header) {
            return this.xhr_.getResponseHeader(header);
        }
    }, {
        key: 'addUploadProgressListener',
        value: function addUploadProgressListener(listener) {
            if (type.isDef(this.xhr_.upload)) {
                this.xhr_.upload.addEventListener('progress', listener);
            }
        }
    }, {
        key: 'removeUploadProgressListener',
        value: function removeUploadProgressListener(listener) {
            if (type.isDef(this.xhr_.upload)) {
                this.xhr_.upload.removeEventListener('progress', listener);
            }
        }
    }]);

    return NetworkXhrIo;
}();