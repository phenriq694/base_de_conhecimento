# Rotas Privadas

1. Criar um arquivo chamado 'Routes.js' dentro da pasta 'src/routes'.
2. Importar os módulos: 
```
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
```
3. Exportar uma função: 
```
export default function RouteWrapper() {}
```
4. Desestruturar as propriedades que este componente recebe (propriedades passadas para as rotas):
```
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest // Todas as outras propriedades que são passadas,
}) {}
```
5. Adicionar a propriedade 'isPrivate' nas rotas que serão privadas no arquivo 'routes.js':
```
<Routes path={"/dashboard" component={Dashboard} isPrivate}>
```
6. Adicionar as prop-types:
```
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
}
```
7. Validar se o usuário está logado ou não para acessar uma rota privada que precisa estar logado:
```
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest // Todas as outras propriedades que são passadas,
}) {
  // Valor estático para exemplificar se o usuário está logado ou não. 
  const signed = false;

  if(!signed && isPrivate) {
    return <Redirect to="/" />
  }
}
```

8. Validar se o usuário já está logado e se sim, redirecioná-lo para uma rota padrão da aplicação:
```
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest // Todas as outras propriedades que são passadas,
}) {
  // Valor estático para exemplificar se o usuário está logado ou não. 
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }
}
```
9. Caso o usuário esteja logado e acessando uma rota privada, retornar essa rota:
```
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest // Todas as outras propriedades que são passadas,
}) {
  // Valor estático para exemplificar se o usuário está logado ou não. 
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Route {...rest} component={Component} />
  );
}
```
10. Importar este arquivo no arquivo de rotas 'routes.js':
```
import Route from ./Route 
```

