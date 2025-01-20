import { ValidatorLib } from './enums';
import { CreateValidatorConfig } from './interfaces';
import { Validator } from './types';
import { JoiValidator } from './validators';
import { YupValidator } from './validators/yup/yup.validator';

export const createValidator = (config: CreateValidatorConfig): Validator => {
  return (
    {
      [ValidatorLib.JOI]: new JoiValidator(),
      [ValidatorLib.YUP]: new YupValidator(),
    }[config.lib] || new JoiValidator()
  );
};
