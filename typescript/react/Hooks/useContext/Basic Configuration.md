# Basic Configuration 

1. Create a folder called 'context' in the 'src/' folder;
2. Create a file with the name of the context. Example: AuthContex.ts; 
3. Example of a basic context:
```typescript
import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
```
4. Import this file into your application's route or main file;
5. Add this component around the routes that needs to have this context;
6. Use the 'value' attribute to pass the information that will be shared with other components:
```javascript
import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext'; // 4

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Paulo' }}> {/* 5, 6 */ }
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
```
7. To retrive this information, in the component that is allowed to access the context, import the 'useContext' hook and the context;
8. Pass the context to the 'useContext' hook, it will return the context value: 
```typescript
import React, { useRef, useCallback, useContext } from 'react'; // 7 

import AuthContext from '../../context/AuthContext'; // 7

const SignIn: React.FC = () => {
  const { name } = useContext(AuthContext); // 8

  return (
    { /* component content */}
  );    
};

export default SignIn;
```

## Sources:
Rockseat GoStack - Starting Front-end Web - Context API