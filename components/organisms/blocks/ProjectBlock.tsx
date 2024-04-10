'use client';
import Button from '@/components/atoms/commons/Button';
import Images from '@/components/atoms/commons/Images';
import Text from '@/components/atoms/commons/Typography';
import ContainerSelectButton from '@/components/molecules/commons/ContainerSelectButton';
import Section from '@/components/molecules/commons/Section';
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
      className="lg:pt-60 pb-[113px] lg:pb-60"
    >
      {!isOpenForm ? (
        <div className="flex flex-col items-center justify-center ">
          <Images
            className="lg:pb-[53px]"
            fill={false}
            width={200}
            height={240}
            src="/images/gifs/Hand_Animation_Neg.gif"
          />
          <div>
            <Text as="h2" size="h2" cls="font-black font-cameraPlain">
              START A
            </Text>
            <Text as="h2" size="h2" cls="font-black font-cameraPlain">
              PROJECT
            </Text>
          </div>
          <ContainerSelectButton
            actionClick={(data) => handleOpenForm(data)}
            isOpenForm={isOpenForm}
          />
          <Button className="flex justify-center items-center lg:inline-block gap-4 pt-[38px] lg:pt-20 group">
            <Text
              as="span"
              size="button"
              cls="text-center font-cameraPlain lg:text-[24px]"
            >
              LIGHT A FIRE
            </Text>
            <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 lg:-mt-[8px] transition-colors group-hover:bg-secondary lg:inline-block lg:relative lg:m-0 lg:top-0 lg:right-0 lg:ml-5"></span>
          </Button>
        </div>
      ) : (
        <div className="w-full h-screen bg-primary"></div>
      )}
    </Section>
  );
};
export default ProjectBlock;
