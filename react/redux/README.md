<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://user-images.githubusercontent.com/54601930/79169629-4c466d00-7dc3-11ea-8075-a2644b91f42d.png" 
    width="150px"
  />
</h1>
<h2 align="center">
  Flux Architecture
</h2>

## What is Redux?
- Library that implements the Flux Architecture;
- Controls global states;
- When to use Redux?
  - When the state has more than one 'owner';
  - When the state is manipulated by more than one component;
  - When the user actions cause side effects on the data;
- Examples: Shopping Cart, user data, music player;

## Flux Architecture:
- Every user action indirect or direct generates an action;
- This action is nothing more than an object with a type (usually a string describing what it does) and another object with all changes made. 
- This action goes to the Redux store in the application and then propragates a state update, for example, for all other components where this change is necessary.
- These changes can trigger other actions; 

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/79166960-ad1e7700-7dbc-11ea-84f8-9e24688ced52.png" width="800px">
</p>

## Principles:
- Every action must have a type;
- Redux state is the only point of truth;
- We cannot change the state of Redux without an action;
- Actions and reducers are pure, meaning they don't deal with async side-effects;
- Any synchronous logic for the business rule must be in the reducer and never in an action;
- Not every application will need Redux, start without it and feel the need;


## Sources:
- Rockseat GoStack - Module Flux Architecture - Redux Concepts.
