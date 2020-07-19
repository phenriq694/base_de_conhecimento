# React Navigation 4x

<strong>Acessar a documentação para ver a versão atual e os passos para instalação e configuração!!!</strong>
https://reactnavigation.org/docs/4.x/getting-started

1. Instalar a biblioteca:
```
yarn add react-navigation
```

2. Instalar as dependências:
```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

3. Fazer as configurações específicas para cada plataforma (androind e ios) e depois reconstruir a aplicação no emulador ou device:
```
react-native run-android
```
Ou
```
react-native run-ios
```

4. Adicionar o container onde será adicionado a naveção da aplicação:
```javascript
import { createAppContainer } from 'react-navigation';

const Routes = createAppContainer();

export default Routes;
```

5. Adicionar o tipo navegação, dentro do container. Exemplo: Navigation Stack;

6. Após configurar o tipo de navegação, importar o arquivo de routas no componente principal:
```javascript
import Routes from './routes';
``` 

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - React Navigation. 