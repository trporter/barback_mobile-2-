/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Location = undefined;

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

var Location = exports.Location = function () {
    function Location(bucket, path) {
        _classCallCheck(this, Location);

        this.bucket = bucket;
        this.path_ = path;
    }

    _createClass(Location, [{
        key: 'fullServerUrl',
        value: function fullServerUrl() {
            var encode = encodeURIComponent;
            return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
        }
    }, {
        key: 'bucketOnlyServerUrl',
        value: function bucketOnlyServerUrl() {
            var encode = encodeURIComponent;
            return '/b/' + encode(this.bucket) + '/o';
        }
    }, {
        key: 'path',
        get: function get() {
            return this.path_;
        }
    }], [{
        key: 'makeFromBucketSpec',
        value: function makeFromBucketSpec(bucketString) {
            var bucketLocation = void 0;
            try {
                bucketLocation = Location.makeFromUrl(bucketString);
            } catch (e) {
                return new Location(bucketString, '');
            }
            if (bucketLocation.path === '') {
                return bucketLocation;
            } else {
                throw errorsExports.invalidDefaultBucket(bucketString);
            }
        }
    }, {
        key: 'makeFromUrl',
        value: function makeFromUrl(url) {
            var location = null;
            var bucketDomain = '([A-Za-z0-9.\\-]+)';

            var gsRegex = new RegExp('^gs://' + bucketDomain + '(/(.*))?$', 'i');

            var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' + 'v[A-Za-z0-9_]+' + '/b/' + bucketDomain + '/o' + '(/([^?#]*).*)?$', 'i');

            var groups = [{ regex: gsRegex, indices: { bucket: 1, path: 3 }, postModify: function postModify(loc) {
                    if (loc.path.charAt(loc.path.length - 1) === '/') {
                        loc.path_ = loc.path_.slice(0, -1);
                    }
                } }, { regex: httpRegex, indices: { bucket: 1, path: 3 }, postModify: function postModify(loc) {
                    loc.path_ = decodeURIComponent(loc.path);
                } }];
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                var captures = group.regex.exec(url);
                if (captures) {
                    var bucketValue = captures[group.indices.bucket];
                    var pathValue = captures[group.indices.path];
                    if (!pathValue) {
                        pathValue = '';
                    }
                    location = new Location(bucketValue, pathValue);
                    group.postModify(location);
                    break;
                }
            }
            if (location == null) {
                throw errorsExports.invalidUrl(url);
            }
            return location;
        }
    }]);

    return Location;
}();