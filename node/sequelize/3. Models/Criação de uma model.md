# Criação de uma model

1. Criar um arquivo com o nome adequado para a entidade será representada pela model, dentro da pasta 'src/app/models/'.

2. Exemplo de model. Colocar os atributos que não são preechidos automaticamente, como 'id, created_at...':
``` 
import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    },
    {
      sequelize
    })
  }
}

export default User
``` 

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Model de usuário. 