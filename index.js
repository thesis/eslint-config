// This is a non-ESM JS file, so this rule can't be followed.
/* eslint-disable @typescript-eslint/no-var-requires */
const {
  rules: {
    "@typescript-eslint/naming-convention":
      airbnbTypeScriptNamingConventionRules,
  },
} = require("eslint-config-airbnb-typescript/lib/shared")

const {
  rules: { "no-param-reassign": airbnbNoParamReassignRules },
} = require("eslint-config-airbnb-base/rules/best-practices")
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./.tsconfig-eslint.json",
  },
  plugins: ["prettier", "no-only-tests"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Executive decision: semi-colons aren't removed by prettier for backwards
    // compatibility. We don't have that requirement 🔪
    semi: ["error", "never"],
    // Executive decision: Don't use `backtick quotes` unless you're using
    // interpolation, and prefer double quotes to single. Consistency is 🔑
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    // Add known-safe exceptions to no-param-reassign.
    "no-param-reassign": [
      airbnbNoParamReassignRules[0],
      {
        props: airbnbNoParamReassignRules[1].props,
        ignorePropertyModificationsFor:
          airbnbNoParamReassignRules[1].ignorePropertyModificationsFor,
        ignorePropertyModificationsForRegex: [
          ...(airbnbNoParamReassignRules[1]
            .ignorePropertyModificationsForRegex || []),
          "^immer", // For redux-toolkit reducers using immer.
        ],
      },
    ],
    "@typescript-eslint/naming-convention": [
      ...airbnbTypeScriptNamingConventionRules,
      // Allow underscore-only identifiers to indicate ignored positional variables.
      {
        selector: "variable",
        format: null,
        filter: {
          regex: "^_+$",
          match: true,
        },
        custom: {
          regex: "^_+$",
          match: true,
        },
      },
    ],
    // prefer the @typescript-eslint rule to the base
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    // .only tests being committed are typically a mistake
    "no-only-tests/no-only-tests": "error",
    "prettier/prettier": [
      "error",
      require("@thesis-co/prettier-config")
    ]
  }
}
