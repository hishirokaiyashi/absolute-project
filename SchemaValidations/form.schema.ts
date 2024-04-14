// import z from 'zod';

// export const FormBodyType = z
//   .object({
//     name: z.string().trim().min(2).max(256),
//     email: z.string().email(),
//     unternehmen: z.string().min(6).max(100),
//     telefon: z.number(),
//     MyCheckbox: z.boolean().refine(value => value === true, {
//       message: 'MyCheckbox must be true'
//     })
//   })
//   .strict();

// export type FormBodyType = z.TypeOf<typeof FormBodyType>;
import { ZodType, z } from 'zod'; // Add new import
import { FormData } from './type/type';

export const UserSchema: ZodType<FormData> = z.object({
  email: z.string().email(),
  githubUrl: z
    .string()
    .url()
    .includes('github.com', { message: 'Invalid GitHub URL' }),
  yearsOfExperience: z
    .number({
      required_error: 'required field',
      invalid_type_error: 'Years of Experience is required'
    })
    .min(1)
    .max(10),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
  confirmPassword: z.string()
});
