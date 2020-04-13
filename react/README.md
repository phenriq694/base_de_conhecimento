<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://user-images.githubusercontent.com/54601930/73386759-30e0c100-42ae-11ea-8587-fc4a40e63e6a.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  React
</h2>

### What is React?
- Library to create interfaces;
- Used to build Singe-Page-Applications;

### React, ReactJS and React Native... All the same?
- React: Referring only to the library to build interfaces; 
- ReactJS: React + React DOM lib. Manipulation of elements in the browser;
- React Native: React + native elements. Used to build mobile applications. 

### Pros:
- Code organization:
  - Componization.
- Responsability division:
  - Back-end: Bussines Rule;
  - Front-end: Interface;
- One API, multiples clients;
- Declarative  Programming;

### JSX (JavaScript + XML):
- Write HTML inside Javascript;
- With React we can create our elements;
```javascript
// Before JSX
function Button() {
  return React.createElement(
    'button',
    { type: button },
    Reac.createElement(
      'span',
      { class: 'icon' }
    )
  )
}

<button type="button">
  <span class="icon"></span>
</button>

// With JSX
function Button() {
  return (
    <button type="button">
      <span class="icon"></span>
    </button>
  )
}
``` 

### Sintax:
- Only Javascript.
```javascript
import React from 'react';

import './button.css';
import icon from './button.png';

function Button() {
  return (
    <button>
      <img src={icon} />
    </button>
  );
}
```

## Sources: 
- Rockseat GoStack - Module Introduction to React - React concepts. 