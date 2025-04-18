import { Request, Response, NextFunction } from 'express';
import { sendContactRequest, acceptContactRequest, getAcceptedContacts,} from '../services';
import { logger } from '../config';
import { HTTP_CODES } from '../utils';

interface IRequest extends Request {
    user?: any;
}

export const handleSendContactRequest = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const contact = await sendContactRequest(req.user.id, req.body);
    res.status(HTTP_CODES.OK).json({ success: true, data: contact });
  } catch (error) {
    logger.error('Error sending contact request:', error);
    next(error);
  }
};

export const handleAcceptContactRequest = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const contact = await acceptContactRequest(req.user.id, req.body);
    res.status(HTTP_CODES.OK).json({ success: true, data: contact });
  } catch (error) {
    logger.error('Error accepting contact request:', error);
    next(error);
  }
};

export const handleGetContacts = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const contacts = await getAcceptedContacts(req.user.id);
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    logger.error('Error fetching contacts:', error);
    next(error);
  }
};
