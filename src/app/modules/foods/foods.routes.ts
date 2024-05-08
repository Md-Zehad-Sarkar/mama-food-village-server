import express from 'express';
import { foodsController } from './foods.controller';

const router = express.Router();

router.get('/foods', foodsController.getAllFoods);

export const foodsRouter = router;
