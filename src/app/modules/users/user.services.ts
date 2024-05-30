import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';
import { IUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';
import bcrypt from 'bcrypt';

const createUserIntoDB = async (user: IUser) => {
  const existUser = await User.findOne({ email: user.email });
  if (existUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'User Already Exist With This Email',
    );
  }
  const existNumber = await User.findOne({ contact: user.contact });
  if (existNumber) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'This Contact Number already Used',
    );
  }
  //password hashed
  user.password = await bcrypt.hash(user.password, Number(config.BCRYPT_SALT));

  //set user role
  if (user.role && user.role === 'Admin') {
    user.role = 'Admin';
  } else {
    user.role = 'Consumer';
  }

  //user status existing set
  user.isDeleted = false;

  const result = await User.create(user);
  return result;
};

export const userService = { createUserIntoDB };
