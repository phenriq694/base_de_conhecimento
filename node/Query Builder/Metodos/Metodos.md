# Metodos

## insert
Utilizar para inserir dados no banco de dados.
```javascript
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
  id, name, email, whatsapp, city, uf,
  })

  return response.json({ id });
});

module.exports = routes;
```

## select
Utilizar para selecionar elementos no banco.
```javascript
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents)
  }
}
```

## delete
Utilizado para deletar um elemento no banco.
```javascript
const connection = require('../database/connection');

module.exports = {
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

      if (incident.ong_id !== ong_id) {
        return res.status(401).json({ error: 'Operation not permitted.' });
      }

      await connection('incidents').where('id', id).delete();

      return res.status(204).send();
  }
}
```

## Fontes:
- Semana Omnistack 11 - Criando a base da aplicação.