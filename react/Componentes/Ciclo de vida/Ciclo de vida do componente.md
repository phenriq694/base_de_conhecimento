# Ciclo de vida do componente

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
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estados.
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringfy(this.state.techs));
    }
  }

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
- Rockseat GoStack - Módulo Introdução ao React - Ciclo de vida dos componentes. 