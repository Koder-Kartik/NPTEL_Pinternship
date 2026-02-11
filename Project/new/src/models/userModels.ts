import mongoose, {Schema, Document, Model} from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, unique: true, lowercase: true, index: true},
  passwordHash: {type: String, required: true},
}, 
{
  timestamps: true,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;