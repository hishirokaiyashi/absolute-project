import { FormFieldTextAreaProps } from '@/SchemaValidations/type/type';
import React from 'react';
import Typography from './Typography';

const TextAreaElement: React.FC<FormFieldTextAreaProps> = ({
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <div className="w-full py-[12px]">
      <textarea
        placeholder={placeholder}
        className="w-full bg-transparent font-diaType text-secondary"
        {...register(name)}
      />
      {error && (
        <div className="mt-[10px] text-errors font-diaType">
          <Typography as="span" size="labelError">
            {error.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TextAreaElement;
