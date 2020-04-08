# Async Storage
## Salvar informações no dispositivo. 

1. Fazer a instalação da biblioteca: 
```
yarn add @react-native-community/async-storage
```

2. Caso a aplicação for para android também, executar o comando:
```
react-native run-android
```

3. Caso a aplicação for para ios também, executar o comando:
```
cd ios
pop install
```

4. Fazer a importação no componente onde será utilizado:
```javascript
import AsyncStorage from '@react-native-community/async-storage';
```

5. Para recuperar dados do storage:
```javascript
AsyncStorage.getItem('nome_do_dado')
```

6. Para salvar dados no storate:
```javascript
AsyncStorage.setItem('nome_do_dado', JSON.stringfy(dado))
```
Não esquecer que os dados devem ser armazenados no formato de JSON. 

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Salvando no storage.

