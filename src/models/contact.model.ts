import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  status: 'pending' | 'accepted';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema<IContact> = new Schema(
  {
    sender: { 
        type: Schema.Types.ObjectId, 
        ref: 'userModel', 
        required: true 
    },
    receiver: { 
        type: Schema.Types.ObjectId, 
        ref: 'userModel', 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'accepted'], 
        default: 'pending' 
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);
