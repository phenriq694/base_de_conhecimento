# Ract Router DOM

1. Install:
```
yarn add react-router-dom
```
```
yarn add @types/react-router-dom -D
```
2. Example:
### routes.tsx
```typescript
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" exact component={Repository} />
  </Switch>
);

export default Routes;
```
### App.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Sources:
Rockseat GoStack - Module First Project with React - Creating Routes