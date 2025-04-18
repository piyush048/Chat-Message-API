import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  message: string;
  createdAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema(
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
    message: { 
        type: String, 
        required: true 
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } } // Only createdAt
);

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
