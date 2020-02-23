# Validação dos dados como o Yup

1. Instalar a biblioteca 'yup' para fazer a validação dos dados:
```
yarn add yup
```
2. Importar a biblioteca no controller onde será utilizado.
```javascript
import * as Yup from 'yup';
```
3. Estrutura base de uma validação dos atributos 'name, email e password'. Adicionar no começo do método do contorller:
```javascript
const schema = Yup.object().shape({
  name: Yup.string().required(), //required() = Atributo obrigatório.
  email: Yup.string().email().required(), //email() = Atributo do tipo email. 
  password: Yup.string().required().min(6), //min(6) = quantidade mínima de chars.
});
```

Exemplos de validações condicionais:
```javascript
const schema = Yup.object().shape({
  oldPassword: Yup.string().min(6),
  //when() = atribui uma condição ao atributo, tendo como primeiro parâmetro a condição e em segundo uma função.
  password: Yup.string().min(6).when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.required() : field
  ), 
  confirmPassword: Yup.string().when('password', (password, field) =>
    /* 
     * oneOf(array) = Define possíveis valores que o campo pode ter;
     * Yup.ref() = Referência o valor de outro campo.
    */
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ), 
});
```

4. Adicionar o teste da validação:
```javascript
if (!(await schema.isValid(req.body))) {
  return res.status(400).json({ error: 'Validation fails' });
}
```
5. Exemplo de código:
UserController.js
```javascript
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
- Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Validando dados de entrada. 