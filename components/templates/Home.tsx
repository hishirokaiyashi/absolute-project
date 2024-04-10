import React from 'react';
import HeroBlock from '../organisms/blocks/HeroBlock';
import Section from '@/components/molecules/commons/Section';
import WorkBlock from '../organisms/blocks/WorkBlock';

const HomeTemplate = () => {
  return (
    <>
      <HeroBlock />
      <WorkBlock />
    </>
  );
};

export default HomeTemplate;
