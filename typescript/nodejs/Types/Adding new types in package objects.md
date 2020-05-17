# Adding new types in package objetcts

1. Create a folder in 'src/' called '@types'; 
2. Create a file with the name of the package. Example: express.d.ts;
3. Declare the package name and export the o object, that will be receiving the new type. Example:
```typescript
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
```

## Sources:
Rockseat GoStack - Module First Project with Node.js - Authenticated Routes