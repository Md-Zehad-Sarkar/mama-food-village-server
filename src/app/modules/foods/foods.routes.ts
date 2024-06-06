import express from 'express';
import { foodsController } from './foods.controller';

const router = express.Router();

router.get('/foods', foodsController.getAllFoods);
router.get('/foods/:foodId', foodsController.getSingleFood);

export const foodsRouter = router;
