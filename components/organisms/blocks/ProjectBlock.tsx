'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import ContainerSelectButton from '@/components/molecules/commons/ContainerSelectButton';
import Section from '@/components/molecules/commons/Section';
import InputTextElements from '@/components/molecules/form/InputTextElements';
import TitleSubtitleForm from '@/components/molecules/form/TitleSubtitleForm';
import { useState } from 'react';

const ProjectBlock = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleOpenForm = (data: boolean) => {
    setIsOpenForm(data);
  };
  return (
    <Section
      id="ProjectBlock"
      container
      className="relative lg:mt-60 mt-[100px]"
    >
      {!isOpenForm ? (
        <div className="flex flex-col items-center justify-center ">
          <ImageElement
            className="lg:pb-[53px] lg:h-[240px] lg:width-[240px]"
            fill={false}
            width={200}
            height={240}
            src="/images/gifs/Hand_Animation_Neg.gif"
          />

          <div>
            <Typography as="h2" size="h2">
              {`START A \n PROJECT`}
            </Typography>
          </div>
          <ContainerSelectButton
            action={(data) => handleOpenForm(data)}
            isOpenForm={isOpenForm}
          />
          <div className="pt-[38px] lg:pt-20">
            <ButtonWithIcon
              icon={
                <span className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] border-2 border-secondary block rounded-full right-4 top-1/2  transition-colors group-hover:bg-secondary lg:inline-block lg:relative lg:top-0 lg:right-0 ml-4"></span>
              }
            >
              light up fire
            </ButtonWithIcon>
          </div>
        </div>
      ) : (
        <form className="fixed top-0 z-[10] px-[20px] py-8 left-0 w-full  h-screen bg-primary overflow-y-hidden">
          <div className="flex flex-col">
            <div
              onClick={() => setIsOpenForm(false)}
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
                <div className="lg:pt-[56px]">
                  <InputTextElements />
                </div>
              </div>
            </div>
            <div className="lg:mt-[48px]"></div>
          </div>
        </form>
      )}
    </Section>
  );
};
export default ProjectBlock;
