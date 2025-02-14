
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()


 class PostMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    next();
  }

}

class ViewMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      console.log(req.body, "sds");
      next();
    }

}


export {PostMiddleware,ViewMiddleware}