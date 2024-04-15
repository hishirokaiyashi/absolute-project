'use client';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import InputTextElements from '@/components/molecules/form/InputTextElements';
import TitleSubtitleForm from '@/components/molecules/form/TitleSubtitleForm';
import AppContext from '@/context/appContext';
import { IAppContext } from '@/models/appInterface';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import StatusFormBlock from './StatusFormBlock';

const FormBlock = () => {
  const { modal, updateState }: IAppContext = useContext(
    AppContext
  ) as IAppContext;
  const onCloseForm = () => {
    updateState &&
      updateState({
        modal: {
          ...modal,
          open: false,
        },
      });
    document.body.style.overflowY = 'auto';
  };
  const [isSuccessForm, setIsSucessForm] = useState(true);

  return (
    <>
      {modal.open && (
        <div
          className={
            'fixed top-0 z-[10] left-0 w-full h-screen bg-primary overflow-y-auto'
          }
        >
          <div
            className={clsx(
              'flex flex-col px-[20px] lg:mt-0 py-8',
              modal.isSubmitted && 'hidden'
            )}
          >
            <div
              onClick={onCloseForm}
              className="mr-[12px] lg:mr-0 flex justify-end cursor-pointer"
            >
              <ImageElement
                className="lg:w-[34px] lg:h-[34px] w-[25px] h-[25px]"
                fill={false}
                width={34}
                height={34}
                src="./images/icons/Close.svg"
              />
            </div>
            <div className="flex flex-col lg:px-[305px] pt-[16px] lg:pt-[28px] ">
              <div className="lg:pt-[56px] lg:px-[56px] lg:max-w-[882px] lg:m-auto">
                <div className="flex flex-col lg:gap-[12px] text-secondary">
                  <TitleSubtitleForm title={modal.titleModal} />
                </div>
                <div className="pt-[40px] lg:pt-[56px]">
                  <InputTextElements />
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(modal.isSubmitted ? 'block ' : 'hidden')}>
            {isSuccessForm ? (
              <StatusFormBlock isSuccess={true} />
            ) : (
              <StatusFormBlock isSuccess={false} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default FormBlock;
