import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  img: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  age: { type: String, required: true },
  value: { type: String, required: true },
});

export default mongoose.model('VEHICLE', VehicleSchema);
