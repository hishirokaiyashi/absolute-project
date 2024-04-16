'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import ContainerSelectButton from '@/components/molecules/commons/ContainerSelectButton';
import Section from '@/components/molecules/commons/Section';
import { useState } from 'react';
import FormBlock from './FormBlock';

const ProjectBlock = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [titleForm, setTilteForm] = useState<string>('');

  const handleOpenModal = (title: string) => {
    setOpenModal(true);
    setTilteForm(title);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      <Section
        id="ProjectBlock"
        container
        className="relative lg:mt-60 mt-[100px] "
      >
        <div className="flex flex-col items-center justify-center ">
          <ImageElement
            className="pb-[15px] lg:pb-[53px] h-[80px] w-[68px] lg:h-[240px] lg:w-[240px]"
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
          <ContainerSelectButton handleOpenModal={handleOpenModal} />
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
      </Section>
      {openModal && (
        <FormBlock handleCloseModal={handleCloseModal} titleForm={titleForm} />
      )}
    </>
  );
};
export default ProjectBlock;
