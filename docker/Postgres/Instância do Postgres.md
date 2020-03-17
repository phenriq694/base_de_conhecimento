# Intância do Postgres
## Como criar uma instância do postgres no docker

1. Comando padrão:
```
docker run --name nome_do_banco -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres:11
```

## Fontes: 
- Rocketseat GoStack - Módulo Iniciando back-end do GoBarber - Configurando Docker. 