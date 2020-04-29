# Relating models with database

1. Uncomment two elements from the 'tsconfig.json' file:
```json
{
  /* Experimental Options */
  "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
  "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
}
```

2. Import 'Entity' from the lib 'typeorm' and add before the class model, passing as parameters the name of the table to which will be associated;
3. Also, import the 'Column' and 'PrimaryGeneratedColumn' and inform which are the columns related to the database;
4. Remove the class contructor:
```javascript
import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
``` 
5. Uncomment the following element from the 'tsconfig.json' file, and change your value to 'false':
```json
{
  "strictPropertyInitialization": false,  /* Enable strict checking of property initialization in classes*/
}
```
6. Add into the file 'src/ormconfig.json' the path of the models folder:
```json
{ 
  "entities": [
    "./src/models/*ts"
  ],
}
```
## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - Creating Appointment Model