import React from 'react';
interface IInputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
}
const InputElement = ({ type, placeholder = '', value, name }: IInputProps) => {
  return (
    <div className="w-full lg:py-[12px]">
      <input
        name={name}
        className="w-full bg-transparent font-diaType"
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputElement;
