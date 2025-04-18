import { Router } from 'express';
import { authMiddleware } from "../middlewares";
import { getProfile } from '../controllers';

const UserRouter = Router();

UserRouter.get('/me', authMiddleware, getProfile);

export {UserRouter};