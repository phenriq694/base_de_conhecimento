# Criando um componente básico

1. A maneira mais fácil de criar um componentes básico no React é usando uma função:
```javascript
import React from 'react'; // É necessário fazer essa importação em todo arquivo que utilizar a sintaxe de HTML. 

function App() {
  return <h1>Hello World!</h1>
}

export default App;
```

2. Agora é só importar este arquivo em outro ou no arquivo 'index.js' js da sua aplicação. Para utilizar o componente devemos adicioná-lo como um elemento HTML:
```javascript
import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(<App />, document.getElementById('app'));
```

3. Agora é só executar a aplicação que o componente será exibido com suas propriedades configuradas individualmente dos outros componentes. 