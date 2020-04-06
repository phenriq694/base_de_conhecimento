# StatusBar

1. Importar a biblioteca dentro do arquivo de rotas, e adicionar no corpo do componente 'App':
```javascript
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}
```

## Propriedades:

### barStyle
Altera o tema de cores do texto da StatusBar
```javascript
<StatusBar barStyle="light-content" />
```

### backgroundColor
Altera a cor da StatusBar
```javascript
<StatusBar backgroundColor="#7159c1" />
```

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Configurando StatusBar. 