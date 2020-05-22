# Error Class

1. Create a folder called 'errors' in the 'src/' folder; 
2. Create a file called 'AppError.ts' in the 'src/errors' folder; 
```typescript
class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
```
4. Use this class to throw errors messages with the approiate status code:
```typescript
      throw new AppError('Only authenticaded users can change avatar.', 401);
```
5. In the route method, use the AppError instance to return the status code:
```typescript
catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
}
```
## Sources:
Rockseat GoStack - Module First Project with Node.js - Handling with errors