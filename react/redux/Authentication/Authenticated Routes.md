# Authenticated Routes

1. In the saga file of the auth module, in the 'singIn' function, add the following configuration after create a session in the application: 
```javascript
api.defaults.headers.Authorization = `Bearer ${token}`;
```
2. Add a new function in the saga file called 'setToken': 
```javascript
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
```
3. This function needs to be triggered when the action 'persist/REHYDRATE' is heard. To to this, add it in the all method of the saga file:
```javascript
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
```

## Sources:
Rockseat GoStack - Module GoBarber Web - Authenticated Routes