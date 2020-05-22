# Handling with Errors

1. Install package:
```
yarn add express-async-errors
```
2. Import this package in the "server.ts" file;
3. Add a middleware to handling with errors: 
```typescript
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'; // 2
import routes from './routes';

import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => { // 3
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('🦈 Server started on port 3333!');
});
```
## Sources:
Rockseat GoStack - Module First Project with Node.js - Handling with errors