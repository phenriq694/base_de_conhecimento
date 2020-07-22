# Testes Unitários
## Teste de pequenos trechos de códigos ou funções específicas. 

1. Para exemplificar esse teste, foi criado uma função que gera bytes randomicos e converte para uma string de hexadecimais. A função foi criado em um arquivo chamado 'generateUniqueId.js' detro de 'src/utils', de uma aplicação:
```javascript
const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
  }
```
2. Foi criado uma arquivo de mesmo nome dentro da pasta 'src/tests/unit/', pasta utilizada para armazenar testes unitários, e com a extensão 'generateUniqueId.spec.js'.
Dentro desse arquivo foi configurado o teste:
```javascript
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId()

    expect(id).toHaveLength(8);
  });
});
```
3. Para executar o teste, usar o comando:
```
yarn test
```
Resposta do teste: 
```
$ jest
 PASS  tests/unit/generateUniqueId.spec.js
  Generate Unique ID
    ✓ should generate an unique ID (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.5s, estimated 1s
Ran all test suites.
Done in 1.04s.
```

## Fontes:
- Semana Omnistack 11 - Funcionalidades Avançadas.