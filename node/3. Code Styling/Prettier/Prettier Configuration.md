# Prettier Configuration

1. Install libs:
```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```
2. Add the following code into the 'eslintrc.json' file:
```javascript
{
  extends: ['airbnb-base', 'prettier'], 
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  }
}
```
3. Create a config file for Prettier in the root folder called 'prettier.config.js', and add the following code:
```javascript
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};
``` 

## Sources:
Rockseat GoStack - Starting GoBarber back-end - ESLint, Prettier & EditorConfig