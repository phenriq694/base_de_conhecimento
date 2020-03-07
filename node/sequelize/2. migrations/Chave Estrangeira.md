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
        onUpdate: '',
        onDelete: '',
      },
    )
  },

  down: (queryInterface, Sequelize) => {

  }
};
``` 