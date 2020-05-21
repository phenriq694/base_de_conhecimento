# Configuring Multer

1. Install packages:
```
yarn add multer
yarn add -D @types/multer
```

2. Create a file called 'upload.ts' in the 'src/config/' folder:
```typescript
import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
```
3. Import the 'multer' package into the routes file or where it will be used;
4. Also, import the upload configuration file;
5. Assing a multer instance to a 'const' and pass the upload config file as params;
6. To upload a single file per request, as example, use the multer instance on the route that will upload using the 'sigle' method, passing as params, a name for the file field; 
```typescript
import { Router } from 'express';
import multer from 'multer'; // 3

import uploadConfig from '../config/upload'; // 4
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig); // 5

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'), // 6
  async (request, response) => {
    console.log(request.file);
    return response.json({ ok: true });
  },
);
export default usersRouter;
```

## Sources:
Rockseat GoStack - Module First Project with Node.js - File Upload