/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDomainBase = setDomainBase;
var domainBase = exports.domainBase = 'https://firebasestorage.googleapis.com';

var downloadBase = exports.downloadBase = 'https://firebasestorage.googleapis.com';

var apiBaseUrl = exports.apiBaseUrl = '/v0';

var apiUploadBaseUrl = exports.apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
  domainBase = domainBase;
}
var configOption = exports.configOption = 'storageBucket';

var shortMaxOperationRetryTime = exports.shortMaxOperationRetryTime = 1 * 60 * 1000;

var defaultMaxOperationRetryTime = exports.defaultMaxOperationRetryTime = 2 * 60 * 1000;

var defaultMaxUploadRetryTime = exports.defaultMaxUploadRetryTime = 10 * 60 * 100;

var minSafeInteger = exports.minSafeInteger = -9007199254740991;