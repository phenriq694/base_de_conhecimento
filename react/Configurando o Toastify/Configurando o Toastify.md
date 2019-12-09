#Configurando o Toastify
## Como configurar o módulo toastify em uma aplicação react para exibir mensagem customizadas aos usuários. 
Fazer a instalção do módulo:
#### Utilizando yarn
```
yarn add react-toastify
```
Importar um componente do módulo no arquivo 'App.js' da sua aplicação:
```
import { ToastContainer } from 'react-toastify';
```
Adicionar o componente no meio dos seus outros componentes neste mesmo arquivo. No exemplo abaixo, foi adicionando um atributo (autoClose) com o tempo em que a mensagem ficará na tela:
```
<ToastContainer autoClose={3000} /> 
```
Importar um arquivo 'css' no no arquivo de estilização global da sua aplicação:
```
import 'react-toastify/dist/ReactToastify.css'
```
Importar um componente do módulo no arquivo que você deseja acionar essa mensagem quando necessário:
```
import { toast } from 'react-toastify' 
```
E para utilizar, basta usar o componente com o tipo de mensagem que você quer exibir na tela:
```
tost.error('Falha na autenticação')
```

### Fontes: GoStack - Rocketseat - Módulo 09 - Exibindo Toasts. 