import Joi, { ObjectSchema } from "joi";

import { DataCategory } from "../types";

export const dataCategorySchema: ObjectSchema<DataCategory> = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
});
