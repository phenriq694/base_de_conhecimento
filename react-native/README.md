<h1 align="center">
  <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/2991881/reactpurple.png" 
    width="150px"
  />
  <br />
  <strong>React Native</strong>
</h1>

## O que é React Native?
- Versão do React para desenvolvimento mobile;
- Multiplataforma;
- Podemos manipular cada plataforma de forma diferente;
- Interface nativa e não híbrida.
- Código não é transpilado;

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78413071-2fa07d00-75ec-11ea-81dc-6653615099b3.png" width="800px">
</p>

## Sintaxe:
- A declaração de componentes é igual ao web;
- Não usamos HTML e sim componentes próprios;
- Aplicamos estilo sem classes ou ID's;
- Todo texto é < Text/ > não existe estilização própria;

```javascript
import {
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';

function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização no React Native
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  button: {
    background: '#7159c1',
  },

  text: {
    fontWeight: 'hold',
  },
});
```

## Fontes: 
- Rockseat GoStack - Módulo Primeiro projeto com React Native - Conceitos do React Native. 