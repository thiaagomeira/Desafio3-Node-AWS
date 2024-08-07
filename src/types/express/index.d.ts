import { Request } from 'express';
import { User } from '../../src/models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}
export { Request };

import { Response } from 'express';

declare module 'express-serve-static-core' {
  interface Response {
    user?: any;
  }
}
export { Response };

import { NextFunction } from 'express';

declare module 'express-serve-static-core' {
  interface NextFunction {
    user?: any;
  }
}
export { NextFunction };

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}