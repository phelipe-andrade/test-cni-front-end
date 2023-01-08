import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
  img: { type: String, require: true },
  url: { type: String, require: true }
});

export default mongoose.model('PHOTO', PhotoSchema);