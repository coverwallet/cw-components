"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = numberWithCommas;

function numberWithCommas(x) {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = exports["default"];