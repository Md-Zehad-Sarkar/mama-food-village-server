import express from 'express';
import { reviewsController } from './reviews.controller';
const router = express.Router();
router.get('/reviews', reviewsController.getAllReviews);

export const reviewsRouter = router;
