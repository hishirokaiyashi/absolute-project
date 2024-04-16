import { ZodType, z } from 'zod'; // Add new import
import { FormData } from './type/type';
import validator from 'validator';

export const UserSchema: ZodType<FormData> = z.object({
  name: z.string().trim().min(1, { message: 'Dieses Feld ist erforderlich' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Dieses Feld ist erforderlich' })
    .email({ message: 'ungültiges Email-Format' }),
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
  news: z.string().trim().min(1, { message: 'Dieses Feld ist erforderlich' }),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    message: 'Bitte akzeptiere die Datenschutz und AGB’s.',
  }),
});
