# Propriedades do React 

1. Abaixo temos dois componentes: um é uma lista de componentes e o outro é o componente que faz parte dessa lista. 

TechList.js
```javascript
import React, { Component } from 'react';

import TechItem from './TechItem'

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
  
  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <>
        <form onSubmit={this.hanldeSubmit}>
          <input type='text' onChange={this.handleInputChange} value={this.state.newTech} />

          <button type='submit'>Enviar</button>
        </form>

        <ul>
          {this.state.techs.map(techs => <TechItem key={tech}/>)}
        </ul>
      </>
    );
  }
}

export default TechList
```

TechItem.js
```javascript
import React from 'react';

function TechItem() {
  return (
    <li>
      {tech}
      <button type="button">Remover</button>
    </li>
  );
}

export default TechItem;
```

2. O componente 'TechItem' precisa de informações que apenas o 'TechList' pode manusear, como o estado. 
3. Para o TechItem ter acesso ao estado 'tech' e a função de remoção de um elemento do estado 'handleDelete()', temos que passar para ele através das propriedades. 
4. Propriedades é tudo aquilo que é passado para o componente dentro da tag. 
5. No código abaixo temos o componente TechList passando informações para o componente 'TechItem', dentro da tag do componente. 
6. Essas informações são resgatadas no componente 'TechItem' usando uma desestruturação nos parametros, já que esse componente é uma função. 

TechList.js
```javascript
import React, { Component } from 'react';

import TechItem from './TechItem'

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
  
  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <>
        <form onSubmit={this.hanldeSubmit}>
          <input type='text' onChange={this.handleInputChange} value={this.state.newTech} />

          <button type='submit'>Enviar</button>
        </form>

        <ul>
          {this.state.techs.map(techs => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>)}
        </ul>
      </>
    );
  }
}

export default TechList
```

TechItem.js
```javascript
import React from 'react';

function TechItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

export default TechItem;
```
## Fontes: 
- Rockseat GoStack - Módulo Introdução ao React - Propriedades do React. 