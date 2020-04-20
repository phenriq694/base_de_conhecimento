# Adding Types

## In libs objects:
```typescript
import { Request, Response } from 'express';

export function helloWorld(request: Request, response: Response) {
  return response.json({ message: 'Hello World' });
}
```

## In objects:
```typescript
interface TechObject {
  title: string;
  experience: number;
}

/** 
 * Creating an interface to define the attribute types from an object and permit desestruct the function params. 
 */
interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  /** 
   * This attribute can have 'string' values or 'TechObject' values.
   * When the Array will store only values from one type, just add '[]' after the the type.
   * Example: techs: string[];
   */
  techs: Array<string | TechObject>;  
}

export default function cresteUser({ name, email, password }: CreateUserData) {
  const user = {
    name, 
    email,
    password,
  }

  return user;
}
```


## Sources:
Rockseat GoStack - Module TypeScript - When use types?