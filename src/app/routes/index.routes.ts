import express from 'express';
import { foodsRouter } from '../modules/foods/foods.routes';
import { reviewsRouter } from '../modules/reviews/reviews.routes';
import { userRouter } from '../modules/users/user.routes';
import { authRouter } from '../modules/auth/auth.routes';

export const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: userRouter,
  },
  {
    path: '/',
    route: authRouter,
  },
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
