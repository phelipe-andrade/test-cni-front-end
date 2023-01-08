"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CompareStringjs = require('./CompareString.js'); var _CompareStringjs2 = _interopRequireDefault(_CompareStringjs);

class MarriedWords {
  static compareString(productDB, searchString) {
    const arrayStringDB = _CompareStringjs2.default.arrayWords(productDB);
    const arrayStringWeb = _CompareStringjs2.default.arrayWords(searchString);
    const locate = _CompareStringjs2.default.locateMarried(arrayStringDB, arrayStringWeb);
    return locate;
  }
}

exports. default = MarriedWords;
