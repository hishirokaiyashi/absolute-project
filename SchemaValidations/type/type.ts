// import { FieldError, UseFormRegister } from 'react-hook-form';

// export type FormData = {
//   name: string;
//   unternehmen?: string;
//   email: string;
//   telefon: number;
//   //   MyCheckbox: boolean;
// };

// export type FormFieldProps = {
//   type: string;
//   placeholder: string;
//   name: ValidFieldNames;
//   register: UseFormRegister<FormData>;
//   error: FieldError | undefined;
//   valueAsNumber?: boolean;
// };

// export type ValidFieldNames = 'name' | 'unternehmen' | 'email' | 'telefon';
// //   | 'MyCheckbox';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type FormData = {
  email: string;
  githubUrl: string;
  yearsOfExperience: number;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | 'email'
  | 'githubUrl'
  | 'yearsOfExperience'
  | 'password'
  | 'confirmPassword';
