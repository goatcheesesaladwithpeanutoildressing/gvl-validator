import Joi, { ObjectSchema, CustomHelpers } from 'joi';

import { Vendor } from '../types';
import { vendorOverflowSchema } from './vendor-overfow-schema.validation';
import { vendorUrlSchema } from './vendor-url-schema.validation';

/**
 * Validate wether the input data category id is
 * present in the GVL data categories list.
 * @param value input data category id
 * @param helpers Joi helper functions
 * @returns
 */
const dataCategoryIdValidator = (value: number, helpers: CustomHelpers): number => {
  const dataCategoryIds: Set<number> = helpers.prefs.context.dataCategoryIds;

  const isValid = dataCategoryIds.has(value);

  if (!isValid) {
    throw new Error(`invalid data category id: ${value}`);
  }

  return value;
};

export const vendorSchema: ObjectSchema<Vendor> = Joi.object({
  id: Joi.number().integer().positive().min(1).required(),
  name: Joi.string().required(),
  usesCookies: Joi.boolean().required(),
  cookieMaxAgeSeconds: Joi.number()
    .integer()
    .when('usesCookies', {
      is: false,
      then: Joi.allow(null),
      otherwise: Joi.required(),
    }),
  cookieRefresh: Joi.boolean().required(),
  usesNonCookieAccess: Joi.boolean().required(),
  deviceStorageDisclosureUrl: Joi.string().uri().required(),
  dataDeclaration: Joi.array().items(Joi.number().integer().custom(dataCategoryIdValidator)),
  urls: Joi.array().items(vendorUrlSchema).min(1).required(),
  overflow: vendorOverflowSchema.optional(),
  deletedDate: Joi.date().iso().allow(null),
});
