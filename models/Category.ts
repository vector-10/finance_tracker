import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  color: { type: String, default: '#3B82F6' }
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);