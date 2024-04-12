import React from 'react';
interface IInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  isTextArea: boolean;
}
const InputElement = ({
  isTextArea = false,
  type,
  placeholder = '',
  value,
  name,
}: IInput) => {
  return (
    <div className="lg:py-[12px] w-full">
      {!isTextArea ? (
        <input
          name={name}
          className="w-full font-diaType"
          value={value}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          name={name}
          className="w-full font-diaType"
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputElement;
