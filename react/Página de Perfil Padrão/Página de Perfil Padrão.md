# Página de Perfil Padrão

## index.js
```
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper } from './styles';

export default function NewUser() {
  return (
    <Wrapper>
      <Header />

      <Form>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Endereço de e-mail..." />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha Atual..." />
        <Input type="password" name="password" placeholder="Senha..." />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha..."
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair</button>
    </Wrapper>
  );
}
```

# styles.js
```
import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #0c715f;

  form {
    max-width: 900px;
    margin: 30px auto;

    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

      > button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f64c75')};
      }
    }
  }
`;
```
## Fontes: 
### Rockseat GoStack - Módulo GoBarber Web - Página de Perfil. 