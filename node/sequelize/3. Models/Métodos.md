# Métodos 
## Métodos mais utilizados para interagir com models

### create:
Utilizado para criação de um elemento no banco. Utilizado principalmente como método 'POST'.
Como parâmetro passamos os dados que serão inseridos no banco. 
Pode ser passado usando um objeto, desde que ele tenha os atributos com os nome iguais as colunas do banco, como no exemplo abaixo:
```
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
```
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

### findone:
Utilizado para encontra um único elemento na base de dados.
Como parâmetro passamos a condição que o elemento precisa ter.
```
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
## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Cadastro de usuários. 