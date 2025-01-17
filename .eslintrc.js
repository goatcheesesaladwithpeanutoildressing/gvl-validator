module.exports = {
    plugins: ["@typescript-eslint/eslint-plugin", "unused-imports"],
    extends: [
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    env: {
      node: true,
      jest: true,
    },
    root: true,
    ignorePatterns: [".eslintrc.js"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          tabWidth: 2,
          useTabs: false,
          endOfLine: "auto",
          semi: true,
          singleQuote: true,
          quoteProps: "as-needed",
          printWidth: 120,
          bracketSpacing: true,
          arrowParens: "always",
          trailingComma: "all",
        },
      ],
      "max-len": [
        "error",
        {
          code: 120,
          comments: 400,
          ignorePattern: "^import [^,]+ from |^export | implements ",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
        },
      ],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["if", "return", "block-like"],
        },
      ],
      "@typescript-eslint/no-empty-function": [
        "error",
        { allow: ["constructors"] },
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "private-static-field",
            "protected-static-field",
            "public-static-field",
            "private-instance-field",
            "protected-instance-field",
            "public-instance-field",
            "constructor",
            "private-static-method",
            "protected-static-method",
            "public-static-method",
            "private-instance-method",
            "protected-instance-method",
            "public-instance-method",
          ],
        },
      ],
      "no-duplicate-imports": ["error"],
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty": "off",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  };
  