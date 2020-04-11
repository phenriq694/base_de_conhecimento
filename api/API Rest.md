# API Rest

- Fluxo de requisição e resposta:
  - Requisição feita por um cliente;
  - Resposta retornada através de uma estrutura de dados;
  - Cliente recebe resposta e process resultado;

<p>
  <img src="https://user-images.githubusercontent.com/54601930/78947821-e3968200-7a9c-11ea-875f-d88af14451c5.png" width="400px" >
</p>

## Benefícios
- Múltiplos clientes (front-end), mesmo back-end;
- Protocolo de comunicaçõ padronizado;
  - Mesma estrutura para web / mobile / API pública;
  - Comunicação com serviços externos; 

## Conteúdo da requisição
```javascript
//                 /Route/Route Params/Route/?QueryParams 
GET http://api.com/company/1/users?page=2 
```
```javascript
POST http://api.com/company/1/users

// Body (Apenas POST/PUT)
{
  "users": {
    "name": "Paulo Henrique",
    "email": "phenriq@gmail.com",
    "tech": ["Node.js", "React", "React Native"]
  }
}

// Header 
{
  "Locale": "pt_BR"
}
``` 

##  Métodos HTTP 
- GET: Buscar/listar uma informação do back-end;
- POST: Criar uma informação no back-end;
- PUT: Alterar uma informação no back-end;
- DELETE: Deletar uma informação no back-end;


## HTTP Codes
- 1xx: Informational
- 2xx: Success
  - 200: Success;
  - 201: Created;
  - 204: Content;
- 3xx: Redirection
  - 301: Moved permanently
  - 302: Moved
- 4xx: Client Error
  - 400: Bad Request;
  - 401: Unauthorized;
  - 404: Not Found
- 5xx: Server Error
  - 500: Internal Server Error

## Fontes: 
- Rockseat GoStack - Módulo Back-end com Node.js - Conceitos API Rest. 