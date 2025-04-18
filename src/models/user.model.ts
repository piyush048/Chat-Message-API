import mongoose, { Model, Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}


const UserSchema : Schema<IUser> = new Schema<IUser>({
    name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },

  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is invalid!",
    ],
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: 6,
    select: false,
  },

}, { timestamps: true }
);


export const userModel: Model<IUser> = mongoose.model<IUser>("userModel", UserSchema);