import { Request } from 'express';

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