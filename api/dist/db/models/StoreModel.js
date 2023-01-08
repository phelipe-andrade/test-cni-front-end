"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const StoreSchema = new _mongoose2.default.Schema({
  name_store: { type: String, required: true },
  url: { type: String, required: true },
  input: { type: String, required: true },
  product: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
  link_product: { type: String, required: true },
  next_page: { type: String, default: null },
  last_number_page: { type: String, default: null },
  single_page: {
    img: { type: String, required: true },
    price: { type: String, required: true },
  },
});

const StoreModel = _mongoose2.default.model('STORES', StoreSchema);

class Stores {
  static async getAllStores() {
    await StoreModel.find();
  }

  static async getOneStore(store) {
    await StoreModel.findOne({ name_store: store });
  }

  static async getNameAllStores() {
    const stores = [];
    const result = await StoreModel.find();
    for (const res of result) {
      stores.push(res.name_store);
    }
    return stores;
  }
}

exports. default = Stores;
