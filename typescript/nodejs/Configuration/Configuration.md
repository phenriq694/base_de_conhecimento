# Configuration

1. In the Node.js project, install as a development dependency:
```bash
yarn add typescript -D
```
2. Create a file with the the extension '.ts'; 
3. Create the configuration file to typescript:
```bash
yarn tsc --init
```
4. Uncomment the line following line in the typescript configuration file, and change the path:
```json
{
  "outDir": "./dist",                        /* Redirect output structure to the directory. */
  "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
}
```
5. Install the following dependency for run the typescript project in dev mode:
```bash
yarn add ts-node-dev -D
```
6. Configure the 'build' command in the 'scripts' attribut of the 'package.json' file and the command to run the application em dev mode. The 'build' command will build the application and convert all typescript code into javascript code in the './dist/' folder:
```json
{
  "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
  }
}
```
7. For 'express' configuration, it's necessary install the type dependency of the lib:
```bash
yarn add -D @types/express
```

## Sources:
Rockseat GoStack - Module TypeScript - Project Configuration
Rockseat GoStack - Module First Project with Node.js - Structure Configuration