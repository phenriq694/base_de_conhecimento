# Migration Configuration

1. Add into the file 'src/ormconfig.json' the path of the migrations folder:
```json
{ 
  "migrations": [
    "./src/database/migrations/*ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```
2. Create a folder in 'src/database/' called 'migrations'; 
3. Add to the 'package.json' file within 'scripts', a command to run the typeorm cli with typescript to generate the migrations:
```json 
{
  "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
}
```
4. Run the following command to create a migration:
```bash
yarn typeorm migration:create -n CreateNameMigration
```
5. A file with the following code will be generated in the folder 'src/database/migrations/':
```typescript
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointments1587957283405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {}

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
```
The 'up' method is were all new modifications to the database will be placed.
The 'down' method undoes all modifications made by the 'up' method. 
6. After editing the migration file, to run it, use the following command:
```bash
yarn typeorm migration:run
```
7. If a migration was found, it can be reversed with the following command:
```bash
yarn typeorm migration:revert
``` 
8. To view all the migrations that has been done, use the following command:
```bash
yarn typeorm migration:show
```
## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - Creating Appointments table