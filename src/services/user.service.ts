import { logger } from '../config';
import { IUser, userModel } from '../models';


export const getProfile = async (userId : string): Promise<IUser> => {
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
        logger.error("User not found!");
        throw new Error("User not found!");
    }
    return user;
}