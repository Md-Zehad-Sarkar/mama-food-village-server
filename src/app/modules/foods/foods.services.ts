import { Foods } from './foods.model';

const getAllFoodsFromDB = async () => {
 try {
   const result = await Foods.find();
   return result;
 } catch (error) {
  console.error(error);
 }
};

export const foodServices = { getAllFoodsFromDB };
