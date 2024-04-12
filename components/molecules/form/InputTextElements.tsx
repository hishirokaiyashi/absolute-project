import InputElement from '@/components/atoms/commons/InputElement';
import TextAreaElement from '@/components/atoms/commons/TextAreaElement';
import React from 'react';

const InputTextElements = () => {
  return (
    <div className="flex flex-col lg:gap-[8px] w-full">
      <InputElement value="" name="name" type="text" placeholder="Name*" />
      <InputElement
        value=""
        name="unternehmen"
        type="text"
        placeholder="Unternehmen"
      />
      <InputElement value="" name="email" type="text" placeholder="Email*" />
      <InputElement
        value=""
        name="telefon"
        type="text"
        placeholder="Telefon (+41 xx xxx xx xx)"
      />
      <TextAreaElement name="nachrich" value="" placeholder="Nachricht*" />
    </div>
  );
};

export default InputTextElements;
