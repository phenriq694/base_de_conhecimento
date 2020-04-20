# Settings
## Configurações padrões do VS Code

### Tema de cores:
```json
{
    "workbench.colorTheme": "Dracula",
}
```

### Terminal integrado configurações:
```json
{
    // Tamanho da fonte do terminal
    "terminal.integrated.fontSize": 14,
}
```

### Pastas na sidebar:
```json
{
    // Troca do tema de ícones
    "workbench.iconTheme": "material-icon-theme",

    // Controla a compactação de subpastas únicas
    "explorer.compactFolders": false,
}
```

### Inicialização do editor:
```json
{
    // Página inicial ao abrir o editor
    "workbench.startupEditor": "newUntitledFile",
}
```

### Configuração de fontes do editor:
```json
{
    // Altera o tipo da fonte
    "editor.fontFamily": "Fira Code",

    // Controla as ligações de cacteres caso a fonte suporte
    "editor.fontLigatures": true,

    // Tamanho da fonte de editor
    "editor.fontSize": 14,

    // Tamanho de espaços percorridos ao pressionar a tecla tab
    "editor.tabSize": 2,

    // Tamanho do espaçamento vertical do texto:
    "editor.lineHeight": 24
}
```

### Configurações do editor de texto:
```json
{
    // Controlar o efeito quando uma linha é selecionada
    "editor.renderLineHighlight": "gutter",

    // Controla o label da guia de um arquivo
    "workbench.editor.labelFormat": "short",

    // Controla a recomendação de extensões dependendo do arquivo que está sendo manipulado
    "extensions.ingoreRecommendations": true,

    // Controla a visualização do caminho de um arquivo na parte superior
    "breadcrumbs.enabled": true,

    // Controla dicas de código
    "editor.parameterHints.enabled": false,

    // Confirmação para antes de mover um arquivo
    "explorer.confirmDragAndDrop": false,

    //Confirmação para antes de deleter um arquivo
    "explorer.confirDelete": false,

    //Controla a limitação das linhas [min, max]
    "editor.rulers": [80, 120]
}
```

## Configurações para linguagens:

### Inicialização do editor:
```json
{
    // Controla a atualização do caminho nas importações de um arquivo caso ele seja movido
    "javascript.updateImportsOnFileMove.enabled": "never",
}
```

### Eslint AutoSave:
```json
{
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true, 
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true, 
        }
    },
}
```

## Fonte:
- Rockseat GoStack - Módulo Ambiente de Desenvolvimento - Configurações do Editor. 