import { DataCategory } from "../types";

/**
 * Extract and return the data category ids disclosed in the input GVL.
 * @param rawData
 * @returns
 */
export const getDataCategoryIds = (rawData: Record<string, any>): Set<number> =>
  new Set(
    Object.values(rawData?.dataCategories || [])
      .map((dataCategory: DataCategory) => dataCategory.id)
      .filter(Boolean)
  );
