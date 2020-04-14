# Configuring Babel
Convert the react code for the browser to understand. 

1. Install the packages: 
```bash
yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli @babel/plugin-transform-runtime
```

2. Create a file in the root folder called 'babel.config.js'.
```javascript
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
```

3. To convert a file, use the commando below:
```bash
yarn babel path_file --out-file public/bundle.js 
```

For other configurations, acess: https://babeljs.io/docs/en/configuration#babelconfigjson


## Sources:
- Rockseat GoStack - Module Front-end com ReactJS - Configuring Babel.