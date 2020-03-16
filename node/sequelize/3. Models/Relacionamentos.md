# Relacionamentos
## Como relacionar tabelas dentro das models.

### belongsTo:
Adicionar o código abaixo dentro da model.
```javascript
static associate (models) {
  this.belongsTo(models.Model_Name, { foreignKey: 'column_name'})
}
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/master/modulo03/gobarber/src/app/models/User.js


### Configuração necessária:
Quando for configurada um relacionamento entre models é necessário adicionar uma função que para associar o método 'associate'.
No arquivo 'index.js' da pasta 'src/database', adicionar um novo 'map()' nos models:
```javascript
.map(model => model.associate && model.associate(this.connection.models));
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/master/modulo03/gobarber/src/database/index.js

Esse procedimento deve ser feito apenas uma vez. 

## Fontes: 
- Rockseat GoStack - Módulo Continuando API do GoBarber - Avatar do usuário. 