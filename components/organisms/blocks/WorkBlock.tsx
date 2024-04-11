'use client';
import ImageElement from '@/components/atoms/commons/ImageElement';
import Text from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TitleAndDescription from '@/components/molecules/commons/TitleAndDescription';
import { useRef } from 'react';

const WorkBlock = () => {
  const cursorDot = useRef();

  return (
    <Section
      id="WorkBlock"
      container
      className="flex flex-col items-center justify-center mt-[200px] lg:mt-60"
    >
      <TitleAndDescription
        title="WORK"
        subTitle="We make it happen."
        description=" Brand Storys, die Emotionen, Werte und Ziele verbinden. Inhaltlich stark und optisch bestechend. Das macht sie so verdammt erfolgreich.  Überzeuge dich selbst."
      />
      <div className="relative w-full py-[20px]">
        <div className="sticky top-0 left-0 z-0">
          <ImageElement
            src="/images/imageElements/Phone_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
        </div>
        <div className="sticky top-0 left-0 z-1">
          <ImageElement
            src="/images/imageElements/Devil_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
        </div>
        <div className="sticky top-0 left-0 z-3">
          <ImageElement
            src="/images/imageElements/Human_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
        </div>
        <div className="sticky top-0 left-0 z-3">
          <ImageElement
            src="/images/imageElements/Candy_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
        </div>
        <div className="sticky top-0 left-0 z-2">
          <ImageElement
            src="/images/imageElements/Bratwrst_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="sticky top-0 lg:top-0 lg:h-screen">
            <div className="absolute z-20 flex justify-end w-full px-4 top-4 text-14x lg:top-[44px] lg:px-6">
              <Text as="span">1/5</Text>
            </div>
            <div className="absolute bottom-0 w-full pointer-events-auto z-15 lg:w-auto lg:left-1/2 lg:-translate-x-1/2 lg:bottom-4">
              <a className="z-20 inline-flex items-center justify-center w-full p-3 pb-10 font-black uppercase text-secondary text-18x font-cameraPlain group hover:cursor-pointer lg:text-24x lg:font-black lg:w-auto lg:pb-3">
                Alle Projekte
                <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 transition-colors group-hover:bg-secondary lg:inline-block lg:relative lg:m-0 lg:top-0 lg:right-0 lg:ml-4"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default WorkBlock;
