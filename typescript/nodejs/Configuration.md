# Configuration

1. In the Node.js project, install as a development dependency:
```bash
yarn add typescript -D
```
2. Create a file with the the extension '.ts'; 
3. Create the configuration file for typescript:
```bash
yarn tsc --init
```
4. Uncomment the line follow line in the typescript configuration file, and change the path:
```json
{
  "outDir": "./dist",                        /* Redirect output structure to the directory. */
}
```
4. For 'express' configuration, it's necessary install the type dependency of the lib:
```bash
yarn add -D @types/express
```

## Sources:
Rockseat GoStack - Module TypeScript - Project Configuration