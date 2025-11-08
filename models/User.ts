import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';  // Add this import

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);  
  next();
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);