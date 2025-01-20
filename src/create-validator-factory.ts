import { ValidatorLib } from './enums';
import { CreateValidatorOptions } from './interfaces';
import { Validator } from './types';
import { JoiValidator } from './validators';
import { YupValidator } from './validators/yup.validator';

export const createValidator = (options: CreateValidatorOptions): Validator => {
  return {
    [ValidatorLib.JOI]: new JoiValidator(),
    [ValidatorLib.YUP]: new YupValidator(),
  }[options.lib];
};
