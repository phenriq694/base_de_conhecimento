# MVC

## Model:
Store the database abstraction, used to manipulate the data contained in the database tables.
It has no responsibility for the application's business rules.

## Controller:
It's the entry point for application requests, usually a route is directly associated with a controller method. We can include a large part of the application's business rules in the controllers (as the application grows, we can isolate the rules).
- It is usually created using classes;
- Always returns JSON;
- Never call another controller;
- Must be created when there is a new entity that manipulates data;
  - An entity is not the same entity as the database. For example, in an application, we can have a model and a controller for the User, but to create a session, we must not have an entity in the database, only in the application, using controllers.
- There are only 5 methods: index, show, store, update, delete.
```javascript
class UserController {
  index() { }  // List of users
  show() { }   // Show a unique user
  store() { }  // Stores a user
  update() { } // Changes a user
  delete() { } // Remove a user
}
```

## View:
It's the return of the client, in the application that doesn't use the API Rest model, it can be HTML, but in the API Rest it's the JSON that will be returned to the front-end and then handled by the React or React Native application, for example.

## Sources:
Rockseat GoStack - Starting GoBarber back-end - Sequelize & MVC