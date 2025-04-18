import Joi from 'joi';

export const sendMessageSchema = Joi.object({
  receiverId: Joi.string().required(),
  message: Joi.string().max(500).required(),
});
