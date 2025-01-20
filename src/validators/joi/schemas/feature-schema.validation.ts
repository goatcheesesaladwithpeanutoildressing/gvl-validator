import Joi, { ObjectSchema } from 'joi';

import { Feature } from '../../../types';

export const featureSchema: ObjectSchema<Feature> = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  illustrations: Joi.array().items(Joi.string()).required(),
});
