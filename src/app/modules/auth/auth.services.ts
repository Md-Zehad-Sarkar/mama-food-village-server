import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';
import { TLoginUser } from '../../types/auth.type';
import { User } from '../users/user.model';
import bcrypt from 'bcrypt';
import { createToken } from './auth.utls';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  const { email, phone } = payload;
  const user = await User.findOne({
    $or: [{ email: email }, { contact: phone }],
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is Not Found !');
  }

  //check deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This User Is Deleted');
  }

  //password checked matching
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password Do Not Matched');
  }

  const jwtPayload = {
    email: user.email,
    phone: user.contact,
    role: user.role || 'Consumer',
    name: user.name,
  };

  const accessToken = createToken(
    jwtPayload,
    config.Jwt_Access_secret as string,
    config.Jwt_Access_Expires_In as string,
  );

  return { accessToken };
};

export const authService = { loginUser };
