# Global Styled

1. Criar uma pasta dentro da 'src/' chamado 'styles/' e adicionar um arquivo chamado 'global.js'.
2. Exemplo de estilização global:
```javascript
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
```
3. Importar no arquivo 'App.js' da aplicação:
```javascript
import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  )
}

export default App;
```

## Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Estilos globais.