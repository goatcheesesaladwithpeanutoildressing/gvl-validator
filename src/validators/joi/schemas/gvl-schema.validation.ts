import Joi, { ObjectSchema } from 'joi';

import { DataCategory, Feature, Gvl, Purpose, Vendor } from '../../../types';
import { dataCategorySchema } from './data-category-schema.validation';
import { purposeSchema } from './purpose-schema.validation';
import { vendorSchema } from './vendor-schema.validation';
import { featureSchema } from './feature-schema.validation';
import { getJoiBaseLookupSchema } from '../../../utils';

export const gvlSchema: ObjectSchema<Gvl> = Joi.object({
  gvlSpecificationVersion: Joi.number().integer().positive().min(1).required(),
  vendorListVersion: Joi.number().integer().positive().min(1).required(),
  tcfPolicyVersion: Joi.number().integer().positive().min(1).required(),
  lastUpdated: Joi.date().iso().required(),
  purposes: getJoiBaseLookupSchema<Purpose>(purposeSchema).required(),
  specialPurposes: getJoiBaseLookupSchema<Purpose>(purposeSchema).required(),
  features: getJoiBaseLookupSchema<Feature>(featureSchema).required(),
  specialFeatures: getJoiBaseLookupSchema<Feature>(featureSchema).required(),
  dataCategories: getJoiBaseLookupSchema<DataCategory>(dataCategorySchema).required(),
  vendors: getJoiBaseLookupSchema<Vendor>(vendorSchema).required(),
});
