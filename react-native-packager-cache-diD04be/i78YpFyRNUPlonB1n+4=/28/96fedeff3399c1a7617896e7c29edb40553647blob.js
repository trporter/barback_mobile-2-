/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FbsBlob = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _fs = require('./fs');

var fs = _interopRequireWildcard(_fs);

var _string = require('./string');

var string = _interopRequireWildcard(_string);

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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FbsBlob = exports.FbsBlob = function () {
    function FbsBlob(data, opt_elideCopy) {
        _classCallCheck(this, FbsBlob);

        var size = 0;
        var blobType = '';
        if (type.isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            } else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            } else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }

    _createClass(FbsBlob, [{
        key: 'size',
        value: function size() {
            return this.size_;
        }
    }, {
        key: 'type',
        value: function value() {
            return this.type_;
        }
    }, {
        key: 'slice',
        value: function slice(startByte, endByte) {
            if (type.isNativeBlob(this.data_)) {
                var realBlob = this.data_;
                var sliced = fs.sliceBlob(realBlob, startByte, endByte);
                if (sliced === null) {
                    return null;
                }
                return new FbsBlob(sliced);
            } else {
                var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
                return new FbsBlob(slice, true);
            }
        }
    }, {
        key: 'uploadData',
        value: function uploadData() {
            return this.data_;
        }
    }], [{
        key: 'getBlob',
        value: function getBlob() {
            for (var _len = arguments.length, var_args = Array(_len), _key = 0; _key < _len; _key++) {
                var_args[_key] = arguments[_key];
            }

            if (type.isNativeBlobDefined()) {
                var blobby = var_args.map(function (val) {
                    if (val instanceof FbsBlob) {
                        return val.data_;
                    } else {
                        return val;
                    }
                });
                return new FbsBlob(fs.getBlob.apply(null, blobby));
            } else {
                var uint8Arrays = var_args.map(function (val) {
                    if (type.isString(val)) {
                        return string.dataFromString(_string.StringFormat.RAW, val).data;
                    } else {
                        return val.data_;
                    }
                });
                var finalLength = 0;
                uint8Arrays.forEach(function (array) {
                    finalLength += array.byteLength;
                });
                var merged = new Uint8Array(finalLength);
                var index = 0;
                uint8Arrays.forEach(function (array) {
                    for (var i = 0; i < array.length; i++) {
                        merged[index++] = array[i];
                    }
                });
                return new FbsBlob(merged, true);
            }
        }
    }]);

    return FbsBlob;
}();