import React from 'react';
import HeroBlock from '../organisms/blocks/HeroBlock';
import WorkBlock from '../organisms/blocks/WorkBlock';
import TeamBlock from '../organisms/blocks/TeamBlock';

const HomeTemplate = () => {
  return (
    <>
      <HeroBlock />
      <WorkBlock />
      <TeamBlock />
    </>
  );
};

export default HomeTemplate;
