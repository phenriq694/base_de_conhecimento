#  Roteamento no React

1. Instalar a dependência react-router-dom:
```
yarn add react-router-dom
```
2. Criar um arquivo dentro da pasta 'src/' chamado 'routes.js'. Para a configuração das paginas, criar uma pasta chamada 'pages/' e dentro dela adicionar as paginas da aplicação. Exemplo 'src/pages/Home/index.js'.
3. Arquivo 'routes.js':
```javascript
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from '.pages/AboutUs';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> {/* Utilizando o 'exact' para não conflitar com as outroas rotas que também começam com o '/' */}
        <Route path ="/aboutus" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  )
}
```
4. Importar o arquivo 'routes.js' no arquivo 'App.js' da aplicação:
```javascript
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

## Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Roteamento no React.