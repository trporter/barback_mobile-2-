/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServiceInternals = exports.Service = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _args = require('./implementation/args');

var args = _interopRequireWildcard(_args);

var _authwrapper = require('./implementation/authwrapper');

var _location = require('./implementation/location');

var _promise_external = require('./implementation/promise_external');

var fbsPromiseImpl = _interopRequireWildcard(_promise_external);

var _request = require('./implementation/request');

var RequestExports = _interopRequireWildcard(_request);

var _reference = require('./reference');

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

var Service = exports.Service = function () {
    function Service(app, pool, url) {
        _classCallCheck(this, Service);

        this.bucket_ = null;

        this.authWrapper_ = new _authwrapper.AuthWrapper(app, function (authWrapper, loc) {
            return new _reference.Reference(authWrapper, loc);
        }, RequestExports.makeRequest, this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = _location.Location.makeFromBucketSpec(url);
        } else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new _location.Location(authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }


    _createClass(Service, [{
        key: 'ref',
        value: function value(path) {
            args.validate('ref', [args.stringSpec(function (path) {
                if (/^[A-Za-z]+:\/\//.test(path)) {
                    throw 'Expected child path but got a URL, use refFromURL instead.';
                }
            }, true)], arguments);
            if (this.bucket_ == null) {
                throw new Error('No Storage Bucket defined in Firebase Options.');
            }
            var ref = new _reference.Reference(this.authWrapper_, this.bucket_);
            if (path != null) {
                return ref.child(path);
            } else {
                return ref;
            }
        }
    }, {
        key: 'refFromURL',
        value: function refFromURL(url) {
            args.validate('refFromURL', [args.stringSpec(function (p) {
                if (!/^[A-Za-z]+:\/\//.test(p)) {
                    throw 'Expected full URL but got a child path, use ref instead.';
                }
                try {
                    _location.Location.makeFromUrl(p);
                } catch (e) {
                    throw 'Expected valid full URL but got an invalid one.';
                }
            }, false)], arguments);
            return new _reference.Reference(this.authWrapper_, url);
        }
    }, {
        key: 'setMaxUploadRetryTime',
        value: function setMaxUploadRetryTime(time) {
            args.validate('setMaxUploadRetryTime', [args.nonNegativeNumberSpec()], arguments);
            this.authWrapper_.setMaxUploadRetryTime(time);
        }
    }, {
        key: 'setMaxOperationRetryTime',
        value: function setMaxOperationRetryTime(time) {
            args.validate('setMaxOperationRetryTime', [args.nonNegativeNumberSpec()], arguments);
            this.authWrapper_.setMaxOperationRetryTime(time);
        }
    }, {
        key: 'maxUploadRetryTime',
        get: function get() {
            return this.authWrapper_.maxUploadRetryTime();
        }
    }, {
        key: 'maxOperationRetryTime',
        get: function get() {
            return this.authWrapper_.maxOperationRetryTime();
        }
    }, {
        key: 'app',
        get: function get() {
            return this.app_;
        }
    }, {
        key: 'INTERNAL',
        get: function get() {
            return this.internals_;
        }
    }]);

    return Service;
}();


var ServiceInternals = exports.ServiceInternals = function () {
    function ServiceInternals(service) {
        _classCallCheck(this, ServiceInternals);

        this.service_ = service;
    }


    _createClass(ServiceInternals, [{
        key: 'delete',
        value: function _delete() {
            this.service_.authWrapper_.deleteApp();
            return fbsPromiseImpl.resolve(undefined);
        }
    }]);

    return ServiceInternals;
}();