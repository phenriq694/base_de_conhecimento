# Navigation with Saga

1. To navigate to another page after trigger an action, as example, it's necessary to use the 'history' package;
2. Install package:
```
yarn add history;
```
3. Create a file inside the 'src/services/' folder called 'history':
```javascript
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;
```
4. Add this file in the main component:
```javascript
import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routers />
    </Router>
  )
}

export default App;
```
5. Import this file into the component that will be used;
6. To navigate to another page:
```javascript
history.push('/pageName');
```
## Sources:
- Rockseat GoStack - Module Flux Architecture - Navigating the Saga.