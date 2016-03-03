"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIOS = isIOS;

function isIOS() {
  return window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/(iPod|iPhone|iPad)/);
}