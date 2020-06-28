# Persist Authentication

1. Install:
```
yarn add redux-persist
```
2. Create a file into the 'src/store/' called 'persistReducer.js' and paste the following code:
```javascript
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
```
3. In the 'src/store/index.js' file, add the following configurations:
```javascript
// 1 Import the 'persistStore' function from the 'redux-persist'
import { persistStore } from 'redux-persist'; 
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers'; // 2 Import the persist file 

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];
//3 Add the function exported from the persist file 
const store = createStore(persistReducers(rootReducer), middlewares); 
// 4 Create a const with the persistStore function passing the 'store' const as params
const persistor = persistStore(store); 

sagaMiddleware.run(rootSaga);
// 5 Export an object with the store const and the const with the persistoStore function. 
export { store, persistor };
``` 
4. Change on all files that import the 'src/store/index.js' file to: 
```javascript
import { store } from './store';
```
5. In the 'src/App.js' file, import a component from the 'redux-persist' lib:
```javascript
import { PersistGate } from 'redux-persist/integration/react';
```
6. Also, import the 'persistor' value from the 'src/store/index.js' file:
```javascript
import { store, persistor } from './store';
```
7. Add the component import from the step 5 around the 'Router' component in the 'App' function and the 'persistor' value within this component:
```javascript
function App() {
  return (
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </PersistGate>
  );
}
```

## Sources:
Rockseat GoStack - Module GoBarber Web - Persisting authentication
