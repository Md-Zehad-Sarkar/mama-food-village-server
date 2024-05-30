import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { loginUserValidation } from './auth.validation';
import { authController } from './auth.controller';
const router = express.Router();

router.post(
  '/login',
  validateRequest(loginUserValidation),
  authController.loginUser,
);

export const authRouter = router;
