# Query Interface Methods
## Métodos utilizados nas migrations para manipulação das entidades no banco de dados.

### createTable
Utilizado para criação de tabelas.

Exemplo em: https://github.com/phenriq694/base_de_conhecimento/blob/master/node/sequelize/2.%20migrations/Cria%C3%A7%C3%A3o%20de%20migrations.md

### addColumn 
Utilizado para adicionar uma coluna em uma tabela. Exemplo:
```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'nomeDaTable', 
      'nomeDaNovaColuna',
    )
  },

  down: (queryInterface, Sequelize) => {

  }
};
``` 
