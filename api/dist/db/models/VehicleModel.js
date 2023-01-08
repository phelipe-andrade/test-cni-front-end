"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const VehicleSchema = new _mongoose2.default.Schema({
  img: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  age: { type: String, required: true },
  value: { type: String, required: true },
});

exports. default = _mongoose2.default.model('VEHICLE', VehicleSchema);
