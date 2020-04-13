# Creating React Project from scratch

1. Create the project folder:
```bash
mkdir frontend
cd frontend
```

2. Create the dependency file with yarn:
```bash
yarn init -y
``` 

3. Create two folders 'src/' and 'public/':
```bash
mkdir src public
```

4. Install 'react' and 'react-dom' libs:
```bash
yarn add react react-dom
```

5. Criar um arquivo chamado 'index.html' dentro da pasta 'public/'. Adicionar um div com id 'app' no corpo do HTML.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS</title>
  </head>
  
  <body>
    <div id="app"></div>
  </body>
</html>
```

6. Configure Babel: https://github.com/phenriq694/base_de_conhecimento/blob/master/react/1.%20Criando%20um%20projeto/Without%20create-react-app/Configuring%20Babel.md


7. Configure Webpack: https://github.com/phenriq694/base_de_conhecimento/blob/master/react/1.%20Criando%20um%20projeto/Without%20create-react-app/Configuring%20Webpack.md

8. Create a file called 'index.js' in the root folder and add the following code:
```javascript
import React from 'react';
import { render } from 'react-dom';

import MainComponent from './MainComponent';

render(<MainComponent />, document.getElementById('app'));
```

## Sources:
- Rockseat GoStack - Module Front-end com ReactJS - Configuring Babel. 
