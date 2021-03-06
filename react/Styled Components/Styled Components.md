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
É possível recuperar ela para estilizar o componente de forma diferente dependendo do valor da propriedade:
```javascript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.error ? 'red' : '#7159c1' /* Passando uma função é possível ter acesso as propriedades passadas ao componente*/}
  font-family: Arial, Helvetica, sans-serif;
`
```

## Passando atributos para o elemento: 
É possível passar propriedades de um elementos HTML utilizando o método 'attrs'({ attribute }). No exemplo abaixo, a propriedade type submit é passado pleo styled componentes:
```javascript
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
```

## Estilo condicional
É possível estilizar um elemento através de testes condicionais.
```javascript
export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;


&[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
`;
```

## Animações CSS condicional
Importar duas bibliotecas:
```javascript
import styled, { keyframes, css } from 'styled-components';
``` 

Criar uma constante para armazenar a animação:
```javascript
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
```

Dentro da estilização do componente que receberá a animação inserir o código:
```javascript
${props => props.loading &&
  css`
    svg {
      animation: ${rotate} 2s linear inifinite
    }
  `
}
```

Exemplo de uso em:
https://github.com/phenriq694/GoStack_Modulos/blob/master/modulo05/Primeiro%20Projeto%20com%20ReactJS/src/pages/Main/styles.js#L48

## Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Styled Components.
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Estilizando página Main.
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Adicionando repositórios.