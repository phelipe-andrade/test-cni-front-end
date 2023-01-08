"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const PhotoSchema = new _mongoose2.default.Schema({
  img: { type: String, require: true },
  url: { type: String, require: true }
});

exports. default = _mongoose2.default.model('PHOTO', PhotoSchema);