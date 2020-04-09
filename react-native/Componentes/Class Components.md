# Class Components
Exemplo de class components no react native

## Main.js
```javascript
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
```

## navigationOptions
Não é possível passar um valor que pode ser acessando atráves de 'this.props' em um método estático. Então quando for necessário fazer isso, é necessário passar uma função e fazer desestruturação para pegar a propriedade desejada. Exemplo:
```javascript
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });
```

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Acessando API do Github.