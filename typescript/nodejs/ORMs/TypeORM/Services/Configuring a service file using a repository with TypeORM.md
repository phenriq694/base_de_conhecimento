# Configuring a service file using a repository with TypeORM

1. Import 'getCustomRepository' from 'typeorm';
2. Declare a variable for the Repository that will be used. Use the imported 'getCustomRepository' function, and pass the imported 'Repository' as a parameter. This variable now has access to all methods from the repository and typeorm repository;
3. The 'create' method doesn't save the object in the database, for this, we use the 'save' method.
```typescript
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm'; // 1

import Appointment from '../models/Appointment';
import AppointmentRepository from '../respositories/AppointmentRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmetService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository); // 2

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment); // 3

    return appointment;
  }
}

export default CreateAppointmetService;
```

## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - TypeORM Repository