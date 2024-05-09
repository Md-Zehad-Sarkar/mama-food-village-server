import { Review } from './reviews.model';

const getAllReviewsFromDB = async () => {
  try {
    const result = await Review.find();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const reviewsServices = { getAllReviewsFromDB };
