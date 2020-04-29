# Methods

## create:
Creates an instance of the object, but doesn't save it in the database. 
```typescript
    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });
```

## save:
Saves an object in the database.
```typescript
    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);
```

## Finders 
### find:
Finds all elements from the database.
```typescript
appointmentRouter.get('/', async (request, response) => {
  const appointmentRepository = getCustomRepository(AppointmentRepository);

  const appointments = await appointmentRepository.find();

  return response.json(appointments);
});
```
### findone:
Finds a single element in the database.
As a parameter, we pass the condition that the elements need to have. 
```typescript
@EntityRepository(Appointment) 
class AppointmentRepository extends Repository<Appointment> { 
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({ 
      where: { date },
    });

    return findAppointment || null;
  }
}
```
## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - TypeORM Repository