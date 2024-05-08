import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export const apiNotFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
    error: '',
  });
  next();
};
