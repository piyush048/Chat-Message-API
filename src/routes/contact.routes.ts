import { Router } from 'express';
import { handleSendContactRequest,handleAcceptContactRequest,handleGetContacts,} from '../controllers';
import { requestContactSchema, acceptContactSchema } from '../validations';
import { authMiddleware, validate } from '../middlewares';

const contactRouter = Router();

contactRouter.use(authMiddleware);

contactRouter.post('/request', validate(requestContactSchema), handleSendContactRequest);
contactRouter.post('/accept', validate(acceptContactSchema), handleAcceptContactRequest);
contactRouter.get('/', handleGetContacts);

export { contactRouter };
