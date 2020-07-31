# express-brute

1. Install:
```
yarn add express-brute express-brute-redis
```
2. In the 'routes.js' import the libs installed;
3. Create the connection to Redis to store the session attempts;
4. Create an instance of 'express-brute';
5. Add in the session route using the 'prevent' method;
```javascript
import { Router } from 'express';
import Brute from 'express-brute'; // 2
import BruteRedis from 'express-brute-redis'; // 2

import SessionController from './app/controllers/SessionController';
import validateSessionStore from './app/validators/SessionStore';

const routes = new Router();

const bruteStore = new BruteRedis({ // 3
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore); // 4

routes.post(
  '/sessions',
  bruteForce.prevent, // 5
  validateSessionStore, 
  SessionController.store
);

export default routes;
```

## Sources:
Rockseat GoStack - Node Security - Using Express Brute