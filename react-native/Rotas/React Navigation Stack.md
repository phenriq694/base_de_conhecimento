# React Navigation Stack
Tipo de naveção em pilhas

1. Fazer a instalação da biblioteca:
```
yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
```

2. Fazer a importação do componente para a naveção em stack e adicionar dentro do container de navegação: 
```javascript
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
``` 

## Configuração padrões:
Segundo parâmetro passado depois dos componentes, para incluir configurações padrões para todos. 

### headerLayoutPreset: 
Alinha o titulo do componente.
```javascript
{
  headerLayoutPreset: 'center';
}
```

### headerBackTitleVisible: 
Altera as propriedades do texto que aparece quando é feita a navegação de um componente para o outro.
```javascript
{
  headerBackTitleVisible: false;
}
```

### headerStyle: 
Altera a cor de fundo do header
```javascript
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#7159c1';
    }
  }
}
```

### headerTintColor: 
Altera a cor do texto no header.
```javascript
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
  }
}
```

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - React Navigation. 