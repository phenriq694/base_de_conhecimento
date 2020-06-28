# Authetication Loading  

1. In the 'src/store/auth/reducer.js' file, listen for two new actions:
```javascript
//Wait the request 
case '@auth/SIGN_IN_REQUEST': {
  draft.loading = true;
  break;
}
// In case the request failed
case '@auth/SIGN_FAILURE': {
  draft.loading = false;
  break;
}
``` 
2. In '@auth/SIGN_IN_REQUEST', the value of 'loading' is changed to 'true'. This will inform the application that the request is being processed;
3. If there is problem woth the request, the action '@auth/SIGN_FAILURE' will be heard and loading value will be changed to 'false'. The error message will be handled;
4. If there is no error in the request, the 'loading' value needs to change to 'false'. So, it's necessary to add this feature in the '@auth/SIGN_IN_SUCCESS' action too:
```javascript
case '@auth/SIGN_SUCCESS': {
  draft.token = action.payload.token;
  draft.signed = true;
  draft.loading = false;
  break;
}
```
5. After these configurations, the code will look like this: 
```javascript
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
6. In the component that needs the authetication loading, make the following configurations:
7. Import the 'useSelection' from 'react-redux':
```javascript
import {useSelector} from 'react-redux'; 
```
8. Declare a const called 'loading' and assign it with 'useSelector' passing the state of the auth module, selecting the 'loading' value:
```javascript
const loading = useSelector(state => state.auth.loading);
```
9. Add the 'loading' const to the component that will use it. In the following example, it was used on a button. As long as 'loading' is equal to 'true' (loading...) the content button will change to 'Loading...':
```javascript
<button type="submit">{loading ? 'Loading...' : 'Access'}</button>
```
10. After all these configurations, the component should look like this:
```javascript
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
11. In the saga file of the auth module, it's necesary to add a 'try/catch' around the sing in code to catch any errors that may occur. To do this, import the action that is triggered when an error occurs in a request:
```javascript
import { signFailure } from './actions' 
```
12. Then, add the 'try/catch': 
```javascript
try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
```
13. After this configuration, the saga file will look like this:
```javascript
import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
```

## Sources:
Rockseat GoStack - Module GoBarber Web - Authetication Loading


