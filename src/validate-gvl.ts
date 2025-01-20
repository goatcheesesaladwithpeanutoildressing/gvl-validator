import { ValidationResponse } from './types';
import { ValidatorLib } from './enums';
import { createValidator } from './create-validator-factory';

/**
 * Validate the input GVL.
 * @param input
 * @returns
 */
export const validateGvl = (input: Record<string, any>): ValidationResponse =>
  createValidator({ lib: ValidatorLib.JOI }).validate(input);
