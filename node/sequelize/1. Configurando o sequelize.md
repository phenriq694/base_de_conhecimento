# Configurando o sequelize

1. Instalar a dependência usando o comando:
```
yarn add sequelize
```

2. Instalar a interface de comandos do sequelize, como dependência de desenvolvimento:
```
yarn add sequelize-cli -D
``` 
3. Criar 3 pastas que será utiliza para configurar o sequelize:
- src/database/
- src/config
- src/app/models (mover a pasta de controllers para dentro de src/app/ caso já tenha ela)

4. Cria um arquivo chamado '.sequelizerc' e copiar o código abaixo nele:
```
const { resolve } = require('path')

module.exports = {
  config: resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds')
}
```

5. Criar um arquivo chamado 'database.js' dentro da pasta 'config/' e copiar o código abaixo. Neste arquivo será configurado as credênciais para acesar o banco:
``` 
module.exports = {
  dialect: '', // Tipo do banco (postgres)
  host: 'localhost',
  username: '',
  password: '',
  database: '', // Nome da database
  define: {
    timestamps: true,
    underscored: true,
    underscoredAdd: true,
  },
}
```

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Configurando Sequelize. 