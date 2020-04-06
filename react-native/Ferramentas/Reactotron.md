# Reactotron

1. Fazer o download da aplicação desktop:
https://github.com/infinitered/reactotron/releases

2. Instalar a biblioteca:
```
yarn add reactotron-react-native
``` 

3. Dentro da pasta 'src/config' criar um arquivo chamado 'ReactotronConfig.js'.

4. Copiar o código abaixo no arquivo:
```javascript
import Reactotron from 'reactotron-react-native';

// Variável global do react native'__DEV__' retorna true quando a aplicação é emulada em modo de desenvolvimento.
if (__DEV__) {
  //Só vai executar quando a aplicação estiver em modo de desenvolvimento
  
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

    console.tron = tron;

    tron.clear();
}
```

5. Fazer a importarção dentro do componente principal da aplicação:
```javascript
import './config/ReactotronConfig';
``` 

6. Após a importarção deste arquivo no componente, caso não aparecer nada no Reactotron, adicionar o IP da máquina de desenvolvimento:
```javascript
  const tron = Reactotron.configure({ host: 'ip' })
    .useReactNative()
    .connect();
``` 

7. Fazer testes adicionado a seguinte linha em um componente:
```javascript
console.tron.log('Hello')
```
Exemplo de como deve aparecer no Reactotron

<img src="https://user-images.githubusercontent.com/54601930/78514822-c9e9f780-7789-11ea-9399-e5e4107b80d0.png">

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Configurando Reactotron. 