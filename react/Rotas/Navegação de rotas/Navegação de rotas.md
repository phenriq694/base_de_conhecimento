# Navegação de rotas

1. Para fazer a navegação de uma página para outra utilizar o componente 'Link' do 'react-router-dom'. Para isso, bastá importá-lo no arquivo e configurar o elemento:
```javascript
import { Link } from 'react-router-dom';

render () {
  return (
    <Link to={'/aboutUs'}>
      Sobre nós
    </Link>
  )
}
```

# Fontes:
- Rockseat GoStack - Módulo Primeiro projeto com ReactJS - Navegação de rotas.