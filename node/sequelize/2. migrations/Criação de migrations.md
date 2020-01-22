# Criação de migrations

1. Migration de criação:
```
yarn sequelize migration:create --name=nome-da-migration
```

2. Um arquivo será gerado dentro de 'src/database/migrations/', definido na configuração do sequilize.

3. Exemplo de uma migration para criação de uma tabela:
```
module.exports = {
  up: (queryInterface, Sequelize) => { // Será executado quando a migration for aplicada
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  }


  down: queryInterface => { // Será executado quando a migration for desfeita.
    return queryInterface.dropTable('users')
  }
}
```

4. Para rodar a migration e aplicar no banco de dados:
```
yarn sequelize db:migrate
```

5. Para desfazer a última migration:
```
yarn sequelize db:migrate:undo
```
Ou, para desfazer todas as migrations:

```
yarn sequelize db:migrate:undo:all
```

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Migration de usuário. 