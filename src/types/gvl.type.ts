import { DataCategory } from "./data-category.type";
import { Vendor } from "./vendor.type";
import { Purpose } from "./purpose.type";
import { Feature } from "./feature.type";

export type Gvl = {
  gvlSpecificationVersion: number;
  vendorListVersion: number;
  tcfPolicyVersion: number;
  lastUpdated: string;
  purposes: Record<string, Purpose>;
  specialPurposes: Record<string, Purpose>;
  features: Record<string, Feature>;
  specialFeatures: Record<string, Feature>;
  dataCategories: Record<string, DataCategory>;
  vendors: Record<string, Vendor>;
};
