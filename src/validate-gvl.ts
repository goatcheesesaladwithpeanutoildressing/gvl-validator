import { ValidationErrorItem, ValidationResult } from "joi";

import { Gvl, ValidationResponse } from "./types";
import { gvlSchema } from "./validations";
import { getDataCategoryIds } from "./utils";

/**
 * Validate the input GVL.
 * @param input
 * @returns
 */
export const validateGvl = (input: Record<string, any>): ValidationResponse => {
  const validationContext = {
    dataCategoryIds: getDataCategoryIds(input),
  };

  const validationResult: ValidationResult<Gvl> = gvlSchema.validate(input, {
    abortEarly: false, // Note: required to always validate all fields
    context: validationContext,
  });

  return {
    issues: validationResult.error
      ? validationResult.error.details.map((error: ValidationErrorItem) => ({
          message: error.message,
          path: error.path.join("."),
        }))
      : null,
  } as ValidationResponse;
};
