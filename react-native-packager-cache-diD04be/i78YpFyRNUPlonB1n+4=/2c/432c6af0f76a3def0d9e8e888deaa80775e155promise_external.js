/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = make;
exports.resolve = resolve;
exports.reject = reject;

var _shared_promise = require("../../app/shared_promise");

function make(resolver) {
  return new _shared_promise.local.Promise(resolver);
}

function resolve(value) {
  return _shared_promise.local.Promise.resolve(value);
}
function reject(error) {
  return _shared_promise.local.Promise.reject(error);
}