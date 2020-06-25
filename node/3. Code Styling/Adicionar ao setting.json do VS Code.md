# Adicionar ao setting.json do VS Code
## Código para adicionar ao arquivo de configurações do VS Code que permite corrigir erros de estilização usando o eslint quando o arquivo é salvo:

```
  //Eslint configs
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      { 
          "language": "javascript",
          "autoFix": true,
      },
      {
          "language": "javascriptreact",
          "autoFix": true,
      },
  ],
```

## Fontes: 
### Rockseat GoStack - Módulo Iniciando back-end do GoBarber - ESLint, Prettier & EditorConfig. 