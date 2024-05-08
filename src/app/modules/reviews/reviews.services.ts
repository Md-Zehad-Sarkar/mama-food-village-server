import { Review } from './reviews.model';

const getAllReviewsFromDB = async () => {
  const result = await Review.find();
  return result;
};

export const reviewsServices = { getAllReviewsFromDB };
