# Como configurar o nodemon

1. Instalar a dependência em modo de desenvolvimento '-D':
##### Utilizando yarn
```
yarn add nodemon -D 
```
2. Configurar um atalho no arquivo 'package.json' para executar o comando:
```
"scripts": {
  "dev": "nodemon src/server.js"
},
```
Exemplo de como fica o no arquivo:
```
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}
```

3. Executar o comando no terminal:
```
yarn dev
``` 