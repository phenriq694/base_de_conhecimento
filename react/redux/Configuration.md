# Configuration

1. Install libs:
```
yarn add redux react-redux
``` 
2. Create a folder in 'src/' called 'store';
3. Create a file called 'index.js' in 'src/store/', and configure;
```javascript
import { createStore } from 'redux';

const store = createStore(cart);

export default store;
```
4. Create a folder in 'src/store/' called 'modules'. Inside it, create another folder for the reducers that the application will need; 
5. Inside the reducer folder, create a file called 'reducer.js', and configure it:
```javascript
export default function cart() {
    return [];
}
```
6. Create another file in 'src/store/modules' called 'rootReducer.js'. Import and combine all reducers: 
```javascript
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
    cart,
});
```
7. Add the rootReducer file in the 'store/index.js' file: 
```javascript
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
```
8. Import 'Provider' component from 'react-redux' in the application main componentes, 'App.js', and add it around all application components. After this, all components will have access to redux;
9. Import 'store/index.js' file and add as an atributte in 'Provider' component:
```javascript
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
```

## Sources:
- Rockseat GoStack - Module Flux Architecture - Configuring Redux.