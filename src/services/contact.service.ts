import { logger} from '../config';
import { Contact } from '../models';
import mongoose from 'mongoose';

export interface ContactRequestInput {
    receiverId: string;
}
  
export interface ContactAcceptInput {
    contactId: string;
}
  
export const sendContactRequest = async (senderId: string, data: ContactRequestInput) => {
  const { receiverId } = data;

  if (senderId === receiverId) {
    logger.error('You cannot send a request to yourself');
    throw new Error('You cannot send a request to yourself');
  }

  const existing = await Contact.findOne({
    sender: senderId,
    receiver: receiverId,
  });

  if (existing) {
    logger.error('Contact request already sent');
    throw new Error('Contact request already sent');
  }

  const contact = new Contact({
    sender: new mongoose.Types.ObjectId(senderId),
    receiver: new mongoose.Types.ObjectId(receiverId),
    status: 'pending',
  });

  await contact.save();

  return contact;
};

export const acceptContactRequest = async (userId: string, data: ContactAcceptInput) => {
  const { contactId } = data;

  const contact = await Contact.findById(contactId);

  if (!contact) {
    logger.error('Contact request not found');
    throw new Error('Contact request not found');
  }
  // console.log(contact.receiver.toString(), userId);
  // check if the user is the receiver of the contact request
  if (contact.receiver.toString() !== userId) {
    logger.error('You are not authorized to accept this request');
    throw new Error('You are not authorized to accept this request');
  }

  contact.status = 'accepted';
  await contact.save();

  return contact;
};

export const getAcceptedContacts = async (userId: string) => {
  const contacts = await Contact.find({
    status: 'accepted',
    $or: [
      { sender: userId },
      { receiver: userId },
    ],
  })
    .populate('sender', 'username email')
    .populate('receiver', 'username email');

  return contacts;
};

export const isContactAccepted = async (userAId: string, userBId: string): Promise<boolean> => {
  const contact = await Contact.findOne({
    $or: [
      { sender: userAId, receiver: userBId, status: 'accepted' },
      { sender: userBId, receiver: userAId, status: 'accepted' },
    ],
  });

  return !!contact;
};
