import mongoose from 'mongoose';

const MoveSchema = new mongoose.Schema({
  game: {
    type: String,
  },
  board: [String],
  move: {
    cell: {
      type: Number,
      min: 0,
      max: 8,
    },
    value: {
      type: String,
      enum: ['o', 'x'],
    }
  }
});

export default mongoose.model('Move', MoveSchema);