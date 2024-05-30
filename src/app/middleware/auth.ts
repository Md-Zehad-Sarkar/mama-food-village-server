import httpStatus from 'http-status';
import { AppError } from '../error/AppError';
import { TUserRole } from '../types/auth.type';
import { catchAsync } from '../utls/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/users/user.model';
import { NextFunction, Request, Response } from 'express';

const auth = (...roles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    //if token not exist
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    //if valid token
    const decoded = jwt.verify(
      token,
      config.Jwt_Access_secret as string,
    ) as JwtPayload;
    const { role, email } = decoded;

    //check user
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This User Not Found');
    }

    const isDeleted = user?.isDeleted;
    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
    }

    if (roles && !roles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized  hi!',
      );
    }

    //for extra type checking
    // req.user = decoded as JwtPayload & { role: string };

    next();
  });
};

export default auth;
