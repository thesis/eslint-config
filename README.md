# eslint-config

A shared ESLint config based off Airbnb style guides. Covers JS and TS including
React / JSX.

## Getting started

1. Install the shared config with `yarn`

```bash
yarn add -D https://github.com/thesis/eslint-config.git
```

2. In your `.eslintrc` add:

```js
module.exports = {
  root: true,
  extends: [
      "@thesis-co",
  ],
  parserOptions: {
    project: "./.tsconfig-eslint.json",
  },
}
```

 3. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "lint:js": "eslint . --ext .js",
    "lint:fix:js": "eslint . --ext .js --fix",
    "lint:ts": "eslint . --ext .ts",
    "lint:fix:ts": "eslint . --ext .ts --fix"
  },
}
```

## Adding a pre-commit hook using [pre-commit](https://pre-commit.com)

```yaml
 - repo: local
   hooks:
    - id: lint-ts
      name: 'lint ts'
      entry: /usr/bin/env bash -c "yarn lint:ts"
      files: '\.ts$'
      language: script
      description: "Checks TS code according to the package's linter configuration"
    - id: lint-js
      name: 'lint js'
      entry: /usr/bin/env bash -c "yarn lint:js"
      files: '\.js$'
      language: script
      description: "Checks JS code according to the package's linter configuration"
```
