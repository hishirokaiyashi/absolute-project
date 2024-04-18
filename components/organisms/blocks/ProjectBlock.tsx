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
        className="relative mt-[100px] lg:mt-60"
      >
        <div className="flex flex-col items-center justify-center">
          <ImageElement
            className="pb-[15px] h-[80px] w-[68px] lg:h-[240px] lg:w-[240px] lg:pb-[53px]"
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
                <div className="flex items-center">
                  <span className="w-[16px] h-[16px] ml-4 border-2 border-secondary rounded-full transition-colors group-hover:bg-secondary"></span>
                </div>
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
