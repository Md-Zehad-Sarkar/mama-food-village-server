import httpStatus from 'http-status';
import { catchAsync } from '../../utls/catchAsync';
import { sendResponse } from '../../utls/sendResponse';
import { authService } from './auth.services';

const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user login successful',
    data: { accessToken },
  });
});

export const authController = { loginUser };
