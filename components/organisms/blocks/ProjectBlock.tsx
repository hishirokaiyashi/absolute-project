'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import ContainerSelectButton from '@/components/molecules/commons/ContainerSelectButton';
import Section from '@/components/molecules/commons/Section';
import { useState } from 'react';

const ProjectBlock = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleOpenForm = (data: boolean) => {
    setIsOpenForm(data);
  };
  return (
    <Section id="ProjectBlock" container className="lg:mt-60 mt-[100px]">
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
        <div className="w-full h-screen bg-primary"></div>
      )}
    </Section>
  );
};
export default ProjectBlock;
