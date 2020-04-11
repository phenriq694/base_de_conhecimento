# Middleware

A middleware is an request intercepter that totally interrupts an request or change
data from request. 

Example:
```javascript
const express = require('express');
const { uuid } = require('uuidv4'); 

const app = express();

app.use(express.json());

const projects = [];

// Middleware logRequests
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  // Go to the next middleware, without this command the request is interrupted.
  return next();
}

// Using the middleware
app.use(logRequests);

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects; 

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  const project = {
    id, 
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🦈️ Server On!');
})
``` 

The Middleware can be used only in a specific route, example:
```javascript
app.get('/projects', logRequests, (request, response) => {
  const { title } = request.query;

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects; 

  return response.json(results);
});
```
Output:
```
[GET] /projects
```
Or in a route pattern, example:
```javascript
function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}

app.use('/projects/:id', validateProjectId) 
```
In the example above, the middleware will be used only em the 'PUT' and 'DELETE'
routes.

It's possible to add code after the 'next()' command. This code will be runned 
after the request. 
```javascript
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}
```
Output after the GET request:
```
[GET] /projects: 2.675ms 
```

## Sources: 
- Rocketseat GoStack - Module Back-end with Node.js - Middlewares. 