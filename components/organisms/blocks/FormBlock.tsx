'use client';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import InputTextElements from '@/components/molecules/form/InputTextElements';
import TitleSubtitleForm from '@/components/molecules/form/TitleSubtitleForm';
import clsx from 'clsx';
import { useState } from 'react';
import StatusFormBlock from './StatusFormBlock';
interface FormBlockProps {
  handleCloseModal: (isCloseModal: boolean) => void;
  titleForm: string;
}
const FormBlock = ({ handleCloseModal, titleForm }: FormBlockProps) => {
  const [isSuccessForm, setIsSucessForm] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCloseModalBtn = (closeModal: boolean) => {
    console.log(closeModal);
    handleCloseModal(closeModal);
  };

  const handleSubmitForm = (checkSubmit: boolean) => {
    setIsSubmitted(checkSubmit);
  };
  return (
    <div className="fixed lg:px-0 top-0 z-[10] left-0 w-full h-screen flex justify-center items-center bg-primary overflow-y-auto">
      <div
        onClick={() => handleCloseModalBtn(false)}
        className="absolute lg:top-[32px] right-[32px] top-[16px] lg:right-[60px] flex justify-end cursor-pointer"
      >
        <ImageElement
          className="w-[25px] h-[25px] lg:w-[34px] lg:h-[34px]"
          fill={false}
          width={34}
          height={34}
          src="./images/icons/Close.svg"
        />
      </div>
      <div
        className={clsx(
          'flex lg:mt-0 lg:py-8 max-w-[768px] px-[16px] lg:px-0 lg:max-w-[882px] w-full',
          isSubmitted && 'hidden'
        )}
      >
        <div className="flex flex-col w-full">
          <div className="lg:pt-[56px]  lg:m-auto">
            <div className="flex flex-col lg:gap-[12px] text-secondary">
              <TitleSubtitleForm title={titleForm} />
            </div>
            <div className="pt-[40px] lg:pt-[56px]">
              <InputTextElements handleSubmitForm={handleSubmitForm} />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(isSubmitted ? 'block ' : 'hidden')}>
        <StatusFormBlock isSuccess={isSuccessForm} />
      </div>
    </div>
  );
};
export default FormBlock;
