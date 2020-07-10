# Root Import

1. Intall: 
```
npm install babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

2. Add the following code into the 'babel-config.js' file:
```js
module.exports = {
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};

```
4. To import other files now, use the '~' char to reference the 'src' folder:
```javascript
import file from '~/pages/Home';
```
5. Add into the 'eslintrc.js' file the following configuration to avoid eslint errors messages:
```js
{
  settings: {
  "import/resolver": {
    "babel-plugin-root-import": {
      rootPathSuffix: "src"
    },
  },
}
```
6. Create a file in the root folder called 'jsconfig.json' and add the following settings to allow navigation to the file by pressing the 'CTRL' key and clicking on the file path:
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

## Sources:
Rockseat GoStack - Module GoBarber Mobile - Configuring Root Import