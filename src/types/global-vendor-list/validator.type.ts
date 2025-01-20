import { ValidationResponse } from '../validation-response.type';

export interface Validator {
  validate(input: Record<string, any>): ValidationResponse;
}
