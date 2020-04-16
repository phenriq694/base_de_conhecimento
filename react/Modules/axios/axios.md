# Axios
## Cliente HTTP responsável por fazer as chamadas em uma API.

1. Instalar a biblioteca:
```
yarn add axios
```

2. Criar uma pasta dentro de 'src/' chamada 'services/' e um arquivo chamado 'api.js'. Configurar a conexão com o backend passando o endereço dele:
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
```
3. Exemploes de uso: 
Exemplo de rota 'get' no backend que exige 'headers':
https://github.com/phenriq694/Rocketseat_Semana_OmniStack11_beTheHero/blob/master/frontend/src/pages/Profile/index.js#L20

Exemplo de rota 'get' com query params: 
https://github.com/phenriq694/Rocketseat_Semana_OmniStack11_beTheHero/blob/master/mobile/src/pages/Incidents/index.js#L35

Rota 'post', passando body na rota:
https://github.com/phenriq694/Rocketseat_Semana_OmniStack11_beTheHero/blob/master/frontend/src/pages/Register/index.js#L26

Rota 'post', passando body, route params e headers:
https://github.com/phenriq694/Rocketseat_Semana_OmniStack11_beTheHero/blob/master/frontend/src/pages/NewIncident/index.js#L29

## Fontes:
- Semana Omnistack 11 - Construindo a interface web.
