# Crypto

1. Já vem junto com o node.js, basta fazer a importação:
```javascript
const crypto = required('crypto');
```

## Métodos:

### randomBytes(n)
Gera bytes aleátorios.
```javascript
const id = crypto.randomBytes(4).toString('HEX'); 
```

## Fontes:
- Semana Omnistack 11 - Criando a base da aplicação.