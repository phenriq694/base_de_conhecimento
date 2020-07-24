# Scripts Commands

1. Add the follwoing commands in the 'package.json':
```json
{
  "scripts": {
    "build": "sucrase ./src -d ./dist --transforms imports",
    "start": "node dist/server.js"
  }
}
```

## Sources:
Rockseat GoStack - Module Node Deploy - Running Server