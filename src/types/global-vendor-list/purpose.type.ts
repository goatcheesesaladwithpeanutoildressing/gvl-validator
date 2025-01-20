import { Descriptable } from './descriptable-type';

export type Purpose = Descriptable & {
  illustrations: string[];
  consentable?: boolean;
  rightToObject?: boolean;
};
