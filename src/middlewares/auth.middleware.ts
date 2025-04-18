import jwt, {JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { HTTP_CODES, ErrorMessages } from '../utils';
import { logger } from '../config';

interface DecodedUser extends JwtPayload {
  id: string;
}

export interface AuthenticatedRequest extends Request {
  user?: DecodedUser;
}

export const authMiddleware = (req : AuthenticatedRequest, res : Response, next : NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token){
    res.status(HTTP_CODES.UNAUTHORIZED).json({ success: false, message: ErrorMessages.UNAUTHORIZED});
    logger.error('No token provided');
    return;
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(HTTP_CODES.UNAUTHORIZED).json({ success: false, message: ErrorMessages.INVALID_TOKEN});
    logger.error('Invalid token',err);
  }
};

