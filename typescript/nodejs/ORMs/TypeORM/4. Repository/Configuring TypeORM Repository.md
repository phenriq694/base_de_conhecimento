# Configuring TypeORM Repository

1. Import 'EntityRepository' and 'Repository' from 'typeorm';
2. Add the 'EntityRepository' above the class and pass the repository model as parameter;
3. Extend the class to the 'typeorm' 'Repository' to access all typeorm query methods, such as 'findOne', 'create'. Pass repository model as parameter;
4. If any method in the class uses any typeorm query method, that method must be async. By default, an async method will return a 'Promise'. Between '< >', we pass the class method return type;
5. In the example bellow, we use the 'findOne' query method, which returns a 'Promise' and, for that, we transform the 'findByDate' method into an async method. Also, it's necessary to add the 'await' after the query method. 
```javascript
import { EntityRepository, Repository } from 'typeorm'; // 1

import Appointment from '../models/Appointment';

@EntityRepository(Appointment) // 2
class AppointmentRepository extends Repository<Appointment> { // 3
  public async findByDate(date: Date): Promise<Appointment | null> // 4{
    const findAppointment = await this.findOne({ // 5
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;
```
## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - TypeORM Repository