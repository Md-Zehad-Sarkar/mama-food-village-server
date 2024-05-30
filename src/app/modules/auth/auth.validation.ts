import { z } from 'zod';

export const loginUserValidation = z.object({
  body: z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
    password: z.string(),
  }),
});
