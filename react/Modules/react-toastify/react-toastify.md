# react-toastify

1. Install the package:
```
yarn add react-toastify
```

2. In the main component, import and add:
```javascript
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer autoClose={3000} /> { /* autoClose: time of the pop-out in seconds */ }
    </BrowserRouter>
  )
}

export default App;
```
3. Import in the global css file:
```javascript
import 'react-toastify/dist/ReactToastify.css';
```

4. Import in the file that the Toastify will be used:
```javascript
import { toast } from 'react-toastify';
```

## Types of pop-outs

### error
```javascript
toast.error('Error!');
```

## Sources:
- Rockseat GoStack - Module Flux Architecture - React Toastify.