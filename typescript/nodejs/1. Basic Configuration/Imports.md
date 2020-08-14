# Imports

1. In the 'tsconfig.json' file, configure the following attributes. Add the name of the folders you want to find easily:
```json
{
    "baseUrl": "./src",                       /* Base directory to resolve non-absolute module names. */
    "paths": {
    "@modules/*": ["modules/*"],
    "@config/*": ["config/*"],
    "@shared/*": ["shared/*"]
}
```
2. To make any importation, use the '@' char following by the folder name. Example:
```typescript
import User from '@modules/infra/typeorm/entities/User';
```
3. Install the follwing lib:
```
yarn add tsconfig-paths -D
```
4. Add the following configuration into the 'package.json' file: 
```json
{
  "scripts": {
    "dev:server": "ts-node-dev -r tsconfig-paths/register --inspect --transpileOnly --ignore-watch node_modules src/shared/infra/http/server.ts",
    "start": "ts-node src/shared/infra/http/server.ts",
    "typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
  },
}
```

## Sources:
Rockseat GoStack - Module Architecture and Tests - Imports Configuration