# Configuração da autenticação JWT

1. Instalar a biblioteca 'jsonwebtoken' para gerar os tokens de autenticação:
```
yarn add jsonwebtoken
```
2. Criar um método para checar se a senha de um usuário é válida dentro da model responsável pelos usuários. Exemplo: 'src/app/models/User':
```javascript
checkPassword(password) {
  return bcrypt.compare(password, this.password_hash)
}
```

Exemplo em um arquivo:
```javascript
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
``` 
3. Acessar o site https://www.md5online.org/ e escrever uma palavra única para compor o token de autenticação da aplicação:
![Captura de tela de 2020-02-22 20-26-59](https://user-images.githubusercontent.com/54601930/75100821-bdcb2180-55b1-11ea-8334-f0c962d4ffe9.png)
4. Criar um arquivo de configuração da autenticação em 'src/config/auth.js' e colar o código abaixo:
```javascript
export default {
  secret: 'HashGeradoNoMD5',
  expiresIn: '7d',
};
```
5. Criar um controller chamado 'SessionController.js' dentro da pasta 'src/controllers';
6. Configurar o método 'store' para a criação das sessions:
```javascript
import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store (req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does note match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id, name, email,
      },
      //Retornando o token para a autenticação
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn, //Tempo de expirção do token
      }),
    });
  }
}

export default new SessionController();
```
7. Criar uma rota post para a criação da session no arquivo 'routes.js':
```javascript
import SessionController form './app/controllers/SessionController';

routes.post('/sessions', SessionController.store);
```

## Fontes: 
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Autenticação JWT. 