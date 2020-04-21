# eslint-import-resolver-typescript

1. Install lib:
```bash
yarn add -D eslint-import-resolver-typescript
```

2. Add the following code into the 'eslintrc.json' file:
```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
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

## Sources:
Rockseat GoStack - Module First Project with Node.js - Importing TS files
