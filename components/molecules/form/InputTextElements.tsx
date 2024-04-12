import InputElement from '@/components/atoms/commons/InputElement';
import React from 'react';

const InputTextElements = () => {
  return (
    <div className="flex flex-col lg:gap-[8px] w-full">
      <InputElement
        isTextArea={false}
        value=""
        name="name"
        type="text"
        placeholder="Name*"
      />
      <InputElement
        isTextArea={false}
        value=""
        name="unternehmen"
        type="text"
        placeholder="Unternehmen"
      />
      <InputElement
        isTextArea={false}
        value=""
        name="email"
        type="text"
        placeholder="Email*"
      />
      <InputElement
        value=""
        name="telefon"
        isTextArea={false}
        type="text"
        placeholder="Telefon (+41 xx xxx xx xx)"
      />
      <InputElement
        name="nachrich"
        isTextArea={true}
        value=""
        type="text"
        placeholder="Nachricht*"
      />
    </div>
  );
};

export default InputTextElements;
