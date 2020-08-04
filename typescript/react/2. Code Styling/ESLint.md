# ESLint

1. After configure ESLint, install the following lib to configure ESLint to typescript:
```
yarn add eslint-import-resolver-typescript -D
```
2. Add the following configuration in the 'eslintrc.json' file:
```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```