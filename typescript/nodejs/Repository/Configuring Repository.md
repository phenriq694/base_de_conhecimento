# Configuring Repository

1. Create a folder called 'Repository' in 'src/';
2. Create a file with the name of the elements of the application. Example: AppointmentRepository.
```typescript
import Appointment from '../models/Appointment';

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
```

## Sources:
Rockseat GoStack - Module First Project with Node.js - Creating respositories