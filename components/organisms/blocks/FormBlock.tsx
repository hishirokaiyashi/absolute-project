'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import ContainerSelectButton from '@/components/molecules/commons/ContainerSelectButton';
import Section from '@/components/molecules/commons/Section';
import InputTextElements from '@/components/molecules/form/InputTextElements';
import TitleSubtitleForm from '@/components/molecules/form/TitleSubtitleForm';
import AppContext from '@/context/appContext';
import { IAppContext } from '@/models/appInterface';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';

const FormBlock = () => {
  const { modal, updateState }: IAppContext = useContext(
    AppContext
  ) as IAppContext;
  const currentPosition = modal.position;
  const onCloseForm = () => {
    updateState &&
      updateState({
        modal: {
          ...modal,
          open: false
        }
      });

    // Sau khi đóng modal, cuộn đến vị trí đã lưu trước đó
  };
  // useEffect(() => {
  //   if (!modal.open && modal.position) {
  //     window.scroll(0, modal.position);
  //   }
  // }, [modal.open]);
  // useEffect(() => {
  //   if (modal.open) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'auto';
  //   }
  // }, [modal.open]);

  return (
    <Section
      id="FormBlock"
      container={false}
      // style={{
      //   overscrollBehavior: 'contain'
      // }}
    >
      {modal.open && (
        <div
          className={clsx(
            'fixed top-0 z-[10]  px-[20px] py-8 left-0 w-full h-screen bg-primary overflow-y-auto'
            // modal.open && 'opacity-100 z-[10]'
          )}
        >
          <div className="flex flex-col">
            <div
              //   onClick={() => setIsOpenForm(false)}
              onClick={onCloseForm}
              className="flex justify-end cursor-pointer"
            >
              <ImageElement
                fill={false}
                width={34}
                height={34}
                src="./images/icons/Close.svg"
              />
            </div>
            <div className="flex flex-col lg:px-[305px] lg:pt-[28px] ">
              <div className="lg:pt-[56px] lg:px-[56px] lg:max-w-[882px] lg:m-auto">
                <div className="flex flex-col lg:gap-[12px] text-secondary">
                  <TitleSubtitleForm title="Du willst eine Businessidee launchen?" />
                </div>
                <InputTextElements />
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
export default FormBlock;
