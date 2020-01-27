# CSS Global Padrão
## Folha de estilo padrão para ser utilizada como global em um projeto React.

```css
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #e5e6f0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }
```
## Fonte:
- Semana Omnistack 10.0 - Construindo a interface web