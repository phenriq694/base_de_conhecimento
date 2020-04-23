# Reactotron

1. Download desktop application:
https://github.com/infinitered/reactotron/releases
2. Install libs:
```
yarn add reactotron-react-js reactotron-redux
```
3. Create a folder inside 'src/' called 'config' and create a file 'ReactotronConfig.js'.
```javascript
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// Only executes when the application is running in develop mode
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
```
4. If ESLint finds an error using 'console.tron', add the following code to the ESLint config file, in rules: 
```javascript
{
  "rules": {
    "no-console": ["error", { allow: ["tron"] }]
  }
}
``` 
5. In the 'index.js' file in the 'store' folder, add the following code to connect Reactotron to Redux:
```javascript
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enchancer = process.env.NODE_ENV === 'development' // 5
  ? console.tron.createEnhancer()
  : null;

const store = createStore(rootReducer);

export default store;
```
6. Import the Reactotron config file into the main component of the application, 'App.js'. This import must occur before importing 'store/index.js':
```javascript
import './config/ReactotronConfig';
```

. Test adding the following code into a component:
```javascript
console.tron.log('Hello')
```
## Sources:
- Rockseat GoStack - Module Flux Architecture - Reactotron + Redux.