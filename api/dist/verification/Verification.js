"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _MarriedWordsjs = require('./compare/MarriedWords.js'); var _MarriedWordsjs2 = _interopRequireDefault(_MarriedWordsjs);

class Verification {
  static compare(arrayProductsDB, searchString) {
    const result = [];
    for (const productDB of arrayProductsDB) {
      const compatible = _MarriedWordsjs2.default.compareString(productDB.title, searchString);
      if (compatible) result.push(productDB);
    }
    return result;
  }
}

exports. default = Verification;
