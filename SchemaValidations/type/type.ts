// //   | 'MyCheckbox';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type FormData = {
  email: string;
  name: string;
  company?: string;
  phoneNumber?: string;
  news: string;
  acceptPolicy: boolean;
};

export type FormFieldProps = {
  type: string;
  placeholder?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error?: FieldError | undefined;
  valueAsNumber?: boolean;
  required?: boolean;
};
export type FormFieldTextAreaProps = {
  type: string;
  placeholder?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error?: FieldError | undefined;
  required?: boolean;
};
export type ValidFieldNames =
  | 'email'
  | 'name'
  | 'company'
  | 'phoneNumber'
  | 'news'
  | 'acceptPolicy';
export type ValidFieldRadioName = 'acceptPolicy';
export type FormFieldRadioProps = {
  type: string;
  name: ValidFieldRadioName;
  register: UseFormRegister<FormData>;
  error?: FieldError | undefined;
};
