# Generating JWT token

1. Install the packages:
```
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken
```

2. Import the 'sign' function from the package installed and generating the token. Example:
```typescript
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthencticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const token = sign({}, 'd23k4j2k3j4tk2j3klrj', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthencticateUserService;
```

## Sources:
Rockseat GoStack - Module Starting GoBarber back-end - Generating JWT token
