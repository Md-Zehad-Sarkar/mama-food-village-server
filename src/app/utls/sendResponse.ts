import { Response } from 'express';
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
  page?: number;
  limit?: number;
};

//send response
export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
    page: data?.page,
    limit: data?.limit,
  });
};
