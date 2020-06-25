# ESLint Configuration

1. Install the lib:
```bash
yarn add eslint -D 
```
2. Start ESLint configuration:
```bash
yarn eslint --init 
``` 
Choose the options:
```
How would you like to yuse ESLint?
To check syntax, find problems, and enforec code style

What type of modules does your project use?
JavaScript modules (import/export)

Which framework dows your project use?
None of these

Does your project use TypeScript? 
No

Where does code run?
Node

Which style guide do you want to follow? 
Airbnb

What format do you want your config file to be in?
JSON
``` 
3. Accept the installation of the dependencies, delete the file 'package-lock.json' that will be created and run the command 'yarn' to reinstall the dependencies using yarn.

4. Add the following code into 'eslintrc.js' file:
```javascript
module.exports = {
  rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  }
};
```

5. To fix all files in the application:
```
yarn eslint --fix src --ext .js
```

## Sources:
Rockseat GoStack - Starting GoBarber back-end - ESLint, Prettier & EditorConfig