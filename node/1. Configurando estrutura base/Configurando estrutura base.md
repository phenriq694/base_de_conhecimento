# Configurando estrutura base
## Como iniciar um projeto node e construir uma estrutura padrão. 

1. Criar um novo projeto com o comando:
```
yarn init -y
```

2. Instalr a biblioteca 'express':
```
yarn add express
```

3. Criar uma pasta chamada 'src', onde será armazenado todo o código da aplicação:
![Captura de tela de 2020-01-17 19-50-07](https://user-images.githubusercontent.com/54601930/72651647-c00ee000-3962-11ea-8cd3-7d11f58d13a0.png)

4. Criar um arquivo dentro de 'src' com o nome de 'app.js', onde será configurado as propriedades da aplicação:
```javascript
const express = require('express')

const routes = require('./routes')

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    // Middlewares para permitir requisições em json
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server
```

5. Criar um arquivo dentro de 'src' com o nome de 'server.js', onde será configurado o servidor:
```javascript
const app = require('./app')

//Passando como parâmetro o número da porta onde o servidor vai ouvir requisições.
app.listen(3333)
```

6. Criar um arquivo dentro de 'src' com o nome de 'routes.js', onde será configurado as rotas da aplicação:
```javascript
const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})javascript

module.exports = routes
```
7. Testar se está tudo funcionando executando o comando no terminal:
```
node src/server.js 
```

8. Caso nenhum erro ocorrer, acessar no navegador a porta do servidor. Se estiver tudo ok, a mensagem abaixo em JSON será exibida:
![Captura de tela de 2020-02-22 15-44-03](https://user-images.githubusercontent.com/54601930/75097505-3c13cd80-558a-11ea-84f5-8a1a9f699434.png)

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Configurando estrutura. 