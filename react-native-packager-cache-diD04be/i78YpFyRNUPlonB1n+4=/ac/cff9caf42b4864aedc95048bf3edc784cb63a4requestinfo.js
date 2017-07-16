/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RequestInfo = exports.RequestInfo = function RequestInfo(url, method, handler, timeout) {
  _classCallCheck(this, RequestInfo);

  this.url = url;
  this.method = method;
  this.handler = handler;
  this.timeout = timeout;
  this.urlParams = {};
  this.headers = {};
  this.body = null;
  this.errorHandler = null;

  this.progressCallback = null;
  this.successCodes = [200];
  this.additionalRetryCodes = [];
};