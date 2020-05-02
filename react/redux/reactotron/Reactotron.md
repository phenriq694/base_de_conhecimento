# Reactotron

1. The following package:
```bash
yarn add reactotron-redux-saga
``` 
2. Import and use the package in the 'ReactotronCofig' file:
```javascript
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga'; // 2

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga()) // 2
    .connect();

  tron.clear();

  console.tron = tron;
}
```
3. Also configure in the 'src/store/' 'index.js' file:
```javascript
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
``` 
## Sources:
- Rockseat GoStack - Module Flux Architecture - Reactotron + Saga.