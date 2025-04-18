import Joi from 'joi';

export const requestContactSchema = Joi.object({
  receiverId: Joi.string().required(),
});

export const acceptContactSchema = Joi.object({
  contactId: Joi.string().required(),
});
