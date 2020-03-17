# Métodos 
## Métodos mais utilizados para interagir com schemas

### create:
Utilizado para criação de um elemento no banco. Utilizado principalmente com o método 'POST'.
Como parâmetro passamos os dados que serão inseridos no banco. 
Pode ser passado usando um objeto, desde que ele tenha os atributos com os nome iguais aos elementos do banco, como no exemplo abaixo:
```javascript
import User from '../schemas/User'

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

## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Notificando novos agendamentos. 
