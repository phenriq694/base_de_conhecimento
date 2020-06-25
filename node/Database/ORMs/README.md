# ORM 
- Database abstraction;
- Tables become models;

<img src="https://user-images.githubusercontent.com/54601930/85644934-b2c2f380-b66e-11ea-924b-50080fc6c107.png" with="400px" />

## Data manipulation:
- Without SQL (most of the time);
- JavaScript code only;

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/85645206-6fb55000-b66f-11ea-8da2-e62c6c1a5a88.png" with="200px" />
  <img src="https://user-images.githubusercontent.com/54601930/85645207-704de680-b66f-11ea-887a-75ef65c004d9.png" with="200px" />
</p>

## Migrations:
- Database version control;
- Each file has instructions for creating, changing or removing tables and columns;
- Keeps the database updated among all the team's developers and also in the production environment;
- Each file is a migration and its ordering takes place by date;

```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { // Instruction to create a new table
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,                // ID is the primary key and auto incremental
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,             // Creating 3 fileds with their properties;
        allowNull: false,              
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');     // Instruction for deleting the table in event
  },                                              // of a rollback
};
```

## Sources:
Rockseat GoStack - Starting GoBarber back-end - Sequelize & MVC