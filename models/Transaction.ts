import mongoose, { Document, Schema } from 'mongoose';

interface ITransaction extends Document {
    userId: mongoose.Types.ObjectId;
    amount: number;
    type: 'income' | 'expense';
    category: string;
    date: Date;
    notes?: string;
  }

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);