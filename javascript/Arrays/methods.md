# Arrays - Methods

## push(item)
Add an item at the end of the array.
```javascript
projects = []

project = { id: 1, title: "Project 1", owner: "Owner 1" }

projects.push(project)
```

## splice(index, numberOfItems) 
Removes items from an array. As parameters are passed, the index of an item and
the number of items that will be removed from the item passed in the first parameter. 
```javascript
projects = [
  { id: 1, title: "Project 1", owner: "Owner 1" }
  { id: 2, title: "Project 2", owner: "Owner 2" } // This will be removed.
  { id: 3, title: "Project 3", owner: "Owner 1" }
]

projects.splice(1, 1);
```

## findIndex(function)
Finds the index of an item if function's condition is true, for example. Case the
codition cannot be sastisfied, the method returns -1. 
```javascript 
const projects = [
  { id: 1, title: "Project 1", owner: "Owner 1" }
  { id: 2, title: "Project 2", owner: "Owner 2" } 
  { id: 3, title: "Project 3", owner: "Owner 1" }
]

const projectIndex = projects.findIndex(project => project.id === 2);
```  