import { Purpose } from "./purpose.type";

export type Feature = Omit<Purpose, "consentable" | "rightToObject">;
