# Styled Components 
## Biblioteca para estilização com o CSS

1. Fazer a instalação da biblioteca 'styled-components':
```
yarn add styled-components
```
2. Instalar a extensão do styled componentes no editor de código (VS Code);
3. Criar um arquivo chamado 'styles.js' dentro da pasta da página ou componente que será estilizado. 
4. Padrão para utilizar o styled components:
```javascript
import styled from 'styled-components';

export const ComponentName = styled.HTML_TAG_NAME`
  CSS
`
```
5. Exemplo:
```javascript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`
```
6. Importar a tag configurada no 'styles.js' no componente 'index.js':
```javascript
import React from 'react';

import { Title } from './styles';

export default function Home() {
  return <Title>Home</Title>
}
```

## Acesando as propriedades de um styled component:
Caso for passado alguma propriedade no style component, como por exemplo:
```javascript
<Title error>Home</Title>
``` 
É possível recuperar ela para esilizar o componente de forma diferente dependendo do valor da propriedade:
```javascript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.error ? 'red' : '#7159c1' /* Passando uma função é possível ter acesso as propriedades passadas ao componente*/}
  font-family: Arial, Helvetica, sans-serif;
`
```


## Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Styled Components.