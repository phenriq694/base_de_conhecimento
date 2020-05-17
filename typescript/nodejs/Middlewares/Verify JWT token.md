# Verify JWT Token

1. Create a file into the folder 'src/middlewares' called 'ensureAuthenticated.ts':
```typescript
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    console.log(decoded);

    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}
```
2. Import this file in the route that it's necessary to use and add before all routes:
```typescript
import ensureAuthenticated from '../middlewares/ensureAuthenticated'; 

routeNameRouter.use(ensureAuthenticated)
```

## Sources:
Rockseat GoStack - Module First Project with Node.js - Authenticated Routes