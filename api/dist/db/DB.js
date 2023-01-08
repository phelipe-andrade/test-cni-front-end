"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

// BANCO DE DADOS APENAS PARA TESTE;
_mongoose2.default.connect("mongodb+srv://phelipe353:MLCe6uH3cfW6Sd4N@cluster0.ttnyebe.mongodb.net/TEST-CNI?retryWrites=true&w=majority"
  , { useNewUrlParser: true, useUnifiedTopology: true });

var _VehicleModeljs = require('./models/VehicleModel.js'); var _VehicleModeljs2 = _interopRequireDefault(_VehicleModeljs);

class DB {
  static async insertVehicle(vehicle) {
    return await _VehicleModeljs2.default.create(vehicle);
  }

  static async getAllVehicles() {
    return await _VehicleModeljs2.default.find();
  }

  static async getVehicle(id) {
    return await _VehicleModeljs2.default.findById(id);
  }

  static async updadeVehicle(id, vehicle) {
    return await _VehicleModeljs2.default.findByIdAndUpdate(id, vehicle);
  }

  static async removeVehicle(id) {
    return await _VehicleModeljs2.default.findByIdAndRemove(id);
  }
}

exports. default = DB;
