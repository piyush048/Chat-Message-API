import rateLimit from 'express-rate-limit';
import { AuthenticatedRequest } from './auth.middleware';


export const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each user to 5 requests per minute
  message: 'You can send only 5 messages per minute',
  keyGenerator: (req : AuthenticatedRequest) => req.user!.id, // rate-limit by user ID instead of IP
});
