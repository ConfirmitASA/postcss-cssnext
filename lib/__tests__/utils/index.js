"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exposes functions
 *
 * @type {Object}
 */
/**
 * Module dependencies
 */
exports.default = {
  /**
   * get fixture path
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture filename
   */
  fixturePath: function fixturePath(name, ext) {
    ext = ext !== undefined ? ext : ".css";
    return (0, _path.join)("src", "__tests__", "fixtures", name + ext);
  },


  /**
   * read a fixture
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture content
   */
  readFixture: function readFixture(name, ext) {
    return _fs2.default.readFileSync(this.fixturePath(name, ext), "utf8");
  },


  /**
   * read a fixture
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture content
   */
  write: function write(name, content) {
    return _fs2.default.writeFileSync(name, content);
  }
};