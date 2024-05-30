import express from 'express';
import { foodsController } from './foods.controller';
import auth from '../../middleware/auth';
import { userRole } from '../users/user.constant';

const router = express.Router();

router.get(
  '/foods',
  auth(userRole.Admin, userRole.Consumer),
  foodsController.getAllFoods,
);

export const foodsRouter = router;
