import express from 'express';
import { userValidationSchema } from './user.validation';
import { userController } from './user.controller';
import { validateRequest } from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/sign-up-user',
  validateRequest(userValidationSchema),
  userController.createUser,
);

export const userRouter = router;
