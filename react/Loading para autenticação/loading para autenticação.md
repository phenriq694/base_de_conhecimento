# Loading para autenticação 

No arquivo de reducer da autenticação, ouvir mais duas actions: 

```javascritp
//Uma para aguardar a requisição. 
case '@auth/SIGN_IN_REQUEST': {
  draft.loading = true;
  break;
}
//Outra para caso a autenticação falhe
case '@auth/SIGN_FAILURE': {
  draft.loading = false;
  break;
}
``` 
Em '@auth/SIGN_IN_REQUEST' nós alteramos o valor de 'loading' para 'true'. Para demonstrar que a requisição está sendo processada. 
Caso ocorra algum erro na autenticação, a action'@auth/SIGN_FAILURE' é ouvida, e nós 'desligamos' o 'loading' e tratamos o problema, como exibir uma mensagem de erro para o usuário, por exemplo. 
Caso não ocorra nenhum erro, também temos que alterar o valor de 'loading' para false. 

O código base deve parecer com o abaixo: 
```
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;        
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
```

Caso você não tenha refatorando o código, colocar o 'return' por volta do switch. 

Agora, no arquivo onde está o componente onde o loading precisa estar localizado. Por exemplo 'signin/index.js'. Fazer as seguintes alterações:

Importar o  'useSelector' do 'react-redux'. 
```
import {useSelector} from 'react-redux'; 
```
Definir uma constante 'loading' e atribuir, usando o 'useSelector', e acessar o 'state' da aplicação no reducer 'auth', onde foram adicionados as actions para ouvir a requisiçaõ e/ou a falha na autenticação, e acessar a propriedade 'loading':
```
const loading = useSelector(state => state.auth.loading);
```
Adicionar o 'loading' no component que fará uso dele. No exemplo abaixo, foi utilizado em um 'button'. Enquanto 'loading' for verdadeiro (estiver carregando) o conteúdo 'button' será alterado para 'Carregando...'. 
```
<button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
```

O código final deve ficar assim:
```
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </Content>
    </Container>
  );
}
```



