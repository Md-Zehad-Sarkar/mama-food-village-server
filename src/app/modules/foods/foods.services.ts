import { Foods } from './foods.model';

const getAllFoodsFromDB = async () => {
  try {
    const result = await Foods.find();
    return result;
  } catch (error) {
    console.error(error);
  }
};

// get single food
const getSingleFoodFromDB = async (id: string) => {
  const result = await Foods.findOne({ _id: id });
  return result;
};

export const foodServices = { getAllFoodsFromDB, getSingleFoodFromDB };
