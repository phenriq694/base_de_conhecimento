# PropTypes
## Define os tipos das propriedades de um componentes para evitar erros na aplicação. 

1. Fazer a instalação da lib:
```
yarn add prop-types
```

2. Definir os tipos de cada propriedada do componente de função:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

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

TechItem.propTypes = {
  tech: PropTypes.string, // Como já foi passado uma 'defaultProps' para essa propriedade, não é necessário colocar o 'isRequired'.
  onDelete: PropTypes.func.isRequired,
};
```
3. Definir os tipos de cada propriedada do componente de classe:
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TechItem from './TechItem'

class TechList extends Coponentes {
  static propTypes = {
    tech: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
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