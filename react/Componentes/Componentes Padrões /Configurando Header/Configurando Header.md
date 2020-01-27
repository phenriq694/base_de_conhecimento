# Configurando Header
## Como desenvolver um Header básico para ser utilizado e diversas páginas. 
Como o Header não é especifico de uma página, podemos criar uma pasta chamada 'componentes' dentro da pasta src para incluir esse e outros componentes. 
1. Criar um arquivo 'index.js' dentro da pasta do componente Header:
src/components/Header/index.js
2. Copiar e colar o código base abaixo ou usar o atalho da extensão da Rocketseat para React 'rfc':
```
import React from 'react';

// import { Container } from './styles';

export default function Header() {
  return (
    <div />
  );
}
```
3. Adicionar os componentes desejados para o Header no código base. Exemplo: 
```
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/endereco_do_logo';

// Nome dos componentes que serão importados do arquivo de estilização
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Paulo Henrique</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>

            <img src="endereço_imagem_perfil" alt="Perfil">
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
```
4. Criar um arquivo de estilização para este componente:
src/components/Header/styles.js
5. Configurar todos os componentes que estão sendo importados no arquivo 'index.js'. Atalho da extensão React da Rocketseat para VS Code = 'styled-react'. Exemplo de estilização para este header básico:
```
import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 64px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    strong {
      color: #0c715f;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  margin: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
`;
``` 
6. Adicionar o componente criado na página que desejar. Também pode ser adicionado em um componente de layout de página padrão. 
Importar o componente no arquivo da página onde você quer exibí-lo:
```
import Header from '~/components/Header'; 
``` 
Adicionar o componente na página:
```
import React from 'react';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <h1>Dashboard</h1>
    </Wrapper>
  );
}
```

## Fontes: 
### Rockseat GoStack - Módulo GoBarber Web - Configurando Header. 