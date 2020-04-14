# State & Immutability

1. To add and manipulated data into a component it's necessary use state. 
2. A state store this data and cannot be change, only recreated. 
3. A state in React must be immutable. 
4. To use state in a component we can use the useState React function. This function return an a array with two positions. The first is the state and the second is another function used to update the value state. 
```javascript
import React, { useState } from 'react';

function App() {
  const [projects, setProjects] = useState(['React App', 'React Native App']);

  function handleAddProject() {
    setProjects([...projects, 'New Project']);
  }

  return (
    <>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Add project</button>
    </>
  );
}

export default App;
```

## Sources:
- Rockseat GoStack - Module Front-end wit ReactJS - State and Immutability.