# ESLint

1. If your project was created with 'create-react-app', remove the following configuration from 'package.json' file:
```json
{
  "eslintConfig": {
    "extends": "react-app"
  },
}
```
2. Install:
```
yarn add eslint@6.8.0 -D
```
3. Run:
```
yarn eslint --init
```
4. Create a file in the root folder of the project, called '.eslintignore':
```
**/*.js
node_modules
build
/src/react-app-env.d.ts
```
