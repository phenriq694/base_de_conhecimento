# Recuperando dados do usuário na Página de Perfil

1. No arquivo 'index.js' da página de Perfil, importar o 'useSelector' do Redux:
```
import { useSelector } from 'react-redux';
```

2. Criar uma constante para armazenar os valores recuperados do Redux:
```
const profile = useSelector(state => state.user.profile);
```

3. Adicionar essa constante como dados de inicialização do form através do atributo 'initialData':
```
 <Form initialData={profile}>
```

4. Criar uma função para lidar com o submit e adicionar na tag 'Form':
```
function handleSubmit(data) {}

return (
  <Wrapper>
    <Form inicialData={profile} onSubmit={handleSubmit}>
)
```

### Código completo:
```
import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Wrapper } from './styles';

export default function NewUser() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Wrapper>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Endereço de e-mail..." />

        <hr />

        <Input type="password" name="password" placeholder="Senha..." />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha..."
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
    </Wrapper>
  );
}
```

## Fontes: 
### Rockseat GoStack - Módulo GoBarber Web - Configurando Header.