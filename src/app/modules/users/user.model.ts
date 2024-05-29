import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Consumer'] },
});

export const User = model<IUser>('User', userSchema);
