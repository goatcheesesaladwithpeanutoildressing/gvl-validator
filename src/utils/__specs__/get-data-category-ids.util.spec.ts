import { getDataCategoryIds } from '../get-data-category-ids.util';

describe('Utils > getDataCategoryIds', () => {
  it('should properly return a set of unique data category ids', () => {
    const mockRawData = {
      dataCategories: {
        1: {
          id: 1,
        },
        2: {
          id: 2,
        },
      },
    };

    expect(getDataCategoryIds(mockRawData)).toEqual(new Set([1, 2]));
  });

  it('should handle invalid data categories formats gracefully', () => {
    const mockRawDataDataCategoriesBadFormatArray = {
      dataCategories: [],
    };

    expect(getDataCategoryIds(mockRawDataDataCategoriesBadFormatArray)).toEqual(new Set([]));

    const mockRawDataDataCategoriesBadFormatSingleObject = {
      dataCategories: {
        id: 1,
      },
    };

    expect(getDataCategoryIds(mockRawDataDataCategoriesBadFormatSingleObject)).toEqual(new Set([]));
  });

  it('should handle null, empty, undefined data categories gracefully', () => {
    const mockRawDataDataCategoriesNull = {
      dataCategories: null,
    };

    expect(getDataCategoryIds(mockRawDataDataCategoriesNull)).toEqual(new Set([]));

    const mockRawDataDataCategoriesUndefined = {};

    expect(getDataCategoryIds(mockRawDataDataCategoriesUndefined)).toEqual(new Set([]));

    const mockRawDataNull = null;

    expect(getDataCategoryIds(mockRawDataNull)).toEqual(new Set([]));
  });
});
