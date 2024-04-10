import React from 'react';
interface IInput {
  type: string;
  placeholder?: string;
}
const Input = ({ type, placeholder = '' }: IInput) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
