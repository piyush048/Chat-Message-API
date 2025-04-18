import { Request, Response, NextFunction } from 'express';
import * as userService from '../services';
import { HTTP_CODES } from '../utils';
import { logger } from '../config';

interface IRequest extends Request {
    user?: any;
}

export const getProfile = async (req : IRequest, res: Response, next : NextFunction): Promise<void> => {
    try{
      const user = await userService.getProfile(req.user.id);
      res.status(HTTP_CODES.OK).json({ success: true, user});
    } catch (err) {
      logger.error('Error fetching user profile:', err);
      next(err);
    }
};