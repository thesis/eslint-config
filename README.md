# eslint-config

A shared ESLint config based off Airbnb style guides. Covers JS and TS including
React / JSX.

## Getting started

Add the shared config with `yarn`

```bash
yarn add -D @tallyho/eslint-config
```

... and include a simple `.eslintrc.js` to get started.

```javascript
module.exports = {
  root: true,
  extends: [
      "@tallyho/eslint-config",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
}
```
