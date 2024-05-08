import { Foods } from './foods.model';

const getAllFoodsFromDB = async () => {
  const result = await Foods.find();
  return result;
};

export const foodServices = { getAllFoodsFromDB };
