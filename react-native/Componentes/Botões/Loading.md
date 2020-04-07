# Loading 
## Configurações para um botão de loaging

1. Importar o componente 'ActivityIndicator' da biblioteca do react-native:
```javascript
import { ActivityIndicator } from 'react-native';
```

2. Adicionar ele dentro do JSX, podendo combinar com um teste condicional: 
```javascript
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
```

3. Configuração no styled components. Foi adicionado uma teste no atributo 'opacity' para diminuir a opacidade do botão quando ele estiver em loading:
```javascript
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
```

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Estilizando listagem.