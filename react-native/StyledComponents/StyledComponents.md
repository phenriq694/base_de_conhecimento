# Styled Components

1. Fazer a instalação da biblioteca 'styled-components':
```
yarn add styled-components
```
2. Instalar a extensão do styled componentes no editor de código (VS Code);
3. Criar um arquivo chamado 'styles.js' dentro da pasta da página ou componente que será estilizado. 
4. Padrão para utilizar o styled components:
```javascript
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
```

5. No Styled components para React Native não é possível fazer o encadeamento de estilização, sendo necessário criar e estilizar cada elemento separado e estilização global, que pode ser feita criando um componente para várias páginas. 

## Fonte:
- Rockseat GoStack - Módulo Prmeiro projeto com React Native - Configurando StatusBar. 