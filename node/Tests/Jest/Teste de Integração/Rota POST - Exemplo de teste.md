# Rota POST - Exemplo de teste

1. Criar um arquivo com o nome adequado para a funcionalidade que será testada, exemplo, teste de uma rota para cadastros de ongs 'ong.spec.js'. Os arquivos devem ser criados dentro da pasta 'tests/integration/' e teste em outras rotas da mesma entidade pode ser testado dentro de um mesmo arquivo. 

<strong>'tests/ingrations/ong.spec.js'</strong>

```javascript
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  /**
   * Será executado antes de cada teste.
   * Neste caso foi utilizado para aplicar as migrations da base de dados e
   * desfazer as alterações antes da inicialização de um próximo teste para não
   * haver interferência. 
   */
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  /**
   * Será executado no final de todos os testes.
   * Neste caso foi utilizado para finalizar as conexões com o banco de dados,
   * para não ficar nada executando após os testes. 
   */
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
          name: "APAD",
          email: "contato@apad.com.br",
          whatsapp: "47000000000",
          city: "Rio do Sul",
          uf: "SC"
      });

      expect(res.body).toHaveProperty('id');
      expect(res.body.id).toHaveLength(8);
  });
});
```

## Fontes:
- Semana Omnistack 11 - Funcionalidades Avançadas.