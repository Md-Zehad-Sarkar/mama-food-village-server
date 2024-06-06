import { catchAsync } from '../../utls/catchAsync';
import { sendResponse } from '../../utls/sendResponse';
import { foodServices } from './foods.services';

const getAllFoods = catchAsync(async (req, res) => {
  const result = await foodServices.getAllFoodsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'all foods retrieved success',
    data: result,
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
