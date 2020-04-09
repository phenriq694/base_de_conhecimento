# PropTypes

1. Fazer a instalação da biblioteca:
```
yarn add prop-types 
```

2. Fazer a importação no componente onde será utilizada:
```javascript
import PropTypes from 'prop-types';
```

3. Fazer a declaração das proptypes, class components:
```javascript 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };
}
```

## Tipos de PropTypes:
- PropTypes.shape = Objetos;
- PropTypes.string = String;
- PropTypes.func = Function;

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Realizando navegação. 