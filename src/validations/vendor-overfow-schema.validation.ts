import Joi, { ObjectSchema } from "joi";

import { VendorOverflow } from "../types";

export const vendorOverflowSchema: ObjectSchema<VendorOverflow> = Joi.object({
  httpGetLimit: Joi.allow(32, 128).required(),
});
