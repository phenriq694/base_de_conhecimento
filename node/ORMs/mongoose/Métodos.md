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

### find:
Utilizado para localizar todos os elementos de um schema. Pode ser passado um atributo para filtrar o resultado. 
```javascript
import Notifications from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      user: req.params.id, 
    })

    return res.json(notifications);
  }
}

export default new Notification;
```

### findByIdAndUpdate:
Utilizado para localizar um elemento usando a chave primária e já atualizar ele com um valor.
```javascript
import Notifications from '../schemas/Notification';

class NotificationController {
  async update(req, res) {
    const notifications = await Notification.findByIdUpdate({
      req.params.id, 
      { read: true }, // Alteração de um atributo após a localização do elemento.
      { new : true }, // Retorna o elmento já alterado. 
    })

    return res.json(notifications);
  }
}

export default new Notification;
```

### Conditions:
#### sort(attribute):
Ordena a pesquisa em relação ao atributo passado como parâmetro:
```javascript
import Notifications from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      user: req.params.id, 
    }).sort('createdAt');

    return res.json(notifications);
  }
}

export default new Notification;
```

#### limit(number):
Limita o número de elementos retornados na pesquisa. 
```javascript
import Notifications from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      user: req.params.id, 
    }).sort('createdAt').limit(20);

    return res.json(notifications);
  }
}

export default new Notification;
```

## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Notificando novos agendamentos. 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Listando notificações do usuário. 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Mostrando notificações como lidas. 
