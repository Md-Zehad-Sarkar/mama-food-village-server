import { z } from 'zod';
const phoneRegex = new RegExp(/^[+]?[0-9]{10,14}$/);

export const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be string',
      })
      .min(3, 'Name must be at least 3 characters long')
      .max(26, 'Name must be at most 26 characters long'),
    email: z
      .string({
        required_error: 'Email must be valid email with gmail/yahoo/outlook',
        invalid_type_error:
          'Email must be valid email with gmail/yahoo/outlook',
      })
      .email('This is not a valid email.Please try with gmail/yahoo/outlook')
      .refine(
        (email) =>
          email.endsWith('@gmail.com') ||
          email.endsWith('@outlook.com') ||
          email.endsWith('@yahoo.com'),
      ),

    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
      })
      .min(6, 'Password must be at least 6 character')
      .max(12, 'Password must be at most 12 characters long')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must include at least one special character',
      ),
    contact: z.string().min(10).max(14).regex(phoneRegex, 'invalid contact number'),
    role: z.enum(['Admin', 'Consumer']).optional(),
  }),
});
