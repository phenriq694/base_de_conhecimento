# Controller para cadastro de usuário padrão

Instalar a biblioteca 'yup' para fazer a validação dos dados:
```
yarn add yup
```

UserController.js
```javascript
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(), //required() = Atributo obrigatório.
      email: Yup.string().email().required(), //email() = Atributo do tipo email. 
      password: Yup.string().required().min(6), //min(6) = quantidade mínima de chars.
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email } = await User.create(req.body);

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
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Validando dados de entrada. 