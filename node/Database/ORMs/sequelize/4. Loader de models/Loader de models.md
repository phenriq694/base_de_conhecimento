# Loader de models
## Criação da conexão entre o sequelize e o banco de dados para a inclusão das models

1. Criar um arquivo chamado 'index.js' dentro da pasta 'src/database/' e copiar o código abaixo:
```javascript
import Sequelize from 'sequelize'

// importar a(s) model(s)
import User from '../app/models/User'

import databaseConfig from '../config/database'

const models = [User] // Acrescentar todas as models importadas

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models.map(model => model.init(this.connection))
  }
}

export default new Database()
```

2. Importar o arquivo dentro do arquivo 'app.js' da aplicação:
```javascript
import './database'
```

3. Importar a(s) model(s) dentro dos arquivos onde ela sera solicitada:
```javascript
//Exemplo
import User from '.app/models/User'
```

## Fontes: 
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Criando loader de models. 