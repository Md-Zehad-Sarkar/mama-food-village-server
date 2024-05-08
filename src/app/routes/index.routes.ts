import express from 'express';
import { foodsRouter } from '../modules/foods/foods.routes';
import { reviewsRouter } from '../modules/reviews/reviews.routes';

export const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: foodsRouter,
  },
  {
    path: '/',
    route: reviewsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
