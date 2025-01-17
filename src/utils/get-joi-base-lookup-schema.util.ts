import Joi, { ObjectSchema } from "joi";
import { POSITIVE_INTEGER_REGEX } from "../constants";

/**
 * Generate a Joi schema to validate wether 
 * the input data is an object where the keys are numerical positive ids.
 * Expected input format:
 * {
 *  1: {
 *     some-key: some-value
 *     ....
 *  },
 *  ...
 * }
 * @param targetSchema 
 * @returns 
 */
export const getJoiBaseLookupSchema = <T>(targetSchema: ObjectSchema<T>): ObjectSchema<T> => Joi.object()
.pattern(Joi.string().regex(POSITIVE_INTEGER_REGEX), targetSchema)