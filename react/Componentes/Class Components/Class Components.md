# Class Components
## Para utilizar o estados dentro de um componente, precisamos criá-lo como uma classe. É possílvel fazer usando funções, essa é a forma mais moderna para fazer. Mas para aplicaçoes Reacts antigas é provavél que os componentes utilizame classes. 

1. É necessário a importação do componente 'Component' da biblioteca 'react' e herdar ele na classe;
2. Para returnar os elementos do componentes, é necessário utilizar uma função chamada 'render';
3. O estado deve estar dentor de um atributo da classe chamado 'state'; 
4. No 'state' será adicionado todos as varíaveis que podem serem manipuladas ou alterarem de valor no componente. 
```javascript
import React, { Component } from 'react';

class TechList extends Coponentes {
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList
```

## Fontes: 
- Rockseat GoStack - Módulo Introdução ao React - Class Components. 