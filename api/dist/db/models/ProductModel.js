"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const ProductSchema = new _mongoose2.default.Schema({
  category: { type: String, required: true },
  store: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true },
  img: { type: String, default: '' },
  time: { type: Number, default: '' },
  year: {
    jan: { type: Number, default: '' },
    feb: { type: Number, default: '' },
    mar: { type: Number, default: '' },
    apr: { type: Number, default: '' },
    may: { type: Number, default: '' },
    jun: { type: Number, default: '' },
    jul: { type: Number, default: '' },
    aug: { type: Number, default: '' },
    sep: { type: Number, default: '' },
    oct: { type: Number, default: '' },
    nov: { type: Number, default: '' },
    dec: { type: Number, default: '' },
  },
});
/* eslint-disable */
class Products {
  static async productsByCategory(category) {
    const byCategory = _mongoose2.default.model(category, ProductSchema);
    return await byCategory.find();
  }
}

exports. default = Products;
