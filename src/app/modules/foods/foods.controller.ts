import { catchAsync } from '../../utls/catchAsync';
import { sendResponse } from '../../utls/sendResponse';
import { foodServices } from './foods.services';

const getAllFoods = catchAsync(async (req, res) => {
  const category = (req.query.category as string) || '';
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const result = await foodServices.getAllFoodsFromDB(category, page, limit);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'all foods retrieved success',
    data: result?.data,
    page: result?.page,
    limit: result?.limit,
  });
});

const getSingleFood = catchAsync(async (req, res) => {
  const { foodId } = req.params;
  const result = await foodServices.getSingleFoodFromDB(foodId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single food retrieved success',
    data: result,
  });
});

export const foodsController = { getAllFoods, getSingleFood };
