# Configuração do sucrase
## Como configurar o código para importar e exportar utilizando o 'import/export'.

1. Instalar a biblioteca do sucrase como dependência de desenvolvimento:
```
yarn add sucrase -D 
```
2. Para importar, utilize 'import'. Exemplo:
```
import express from 'express'
```

3. E para exportar, utilize 'export default'. Exemplo:
```
export default new App().server
```

4. Configurar o nodemon, caso não tenha ainda:
https://github.com/phenriq694/base_de_conhecimento/blob/master/node/nodemon/Como%20configurar%20o%20Nodemon.md

5. Criar um arquivo na raiz do projeto com o nome 'nodemon.json', para configurar a execução do sucrase antes da execução do comando para inicar a aplicação. Adicionar o código abaixo no arquivo:
```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - Nodemon & Sucrase. 