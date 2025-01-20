import { ValidationResponse, Validator } from '../../types';

export class YupValidator implements Validator {
  constructor() {}

  validate(input: Record<string, any>): ValidationResponse {
    // TODO: implement validate

    return {
      issues: [],
    };
  }
}
