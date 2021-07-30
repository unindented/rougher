module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/array-type": ["error"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["default", "variableLike", "memberLike"],
        format: ["camelCase"],
      },
      {
        selector: ["enumMember", "typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: ["interface", "typeAlias"],
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-implied-eval": ["error"],
    "@typescript-eslint/no-parameter-properties": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-throw-literal": ["error"],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
    "@typescript-eslint/no-unnecessary-condition": ["error"],
    "@typescript-eslint/no-unsafe-call": ["error"],
    "@typescript-eslint/no-unsafe-member-access": ["error"],
    "@typescript-eslint/no-unsafe-return": ["error"],
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": ["error"],
    "@typescript-eslint/prefer-readonly": ["error"],
    "@typescript-eslint/restrict-plus-operands": ["error"],
    "@typescript-eslint/restrict-template-expressions": ["error"],
    "@typescript-eslint/return-await": ["error"],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],
    "array-callback-return": ["error"],
    "arrow-body-style": ["error"],
    "block-scoped-var": ["error"],
    "callback-return": ["error"],
    complexity: ["error", 15],
    "consistent-return": ["error"],
    curly: ["error"],
    "default-case": ["error"],
    "dot-notation": ["error"],
    eqeqeq: ["error", "always"],
    "guard-for-in": ["error"],
    "handle-callback-err": ["error"],
    "import/default": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: false },
        "newlines-between": "always",
      },
    ],
    "max-classes-per-file": ["error", 1],
    "no-buffer-constructor": ["error"],
    "no-caller": ["error"],
    "no-constructor-return": ["error"],
    "no-div-regex": ["error"],
    "no-else-return": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    "no-invalid-this": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-multi-spaces": ["error"],
    "no-multi-str": ["error"],
    "no-new-func": ["error"],
    "no-new-require": ["error"],
    "no-new-wrappers": ["error"],
    "no-new": ["error"],
    "no-param-reassign": ["error"],
    "no-path-concat": ["error"],
    "no-proto": ["error"],
    "no-restricted-globals": ["error"],
    "no-restricted-properties": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-shadow": "off",
    "no-template-curly-in-string": ["error"],
    "no-throw-literal": ["error"],
    "no-undef-init": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-return": ["error"],
    "no-void": ["error"],
    "no-warning-comments": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "prefer-regex-literals": ["error"],
    radix: ["error"],
    "require-atomic-updates": ["error"],
    "require-unicode-regexp": ["error"],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "wrap-iife": ["error"],
    yoda: ["error"],
  },
  overrides: [
    {
      files: "**/*.test.ts",
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};