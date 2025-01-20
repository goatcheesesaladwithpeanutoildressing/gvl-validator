import { validateGvl } from '../validate-gvl';
import { mockValidGvl, mockInvalidGvlRootKeys, mockInvalidGvlMissingRootKeys } from '../__mocks__';

describe('validateGvl', () => {
  describe('valid cases', () => {
    it('should return no issues if the input GVL successfully passes the validation', () => {
      expect(validateGvl(mockValidGvl)).toEqual({
        issues: null,
      });
    });

    describe('invalid cases', () => {
      it('should gracefully handle invalid GVL root keys/values and return proper issues', () => {
        expect(validateGvl(mockInvalidGvlRootKeys)).toEqual({
          issues: [
            {
              message: '"gvlSpecificationVersion" must be a number',
              path: 'gvlSpecificationVersion',
            },
            {
              message: '"vendorListVersion" must be a number',
              path: 'vendorListVersion',
            },
            {
              message: '"tcfPolicyVersion" must be a number',
              path: 'tcfPolicyVersion',
            },
            {
              message: '"lastUpdated" must be in ISO 8601 date format',
              path: 'lastUpdated',
            },
          ],
        });
      });

      it('should gracefully handle missing required GVL root keys and return proper issues', () => {
        expect(validateGvl(mockInvalidGvlMissingRootKeys)).toEqual({
          issues: [
            {
              message: '"gvlSpecificationVersion" is required',
              path: 'gvlSpecificationVersion',
            },
            {
              message: '"vendorListVersion" is required',
              path: 'vendorListVersion',
            },
            {
              message: '"tcfPolicyVersion" is required',
              path: 'tcfPolicyVersion',
            },
            { message: '"lastUpdated" is required', path: 'lastUpdated' },
            { message: '"purposes" is required', path: 'purposes' },
            {
              message: '"specialPurposes" is required',
              path: 'specialPurposes',
            },
            { message: '"features" is required', path: 'features' },
            {
              message: '"specialFeatures" is required',
              path: 'specialFeatures',
            },
            { message: '"dataCategories" is required', path: 'dataCategories' },
            { message: '"vendors" is required', path: 'vendors' },
          ],
        });
      });
    });
  });
});
