import React from 'react';
import HeroBlock from '../organisms/blocks/HeroBlock';
import WorkBlock from '../organisms/blocks/WorkBlock';
import TeamBlock from '../organisms/blocks/TeamBlock';
import ProjectBlock from '../organisms/blocks/ProjectBlock';

const HomeTemplate = () => {
  return (
    <>
      <HeroBlock />
      <WorkBlock />
      <ProjectBlock />

      <TeamBlock />
    </>
  );
};

export default HomeTemplate;
