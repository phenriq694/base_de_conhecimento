# Prettier

1. Install:
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```
2. Add the following configuration in the 'eslintrc.json' file:
```json
{
  "extends": [
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
  ],
  "plugins": [
      "prettier"
  ],
    "prettier/prettier": "error"
}
```
3. Create a file called 'prettier.config.js' in the project's root folder and copy/paste the contents of the file with the same name into the folder of this file;

