# Testes de Integração
## Testes para fluxos de rotas completa. 

1. Para exemplificar esse tipo de teste, será criado uma base de dados apenas para testes, de modo que não afete a aplicação principal. No exemplo será utilizar o SQLite e Knex como query builder. 
2. Nas configurações do SQLite no arquivo 'knexfile.js', criar um uma base de dados para teste:
```javascritp
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
```
3. Instalar a biblioteca 'cross-env' para executar a aplicação em modo teste quando o for inicializada parelo script de teste:
```
cross-env
```
4. Alterar o script de teste dentro do 'package.json':
```
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "cross-env NODE_ENV=test jest"
  }, 
```
5. No arquivo de conexão da base de dadoos 'src/database/connection.js', adicionar uma variável de configuração para verificar qual em qual modo a aplicação está executando, para usar a base de dados apropriada:
```javascript
const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;
```
6. Instalar uma biblioteca para fazer requisições HTTP para testes, supertest:
```
yarn add supertest
```
7. A aplicação tem que estar configurada com dois arquivos 'app.js' e 'server.js', sendo configurado no 'server' a porta em que a aplicação está ouvindo e no 'app' as configurações principais como rotas, middlewares e entre outros. 
Exemplo dessas configurações: https://github.com/phenriq694/base_de_conhecimento/blob/master/node/1.%20Configurando%20estrutura%20base/Configurando%20estrutura%20base.md

8. Criar um arquivo com o nome adequado para a funcionalidade que será testada, exemplo, teste de uma rota para cadastros de ongs 'ong.spec.js'. Os arquivos devem ser criados dentro da pasta 'tests/integration/' e teste em outras rotas da mesma entidade pode ser testado dentro de um mesmo arquivo. 
9. Os exemplos de testes de integração estão nesta pata. 


## Fontes:
- Semana Omnistack 11 - Funcionalidades Avançadas.

