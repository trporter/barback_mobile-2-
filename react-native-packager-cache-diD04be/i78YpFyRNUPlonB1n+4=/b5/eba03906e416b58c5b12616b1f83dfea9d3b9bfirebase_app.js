/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

exports.createFirebaseNamespace = createFirebaseNamespace;

var _subscribe = require('./subscribe');

var _errors = require('./errors');

var _shared_promise = require('./shared_promise');

var _deep_copy = require('./deep_copy');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var contains = function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var LocalPromise = _shared_promise.local.Promise;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

var tokenListeners = [];


var FirebaseAppImpl = function () {
    function FirebaseAppImpl(options, name, firebase_) {
        _classCallCheck(this, FirebaseAppImpl);

        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = name;
        this.options_ = (0, _deep_copy.deepCopy)(options);
        this.INTERNAL = {
            'getUid': function getUid() {
                return null;
            },
            'getToken': function getToken() {
                return LocalPromise.resolve(null);
            },
            'addAuthTokenListener': function addAuthTokenListener(callback) {
                tokenListeners.push(callback);

                setTimeout(function () {
                    return callback(null);
                }, 0);
            },
            'removeAuthTokenListener': function removeAuthTokenListener(callback) {
                tokenListeners = tokenListeners.filter(function (listener) {
                    return listener !== callback;
                });
            }
        };
    }

    _createClass(FirebaseAppImpl, [{
        key: 'delete',
        value: function _delete() {
            var _this = this;

            return new LocalPromise(function (resolve) {
                _this.checkDestroyed_();
                resolve();
            }).then(function () {
                _this.firebase_.INTERNAL.removeApp(_this.name_);
                var services = [];
                Object.keys(_this.services_).forEach(function (serviceKey) {
                    Object.keys(_this.services_[serviceKey]).forEach(function (instanceKey) {
                        services.push(_this.services_[serviceKey][instanceKey]);
                    });
                });
                return LocalPromise.all(services.map(function (service) {
                    return service.INTERNAL.delete();
                }));
            }).then(function () {
                _this.isDeleted_ = true;
                _this.services_ = {};
            });
        }
    }, {
        key: '_getService',
        value: function _getService(name) {
            var instanceIdentifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ENTRY_NAME;

            this.checkDestroyed_();
            if (!this.services_[name]) {
                this.services_[name] = {};
            }
            if (!this.services_[name][instanceIdentifier]) {
                var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME ? instanceIdentifier : undefined;
                var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
                this.services_[name][instanceIdentifier] = service;
            }
            return this.services_[name][instanceIdentifier];
        }
    }, {
        key: 'extendApp',
        value: function extendApp(props) {
            var _this2 = this;

            (0, _deep_copy.deepExtend)(this, props);

            if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
                tokenListeners.forEach(function (listener) {
                    _this2.INTERNAL.addAuthTokenListener(listener);
                });
                tokenListeners = [];
            }
        }
    }, {
        key: 'checkDestroyed_',
        value: function checkDestroyed_() {
            if (this.isDeleted_) {
                error('app-deleted', { 'name': this.name_ });
            }
        }
    }, {
        key: 'name',
        get: function get() {
            this.checkDestroyed_();
            return this.name_;
        }
    }, {
        key: 'options',
        get: function get() {
            this.checkDestroyed_();
            return this.options_;
        }
    }]);

    return FirebaseAppImpl;
}();

FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");

function createFirebaseNamespace() {
    var apps_ = {};
    var factories = {};
    var appHooks = {};

    var namespace = {
        '__esModule': true,
        'initializeApp': function initializeApp(options, name) {
            if (name === undefined) {
                name = DEFAULT_ENTRY_NAME;
            } else {
                if (typeof name !== 'string' || name === '') {
                    error('bad-app-name', { 'name': name + '' });
                }
            }
            if (contains(apps_, name)) {
                error('duplicate-app', { 'name': name });
            }
            var app = new FirebaseAppImpl(options, name, namespace);
            apps_[name] = app;
            callAppHooks(app, 'create');
            return app;
        },

        'app': app,
        'apps': null,
        'Promise': LocalPromise,
        'SDK_VERSION': '4.1.3',
        'INTERNAL': {
            'registerService': function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
                if (factories[name]) {
                    error('duplicate-service', { 'name': name });
                }

                factories[name] = createService;

                if (appHook) {
                    appHooks[name] = appHook;

                    getApps().forEach(function (app) {
                        appHook('create', app);
                    });
                }

                var serviceNamespace = function serviceNamespace() {
                    var appArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : app();

                    if (typeof appArg[name] !== 'function') {
                        error('invalid-app-argument', { 'name': name });
                    }

                    return appArg[name]();
                };

                if (serviceProperties !== undefined) {
                    (0, _deep_copy.deepExtend)(serviceNamespace, serviceProperties);
                }

                namespace[name] = serviceNamespace;

                FirebaseAppImpl.prototype[name] = function () {
                    var serviceFxn = this._getService.bind(this, name);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return serviceFxn.apply(this, allowMultipleInstances ? args : []);
                };
                return serviceNamespace;
            },

            'createFirebaseNamespace': createFirebaseNamespace,
            'extendNamespace': function extendNamespace(props) {
                (0, _deep_copy.deepExtend)(namespace, props);
            },
            'createSubscribe': _subscribe.createSubscribe,
            'ErrorFactory': _errors.ErrorFactory,
            'removeApp': function removeApp(name) {
                var app = apps_[name];
                callAppHooks(app, 'delete');
                delete apps_[name];
            },

            'factories': factories,
            'useAsService': useAsService,
            'Promise': _shared_promise.local.GoogPromise,
            'deepExtend': _deep_copy.deepExtend
        }
    };

    (0, _deep_copy.patchProperty)(namespace, 'default', namespace);

    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!contains(apps_, name)) {
            error('no-app', { 'name': name });
        }
        return apps_[name];
    }
    (0, _deep_copy.patchProperty)(app, 'App', FirebaseAppImpl);function getApps() {
        return Object.keys(apps_).map(function (name) {
            return apps_[name];
        });
    }
    function callAppHooks(app, eventName) {
        Object.keys(factories).forEach(function (serviceName) {
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        });
    }

    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        app.options;

        return name;
    }
    return namespace;
}
function error(code, args) {
    throw appErrors.create(code, args);
}

var errors = {
    'no-app': 'No Firebase App \'{$name}\' has been created - ' + 'call Firebase App.initializeApp()',
    'bad-app-name': 'Illegal App name: \'{$name}',
    'duplicate-app': 'Firebase App named \'{$name}\' already exists',
    'app-deleted': 'Firebase App named \'{$name}\' already deleted',
    'duplicate-service': 'Firebase service named \'{$name}\' already registered',
    'sa-not-supported': 'Initializing the Firebase SDK with a service ' + 'account is only allowed in a Node.js environment. On client ' + 'devices, you should instead initialize the SDK with an api key and ' + 'auth domain',
    'invalid-app-argument': 'firebase.{$name}() takes either no argument or a ' + 'Firebase App instance.'
};
var appErrors = new _errors.ErrorFactory('app', 'Firebase', errors);