import { VendorOverflow } from './vendor-overflow.type';
import { VendorUrl } from './vendor-url.type';

export type Vendor = {
  id: number;
  name: string;
  usesCookies: boolean;
  cookieMaxAgeSeconds?: number | null;
  cookieRefresh: boolean;
  usesNonCookieAccess: boolean;
  deviceStorageDisclosureUrl: string;
  deletedDate?: string;
  overflow?: VendorOverflow;
  dataDeclaration: number[];
  urls: VendorUrl[];
};
