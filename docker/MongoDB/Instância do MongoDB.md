# Intância do MongoDB
## Como criar uma instância do MongoDB no docker

1. Comando padrão:
```
docker run --name nome_do_banco -p 27017:27017 -d -t mongo
```
2. Para testar se a conexão com o banco está funcionando, acessar no navegador: http://localhost:27017

## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Configurando MongoDB. 