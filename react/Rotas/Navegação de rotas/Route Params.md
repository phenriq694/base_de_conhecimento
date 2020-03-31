# Route Params

1. Para passar parâmetros entre um componente ou outro entre rotas, antes deve ser adicionado o nome do parâmetro na rota no arquivo 'routes.js':
```javascript 
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <!- Passando um parâmetro 'repository'->
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
```

2. No componente 'Link' para a navegação entre rotas, é possível passar o parâmetro esperado:
```javascript
  <Link to={`/repository/${repository.name}`}>
    Detalhes
  </Link>
```

3. No componente que recebe o parâmetro, caso for um componente de função, desestruturar das propriedades dele o atributo 'match':
```javascript
import React from 'react';

export default function Repository({ match }) {
  return <h1>Repository: ${match.params.repository}</h1>;
}
```

# Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Navegação de rotas.