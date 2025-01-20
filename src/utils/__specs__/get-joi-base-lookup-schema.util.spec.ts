import Joi, { ObjectSchema } from 'joi';
import { getJoiBaseLookupSchema } from '../../validators/joi/utils/get-joi-base-lookup-schema.util';

describe('Utils > getJoiBaseLookupSchema', () => {
  interface TestType {
    id: number;
    name: string;
  }

  const targetSchema: ObjectSchema<TestType> = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
  });

  const schema = getJoiBaseLookupSchema(targetSchema);

  it('should validate an object with valid positive integer string keys', () => {
    const input = {
      '1': { id: 1, name: 'Alice' },
      '42': { id: 42, name: 'Bob' },
    };
    const { error, value } = schema.validate(input);

    expect(error).toBeUndefined();
    expect(value).toEqual(input);
  });

  it('should reject keys that do not match the positive integer pattern', () => {
    const input = {
      '-1': { id: 1, name: 'Alice' }, // Invalid key
      abc: { id: 2, name: 'Bob' }, // Invalid key
    };
    const { error } = schema.validate(input);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toEqual('"-1" is not allowed');
  });

  it('should reject keys that are empty strings', () => {
    const input = {
      '': { id: 1, name: 'Alice' }, // Invalid key
    };
    const { error } = schema.validate(input);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toEqual('"value" is not allowed');
  });

  it('should reject values that do not match the target schema', () => {
    const input = {
      '1': { id: 'not-a-number', name: 'Alice' }, // Invalid id type
      '2': { id: 2 }, // Missing name
    };
    const { error } = schema.validate(input);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toEqual('"1.id" must be a number');
  });

  it('should validate an empty object', () => {
    const input = {};
    const { error, value } = schema.validate(input);

    expect(error).toBeUndefined();
    expect(value).toEqual({});
  });
});
