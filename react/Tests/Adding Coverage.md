# Adding Coverage 

1. Add the following key and value to generate and coverage:
```json
{
  "scripts": {
    "coverage": "react-app-rewired test --coverage --watchAll=false",
  },
  "collectCoverageFrom": [
      "!src/index.js",
      "!src/services/api.js"
    ],
}
```
2. Run the command 'yarn coverage' to generate the coverage;
3. To skip any file from the coverage, add the following key and the file path:
```json
{ 
  "collectCoverageFrom": [
    "!src/index.js",
    "!src/services/api.js"
  ],
}
```

## Sources:
Rockseat GoStack - React Tests - Coverage Report