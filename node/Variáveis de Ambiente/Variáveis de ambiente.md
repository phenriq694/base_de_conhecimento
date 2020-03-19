# Variáveis de ambiente

1. Criar um arquivo na raiz do projeto chamado '.env';
2. Adicionar esse arquivo no arquivo 'gitignore';
3. Exemplo de variáveis de ambiente:
```
APP_URL=http://localhost:3333
NODE_ENV=development

# AUTH

APP_SECRET=chaveUnica

# DATABASE

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=name

# MONGO

MONGO_URL=mongodb://localhost:27017/projeto

# REDIS

REDIS_HOST=127.0.0.1
REDIS_POST=6379

# MAIL

MAIL_HOST=smpt.mailtrap.io
MAIL_PORT=2525
MAIL_USER=2523452345
MAIL_PASS=4352452344

# SENTRY
SENTRY_DSN=https://ajr234k5çj23k4j2l3j4524j5k23l4j52k3
```
4. Instalar uma biblioteca para carregar esse arquivo na aplicação:
```
yarn dotenv 
```
5. Importar essa biblioteca no começo do arquivo 'app.js' da aplicação. 
```javascript
import 'dotenv/config';
```
Importar também no arquivo 'src/config/database.js':
```javascript
require('dotenv/config');
```
Caso a aplicação tiver utilizando filas, importar esse arquivo no arquivo principal da fila, exemplo, 'Queue.js'.
6. Criar um arquivo na raiz do projeto chamado '.env.example' e colar apenas as chaves do arquivo '.env', para demonstrar o que está sendo utilizado como variável de ambiente na aplicação. 
## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Variáveis ambiente. 