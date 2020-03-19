# Tratamento de exceções 

1. Acessar o serviço https://sentry.io/welcome/ e logar com a conta do GitHub;
2. Acessar o menu 'Projects' e clicar o botão 'Create Project';
3. Selecionar o tipo do projeto, como por exemplo o 'express' ou 'node.js', criar um nome para o projeto e o nome do time;
4. Fazer a instalação da biblioteca que o serviço informar. Exemplo:
```
yarn add @sentry/node@5.4.3
```
5. Criar um arquivo dentro da pasta 'src/config/' chamado 'sentry.js', e configurar o valor do 'dsn' informado pelo serviço:
```javascript
export default {
  dsn: process.env.SENTRY_DSN,
}
``` 
6.Fazer a importação do 'sentry' e das configurações do sentry no arquivo 'app.js' da apliacação:
```javascript
import * Sentry from '@sentry/node';

import sentryConfig from './config/sentry';
```
7. Adicionar uma função do 'Sentry' dentro do constructor da classe 'App':
```javascript
Sentry.init(sentryConfig);
```
8. Adicionar o código abaixo como primeiro middlware:
```javascript
middlewares() {
  this.server.use(Sentry.Handlers.requestHandler());
}
```
9. Adicionar o código abaixo dentro de 'routes()' depois das rotas:
```javascript
routes() {
  this.server.use(routes);
  this.server.use(Sentry.Handlers.errorHandler());
}
```
10. Adicionar uma biblioteca para recuperar erros que ocorrem dentro de funções assincronas:
```
yarn add express-async-errors
```
11. Importar a biblioteca adicionada no arquivo 'app.js' da aplicação antes da importação das rotas:
```javascript
import 'express-async-erros';
```
12. Simular um erro de sintaxe para testar se o sentry está recuperando os erros. 
13. Instalar a biblioteca para tratar as mensagens de erros para o desenvolvedor:
```
yarn add youch
```
e importar ele no arquivo 'app.js':
```javascript
import Youch from 'youch';
```
14. Criar um método chamado 'exceptionHandler()' na classe 'App'. Exemplo de código abaixo:
```javascript
exceptionHandler() {
  this.server.use(async (err, req, res, next) => {
    if(process.env.NODE_ENV === 'development') {
      const erros = await new Youch(err, req).toJSON();

      return res.status(500).json(errors);
    }

    return res.status(500).json({ error: 'Internal server error' });
  });
}
```
Exemplo de arquivo final:
https://github.com/phenriq694/GoStack_Modulos/blob/master/modulo03/gobarber/src/app.js
## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Tratamento de exceções. 