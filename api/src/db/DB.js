import mongoose from 'mongoose';

// BANCO DE DADOS APENAS PARA TESTE;
mongoose.connect("mongodb+srv://phelipe353:MLCe6uH3cfW6Sd4N@cluster0.ttnyebe.mongodb.net/TEST-CNI?retryWrites=true&w=majority"
  , { useNewUrlParser: true, useUnifiedTopology: true });

import VehicleModel from './models/VehicleModel.js';

class DB {
  static async insertVehicle(vehicle) {
    return await VehicleModel.create(vehicle);
  }

  static async getAllVehicles() {
    return await VehicleModel.find();
  }

  static async getVehicle(id) {
    return await VehicleModel.findById(id);
  }

  static async updadeVehicle(id, vehicle) {
    return await VehicleModel.findByIdAndUpdate(id, vehicle);
  }

  static async removeVehicle(id) {
    return await VehicleModel.findByIdAndRemove(id);
  }
}

export default DB;
