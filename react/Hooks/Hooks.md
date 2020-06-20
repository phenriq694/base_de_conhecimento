# Hooks

## useState:
Allow to use states within functions without need to create the component as a class. 
```javascript
import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
```
## useEffect
Used to control the application lifecycle. 
```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
```
## useMemo:
Used when it's necessary execute an code snippet only when a especific information is changed. 
```javascript
import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState(['']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <strong>You have {tech.length} techs</strong>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
```
## useCallback:
Returns a function and avoids to reloading a function every time the component is created. It's reloaded only when a dependency is changed. 
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState(['']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  const techSize = useMemo(() => tech.length, [tech]);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>You have {techSize} techs.</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
```

## Sources:
Rockseat GoStack - Module React Hooks - Hook useState
Rockseat GoStack - Module React Hooks - Hook useEffect
Rockseat GoStack - Module React Hooks - Hook useMemo
Rockseat GoStack - Module React Hooks - Hook useCallback
