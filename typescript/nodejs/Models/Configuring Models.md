# Configuring Models

1. Create a folder called 'models' in 'src/';
2. Create a file with the name of the elements of the application. Example: Appointment;
```typescript
import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
``` 

## Sources:
Rockseat GoStack - Module First Project with Node.js - Appointments Models