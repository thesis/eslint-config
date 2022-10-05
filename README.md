# eslint-config

A shared ESLint config based off Airbnb style guides. Covers JS and TS including
React / JSX.

## Getting started

1. Install `eslint` and the shared config with `yarn`

```bash
yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add -D @thesis-co/eslint-config
```

2. In your `.eslintrc.js` add:

```js
module.exports = {
  root: true,
  extends: [
      "@thesis-co"
  ]
}
```

3. Add `.tsconfig-eslint.json`. You can add this file manually with custom configuration or symlink this file with the default options.

```bash
ln -s ./node_modules/@thesis-co/eslint-config/.tsconfig-eslint.json ./.tsconfig-eslint.json
```


 4. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "lint:eslint": "eslint .",
    "lint:fix:eslint": "eslint . --fix"
  }
}
```

## Sample config for related [pre-commit](https://pre-commit.com) hook

```yaml
 - repo: local
   hooks:
    - id: lint-ts
      name: 'lint ts'
      entry: /usr/bin/env bash -c "yarn lint:ts"
      files: '\.tsx$'
      language: script
      description: "Checks TS code according to the package's linter configuration"
    - id: lint-js
      name: 'lint js'
      entry: /usr/bin/env bash -c "yarn lint:js"
      files: '\.jsx$'
      language: script
      description: "Checks JS code according to the package's linter configuration"
```
