import Joi, { ObjectSchema } from "joi";

import { Purpose } from "../types";

export const purposeSchema: ObjectSchema<Purpose> = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  illustrations: Joi.array().items(Joi.string()).required(),
  consentable: Joi.boolean(),
  rightToObject: Joi.boolean(),
});
