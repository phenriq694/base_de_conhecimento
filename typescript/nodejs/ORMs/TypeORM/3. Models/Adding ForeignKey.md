# Adding ForeignKey

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string; // ForeignKey

  @ManyToOne(() => User) // Relationship 
  @JoinColumn({ name: 'provider_id' }) // Column Reference that this object belogns to
  provider: User; // Defining the type of the foreingkey object

  @Column('time with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
```

## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - Relationship in models