# Class Components
## Para utilizar o estados dentro de um componente, precisamos criá-lo como uma classe. É possílvel fazer usando funções, essa é a forma mais moderna para fazer. Mas para aplicaçoes Reacts antigas é provavél que os componentes utilizame classes. 

1. É necessário a importação do componente 'Component' da biblioteca 'react' e herdar ele na classe;
2. Para returnar os elementos do componentes, é necessário utilizar uma função chamada 'render';
3. O estado deve estar dentor de um atributo da classe chamado 'state'; 
4. No 'state' será adicionado todos as varíaveis que podem serem manipuladas ou alterarem de valor no componente. 
5. O estatos é imutável, ou seja, ele não pode ser alterado ou modificado, é criado um novo estado utilizando um método específico para cada estado. 
6. Funções que acessam os atributos da classe através do 'this' devem ser escritas na forma de arrow functions. 
```javascript
import React, { Component } from 'react';

class TechList extends Coponentes {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
     
    // Recriando o estado utilizando todo o valor que já existe no atual, mas o novo elemento.
    this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' })
  }

  render() {
    return (
      <>
        <form onSubmit={this.hanldeSubmit}>
          <input type='text' onChange={this.handleInputChange} value={this.state.newTech} />

          <button type='submit'>Enviar</button>
        </form>
      </>
      <ul>
        {this.state.techs.map(techs => <li key={tech}>{tech}</li>)}
      </ul>
    );
  }
}

export default TechList
```

## Fontes: 
- Rockseat GoStack - Módulo Introdução ao React - Class Components e Estado & Imutabilidade. 