# Default Props

1. Definir valores padrões para as propriedades de um componente de função:

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

TechItem.defaultProps = {
  tech: 'Oculto',
};
```

2. Definir valores padrões para as propriedades de um componente de classe:
```javascript
import React, { Component } from 'react';

import TechItem from './TechItem'

class TechList extends Coponentes {
  static defaultProps = {
    tech: 'Oculto',
  };

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

## Fontes: 
- Rockseat GoStack - Módulo Introdução ao React - Default Props & PropTypes. 