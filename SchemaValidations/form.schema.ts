import { ZodType, z } from 'zod'; // Add new import
import { FormData } from './type/type';
import validator from 'validator';

export const UserSchema: ZodType<FormData> = z.object({
  name: z.string().trim().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email format' }),
  company: z.string().trim().optional(),
  phoneNumber: z
    .string()
    .trim()
    .optional()
    .refine(
      (value: string | undefined) => {
        if (value && value.length > 0) {
          return validator.isMobilePhone(value, ['de-DE', 'en-US']);
        }
        return true;
      },
      {
        message: 'Invalid phone number',
      }
    ),
  news: z.string().trim().min(1, { message: 'This field is required' }),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the terms and conditions',
  }),
});
