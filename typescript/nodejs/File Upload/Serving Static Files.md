# Serving Static Files

1. In the 'server.ts' file, import the upload configuration file;
2. Add the following command to serve static files:
```typescript
import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import uploadConfig from './config/upload'; // 1

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory)); // 2
app.use(routes);

app.listen(3333, () => {
  console.log('🦈 Server started on port 3333!');
});
```

## Sources:
Rockseat GoStack - Module First Project with Node.js - Serving Static Files