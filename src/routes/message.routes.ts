import { Router } from 'express';
import { handleSendMessage, handleGetMessages, GetMessageForReceiver } from '../controllers';
import { sendMessageSchema } from '../validations';
import { authMiddleware, validate, rateLimitMiddleware } from '../middlewares';

const msgRouter = Router();

msgRouter.use(authMiddleware);

msgRouter.post('/', rateLimitMiddleware, validate(sendMessageSchema), handleSendMessage);
msgRouter.get('/:senderId', handleGetMessages);
msgRouter.get('/receiver/:receiverId', GetMessageForReceiver);

export { msgRouter };
