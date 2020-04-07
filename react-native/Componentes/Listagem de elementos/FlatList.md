# Flatlist 

1. Pode ser atribuido a um elemento do JSX do componente direto no styled components. No exemplo abaixo já foi passado um atributo para não exibir a barra de rolagem:
```javascript
import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
```

2. Exemplo dentro do componente:
```javascript
        <List
          data={users} // base de dados com os elementos que será renderizados
          keyExtractor={(user) => user.login} // Chave única para cada elemento
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
```


## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Estilizando listagem.

