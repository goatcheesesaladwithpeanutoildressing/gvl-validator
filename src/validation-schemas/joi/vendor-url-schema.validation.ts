import Joi, { ObjectSchema } from 'joi';

import { VendorUrl } from '../../types';

export const vendorUrlSchema: ObjectSchema<VendorUrl> = Joi.object({
  langId: Joi.string().alphanum().length(2).case('lower').required(), // alpha2
  privacy: Joi.string().uri().required(),
  legIntClaim: Joi.string().uri().required(),
});
