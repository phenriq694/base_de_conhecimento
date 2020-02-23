# Métodos 
## Métodos mais utilizados para interagir com models

### create:
Utilizado para criação de um elemento no banco. Utilizado principalmente com o método 'POST'.
Como parâmetro passamos os dados que serão inseridos no banco. 
Pode ser passado usando um objeto, desde que ele tenha os atributos com os nome iguais as colunas do banco, como no exemplo abaixo:
```javascript
import User from '../models/User'

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
```

Ou passando o valor de cada atributo: 
```javascript
import User from '../models/User'

class UserController {
  async store(req, res) {
    const user = await User.create({
      name: 'Paulo Henrique',
      email: 'paulo.henrique@gmail.com',
    });

    return res.json(user);
  }
}

export default new UserController();
```

### update:
Utilizado para a atualização de um elemento no banco. Utilizado principalmente com o método 'PUT'.
Como parâmetro passamos os dados que serão atualizados no banco. 
Pode ser passado usando um objeto, desde que ele tenha os atributos com os nome iguais as colunas do banco. Exemplo:
```javascript
import User from '../models/User';

class UserController {
  async update(req, res) {
    const { id, name, email } = await User.update(req.body);

    return res.json({
      id, 
      name, 
      email,
    });
  }
}

export default new UserController();
```

### findone:
Utilizado para encontra um único elemento na base de dados.
Como parâmetro passamos a condição que o elemento precisa ter.
```javascript
import User from '../models/User'

class UserController {
  async store(req, res) {
    const userExists = await User.findone({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
```

### findByPk:
Utilizado para encontra um único elemento na base de dados através da primary key.
Como parâmetro passamos o valor da chave primária que queremos localizar.
```javascript
import User from '../models/User';

class UserController {
  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email: req.body.email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name, email } = await User.update(req.body);

    return res.json({
      id, 
      name, 
      email,
    });
  }
}

export default new UserController();
```

## Fontes: 
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Cadastro de usuários. 