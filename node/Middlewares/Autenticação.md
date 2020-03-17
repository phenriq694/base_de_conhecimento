# Middleware de autenticação

Para seguir este documento, antes é necessário ter configurado a autenticação JWT, ver em: https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Autentica%C3%A7%C3%A3o%20JWT/Configura%C3%A7%C3%A3o%20da%20autentica%C3%A7%C3%A3o%20JWT.md

1. Criar uma pasta chamada 'middlewares' em 'src/app/'.
2. Criar um arquivo chamado 'auth.js' e colar o código abaixo:
```javascript
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
```
3. Importar o middleware no arquivo de 'routes.js':
```javascript
import authMiddleware from './app/middlewares/auth';
```
4. Adicionar o middleware diretamente na rota em que ele é necessário. Exemplo:
```javascript
routes.post('/users', authMiddleware, UserController.update) 
```

Ou usar ele como global, colocando ele antes das rotas onde será necessário. Exemplo:
```javascript
routes.use(authMiddleware);

routes.post('/users', UserController.update);
```

## Fontes: 
- Rocketseat GoStack - Módulo Iniciando back-end do GoBarber - Middleware de autenticação. 