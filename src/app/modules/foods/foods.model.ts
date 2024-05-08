import { Schema, model } from 'mongoose';
import { IFoods } from './foods.interface';

const FoodsSchema = new Schema<IFoods>({
  id: { type: String || Number },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  image: { type: String },
});

export const Foods = model<IFoods>('Food', FoodsSchema);
