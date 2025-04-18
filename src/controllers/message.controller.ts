import { Request, Response, NextFunction } from 'express';
import { sendMessage, getMessagesWithContact, getAllMessagesToReceiver } from '../services';
import { logger } from '../config';
import { HTTP_CODES } from '../utils';

interface IRequest extends Request {
    user?: any;
}

export const handleSendMessage = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const message = await sendMessage(req.user.id, req.body);
    res.status(HTTP_CODES.ACCEPTED).json({ success: true, data: message });
  } catch (error) {
    logger.error('Error sending message:', error);
    next(error);
  }
};

export const handleGetMessages = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { senderId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const messages = await getMessagesWithContact(req.user.id, senderId, page, limit);
    res.status(HTTP_CODES.ACCEPTED).json({ success: true, data: messages });
  } catch (error) {
    logger.error('Error fetching messages:', error);
    next(error);
  }
};

export const GetMessageForReceiver = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { receiverId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const messages = await getAllMessagesToReceiver(req.user.id ,receiverId, page, limit);
    res.status(HTTP_CODES.ACCEPTED).json({ success: true, data: messages });
  } catch (error) {
    logger.error('Error fetching messages:', error);
    next(error);
  }
};
