# Gerando hash de senha

1. Instalar a biblioteca 'bcryptjs':
```
yarn add bcryptjs
```

2. Importar essa biblioteca na model onde tera a referência ao campo de senha e criar um novo tipo de dado na model do tipo 'VIRTUAL', declarando que esse dado não vai ser adicionado a base de dados e sim apenas para uso no código.
3. Para fazer a criptografia da senha a adicioná-la ao banco, é adicionado uma função do sequelize chamada de 'hooks' que executa antes de salvar os dados no banco. Ela testa se o campo 'password' existe, caso existir, gera um hash usando o 'bcryptjs' e salva ele no campo 'password_hash'. 
```javascript
import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
    },
    {
      sequelize
    });

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User
```
## Fontes: 
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - gerando hash da senha. 