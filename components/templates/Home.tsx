import React from 'react'
import HeroBlock from '../organisms/blocks/HeroBlock'
import Section from '@/components/molecules/commons/Section';

const HomeTemplate = () => {
  return (
    <>
      <Section
        id="HeroBlock"
        container
        fullScreen={true}
        className="p-0 overflow-hidden text-white bg-black"
      >
        <HeroBlock />
      </Section>
    </>
  )
}

export default HomeTemplate