import { UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthGuard } from 'src/guard/guard';
export function logmiddleware(req: Request, res: Response, next: NextFunction) {
  const url = req.url;
  console.log(url);
  if (url === '/auth/login') {
    next();
  } else {
    next(); // AuthGuard
  }
}
