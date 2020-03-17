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
Utilizado para a atualização de um elemento no banco. Para isso, é necessário localizar o elemento que será atualizado. Utilizado principalmente com o método 'PUT'.
Como parâmetro passamos os dados que serão atualizados no banco. 
Pode ser passado usando um objeto, desde que ele tenha os atributos com os nome iguais as colunas do banco. Exemplo:
```javascript
import User from '../models/User';

class UserController {
  async update(req, res) {
    const user = await User.findByPk(req.userId);

    const { id, name, email } = await user.update(req.body);

    return res.json({
      id, 
      name, 
      email,
    });
  }
}

export default new UserController();
```

### destroy:
Utilizado para excluir uma elemento de uma tabela. Para isso, é necessário localizar o elemento que será deltado. Utilizado principalmente com o método 'DELETE'. Pode ser utilizado direto no elemento localizado. 
```javascript
import Deliveryman from '../models/Deliveryman';

class Deliverymane {
  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman cannot be found' });
    }

    await deliveryman.destroy();

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
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
## Conditions
### Condições para filtrar os resultados das consultas ao banco. 

#### where: 
```javascript
import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.fundAll({
      where: { provider: true }, // Retornará apenas os 'user' quer for 'provider'.
    });

    return res.json(providers)
  }
}

export default new ProviderController();
```

#### attributes:
Seleciona quais atributos vai retornar com o elemento. 
```javascript
import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.fundAll({
      where: { provider: true }, 
      attributes: ['id', 'name', 'email', 'avatar_id'],
    });

    return res.json(providers)
  }
}

export default new ProviderController();
```

#### include:
Inclui informações dos atributos de outras tabelas através de um relacionamento usando a chave estrangeira. 
É necessário importar a model que está no relacionamento. 
```javascript
import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.fundAll({
      where: { provider: true }, 
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path'],
        },
      ],
    });

    return res.json(providers)
  }
}

export default new ProviderController();
```

## Fontes: 
- Rocketseat GoStack - Módulo Iniciando back-end do GoBarber - Cadastro de usuários. 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Listagem de prestadores de serviço.