import { Foods } from './foods.model';

const getAllFoodsFromDB = async (
  searchText: string,
  page: number,
  limit: number,
) => {
  const searchQuery = {
    $or: [
      { name: { $regex: searchText, $options: 'i' } },
      { category: { $regex: searchText, $options: 'i' } },
    ],
  };

  const skip = (page - 1) * limit;

  const result = await Foods.find(searchQuery).skip(skip).limit(limit);
  return { data: result, page, limit };
};

// get single food
const getSingleFoodFromDB = async (id: string) => {
  const result = await Foods.findOne({ _id: id });
  return result;
};

export const foodServices = { getAllFoodsFromDB, getSingleFoodFromDB };
