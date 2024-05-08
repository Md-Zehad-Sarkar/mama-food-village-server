import { catchAsync } from '../../utls/catchAsync';
import { sendResponse } from '../../utls/sendResponse';
import { reviewsServices } from './reviews.services';

const getAllReviews = catchAsync(async (req, res) => {
  const result = await reviewsServices.getAllReviewsFromDB();
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Client Reviews Retrieved Successful',
    data: result,
  });
});
export const reviewsController = { getAllReviews };
