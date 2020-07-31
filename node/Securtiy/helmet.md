# helmet

1. Install:
```
yarn add helmet
```
2. Import and add in the middlewares on the 'app.js' file:
```javascript
import 'dotenv/config';

import express from 'express';
import path from 'path';
import helmet from 'helmet'; // 2
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionsHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(helmet()); // 2
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
```
## Sources:
Rockseat GoStack - Node Security - Using Helmet