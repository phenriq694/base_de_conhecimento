# React Native Gesture Handle

## Botões:

### RecButton
Botão que se adapta ao estilo padrão de cada plataforma.
Pode ser importado dentro de um arquivo do styled-components e estilizado:
```javascript
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
```

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Estilizando formulário. 