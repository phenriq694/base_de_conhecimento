# Navegação 

1. Para fazer navegação entre componentes no react native utilizamos uma propriedade do componente chamada 'navigation' e deve ser feito utilizando uma função. Exemplo:
```javascript
  handleNavigate = (user) => {
    const { navigation } = this.props;

    /* Utilizado o método 'navigate' podemos passar o componente que queremos
    *  navegar e parâmetros para ele. 
    */
    navigation.navigate('User', { user });
  };
```

2. Também é necessário instalar e declarar as proptypes:

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Realizando navegação. 