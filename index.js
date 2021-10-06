// This is a JS file, so this rule can't be followed.
/* eslint-disable @typescript-eslint/no-var-requires */
const {
  rules: { "no-param-reassign": airbnbNoParamReassignRules },
} = require("eslint-config-airbnb-base/rules/best-practices")
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./.tsconfig-eslint.json",
  },
  plugins: ["prettier"],
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
    "semi": ["error", "never"],
    "quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/quotes": ["error", "double"],
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
    "prettier/prettier": [
      "error",
      require("@thesis-co/prettier-config")
    ]
  }
}
