import { logger } from '../config';
import { Message } from '../models';
import { isContactAccepted } from '../services'; // we already wrote this!
import mongoose from 'mongoose';

export interface SendMessageInput {
    receiverId: string;
    message: string;
}

export const sendMessage = async (senderId: string, data: SendMessageInput) => {
  const { receiverId, message } = data;

  if (senderId === receiverId) {
    logger.error('User tried to message themselves');
    throw new Error('You cannot message yourself');
  }

  const contactExists = await isContactAccepted(senderId, receiverId);
  if (!contactExists) {
    logger.error('User tried to message a non-accepted contact');
    throw new Error('You can only message accepted contacts');
  }

  // Rate limiting logic will be handled in middleware (explained below)

  const newMessage = new Message({
    sender: new mongoose.Types.ObjectId(senderId),
    receiver: new mongoose.Types.ObjectId(receiverId),
    message,
  });

  await newMessage.save();
  return newMessage;
};

export const getMessagesWithContact = async (userId: string, senderId: string, page: number, limit:number) => {
  const skip = (page - 1) * limit;

  const messages = await Message.find({
    $or: [
      { sender: userId, receiver: senderId },
      { sender: senderId, receiver: userId },
    ],
  })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return messages;
};


export const getAllMessagesToReceiver = async (userId: string, receiverId: string, page: number, limit: number) => {
    const skip = (page - 1) * limit;

    const messages = await Message.find({
        $or: [
          { sender: userId, receiver: receiverId },
          { sender: receiverId, receiver: userId },
        ],
    })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    
    return messages;
};


