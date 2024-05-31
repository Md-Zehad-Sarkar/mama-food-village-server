import httpStatus from 'http-status';
import { catchAsync } from '../../utls/catchAsync';
import { sendResponse } from '../../utls/sendResponse';
import { userService } from './user.services';
import { RequestHandler } from 'express';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const body = req.body;

  const result = await userService.createUserIntoDB(body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successful',
    data: result,
  });
});

export const userController = { createUser };
