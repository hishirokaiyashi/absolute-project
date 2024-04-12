import React from 'react';
interface TextAreaElementProps {
  name: string;
  placeholder: string;
  value: string;
}
const TextAreaElement = ({
  placeholder = '',
  value,
  name,
}: TextAreaElementProps) => {
  return (
    <textarea
      name={name}
      className="w-full bg-transparent font-diaType "
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextAreaElement;
