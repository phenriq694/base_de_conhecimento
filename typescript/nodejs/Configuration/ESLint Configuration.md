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
Yes

Where does code run?
Node

Which style guide do you want to follow? 
Airbnb

What format do you want your config file to be in?
JSON
``` 
3. Install the following dependencies:
```
yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest
```

## Sources:
Rockseat GoStack - Module TypeScript - ESLint