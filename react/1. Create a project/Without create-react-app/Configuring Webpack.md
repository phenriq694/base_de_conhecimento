# Configuring Webpack

1. Install the packages: 
```bash
yarn add webpack webpack-cli babel-loader
```

2. Create a file in the root folder called 'webpack.config.js'.
```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
};
```
Inside of the 'module.rules' is where the loaders are configured. In the example above, the 'babel-loader' has been configured. To configure other, loaders such as 'file-loader' or 'css-loader', it's necessary to add another configuration object within the 'rules' array:

<strong>file-loader</strong>

Install loader package:

```bash
yarn add file-loader
```
Add the configuration within the 'rules' array:
```javascript
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
```

<strong>css-loader and style-loader</strong>

Install loaders package:

```bash
yarn add style-loader css-loader
```
Add the configuration within the 'rules' array:
```javascript
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' },
        ]
      },
```

3. To convert a file, use the commando below:
```bash
yarn webpack --mode development 
```

4. Install the 'webpack-dev-server' lib to monitor any code change:
```bash
yarn add webpack-dev-server -D
```

5. Add the following code to the webpack.config.js:
```javascript
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  }, 
```

6. Run the following command to start webpack server and monitor: 
```bash
yarn webpack-dev-server --mode development
```

## Sources:
- Rockseat GoStack - Module Front-end com ReactJS - Configuring Webpack.
- Rockseat GoStack - Module Front-end com ReactJS - Importing CSS and images.