"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const CategorySchema = new _mongoose2.default.Schema({
  name_category: { type: String, required: true },
  percentage: { type: Number, required: true },
});

const CategoryModel = _mongoose2.default.model('categories', CategorySchema);

class Category {
  static async namesCategories() {
    const categories = [];
    const result = await CategoryModel.find();
    for (const res of result) {
      categories.push(res.name_category);
    }
    return categories;
  }

  static async categories() {
    const result = await CategoryModel.find();
    return result;
  }
}

exports. default = Category;
