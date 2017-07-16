
'use strict';

var React = require('React');
var TVNavigationEventEmitter = require('NativeModules').TVNavigationEventEmitter;
var NativeEventEmitter = require('NativeEventEmitter');

function TVEventHandler() {
  this.__nativeTVNavigationEventListener = null;
  this.__nativeTVNavigationEventEmitter = null;
}

TVEventHandler.prototype.enable = function (component, callback) {
  if (!TVNavigationEventEmitter) {
    return;
  }

  this.__nativeTVNavigationEventEmitter = new NativeEventEmitter(TVNavigationEventEmitter);
  this.__nativeTVNavigationEventListener = this.__nativeTVNavigationEventEmitter.addListener('onTVNavEvent', function (data) {
    if (callback) {
      callback(component, data);
    }
  });
};

TVEventHandler.prototype.disable = function () {
  if (this.__nativeTVNavigationEventListener) {
    this.__nativeTVNavigationEventListener.remove();
    delete this.__nativeTVNavigationEventListener;
  }
  if (this.__nativeTVNavigationEventEmitter) {
    delete this.__nativeTVNavigationEventEmitter;
  }
};

module.exports = TVEventHandler;