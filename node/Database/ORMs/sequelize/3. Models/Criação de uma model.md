# Criação de uma model

1. Criar um arquivo com o nome adequado para a entidade será representada pela model, dentro da pasta 'src/app/models/'.

2. Exemplo de model. Colocar os atributos que não são preechidos automaticamente, como 'id, created_at...':
```javascript
import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default User
``` 

## Adicionando funções dentro dos campos:
É possível adicionar uma função que interaja com os próprios dados do elemento e retorne um determinada informação. Para isso, normalmente utilizar o tipo de dado 'VIRTUAL', que só existe para o código. 
No exemplo abaixo foi criado uma função dentro do campo 'past' para calcular se a data do elemento já passou em relação a data atual:
```javascript
import Sequelize, { Model } from 'sequelize';
import { isBefore } from 'date-fns';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date())
          },
        },
      },
      {
        Sequelize,
      }
    );

    return this;
  }
}

export default Appointment;

```
## Fontes: 
- Rocketseat GoStack - Módulo Iniciando back-end do GoBarber - Model de usuário.  
- Rocketseat GoStack - Módulo Continuando a API do GoBarber - Campos virtuais no agendamento.  