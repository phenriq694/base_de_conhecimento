# VS Code Configuration

1. In the Visual Code 'settings.json' file, add the following configuration to correct all code style errors when the file is saved
```json
{
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
  },
}
```
