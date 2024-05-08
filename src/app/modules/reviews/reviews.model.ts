import { Schema, model } from 'mongoose';
import { IReviews } from './reviews.interface';

const reviewsSchema = new Schema<IReviews>({
  name: { type: String, required: true },
  profile_image: { type: String },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  create_time: { type: String, required: true },
  create_date: { type: String, required: true },
  review: { type: String, required: true },
});

export const Review = model<IReviews>('review', reviewsSchema);
