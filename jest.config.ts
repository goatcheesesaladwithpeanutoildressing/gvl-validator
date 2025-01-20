import path from "path";
import { getBaseJestConfig } from "./jest-base.config";
import type { Config } from "jest";

const rootDir = path.resolve(__dirname);

const jestConfig: Config = {
  ...getBaseJestConfig(rootDir),
};

export default jestConfig;
