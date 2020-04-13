#  React Routing

1. Install the dependency react-router-dom:
```
yarn add react-router-dom
```
2. Create a file inside the 'src/' folder called 'routes.js'. For the page configuration, create a folder called 'pages/' and within it the application pages. Example 'src/pages/Home/index.js'.
3. File 'routes.js':
```javascript
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from '.pages/AboutUs';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> {/* Use the 'exact' to avoid conflicting with other routes that also start with '/'. */}
        <Route path ="/aboutus" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  )
}
```

NOTE: If there is a component in the application that will do the navigation, like a Header, for example, it will need the 'BrowserRouter' component. So, use the 'BrowserRouter component in the component where that component that will made navagation is in use. 

4. Import the file 'routes.js' into 'App.js':
```javascript
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

## Sources:
- Rockseat GoStack - Module First Project with ReactJS - React Routing.