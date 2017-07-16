/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contains = contains;
exports.clone = clone;
exports.remove = remove;
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}

function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}

function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}