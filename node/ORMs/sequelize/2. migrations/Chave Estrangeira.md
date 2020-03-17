# Chave Estrangeira
## Como configurar uma coluna que faz referência a outra coluna de outra tabela.

1. Adicionar o atributo 'references' e informar a tabela da chave primária 'model' e a coluna 'key':
```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', 
      'avatar_id',
      {
        type: Sequelize.INTEGER, 
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE', /* Qualquer atualização no elemento vai atualizar dentro dessa coluna também */
        onDelete: 'SET NULL', /* Quando ele for deletado, mudar o valor dele para null */
      },
    )
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
``` 
2. Rodar o comando do sequelize para executar a migration:
```
yarn sequelize db:migrate
```

## Fontes: 
- Rockseat GoStack - Módulo Continuando API do GoBarber - Avatar do usuário. 