# Controller para atualizar cadastro de usuário padrão

UserController.js
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
<strong>req.userId</strong> foi declarado no middleware de autenticação, para mais informações, veja em: https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Middlewares/Autentica%C3%A7%C3%A3o.md

## Fontes: 
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Cadastro de usuários. 