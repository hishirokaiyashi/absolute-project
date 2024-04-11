'use client';
import CustomCursor from '@/components/atoms/commons/CursorPointerCustom';
import {
  ImageElement,
  StickyImage,
} from '@/components/atoms/commons/ImageElement';
import Text from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TitleAndDescription from '@/components/molecules/commons/TitleAndDescription';
import clsx from 'clsx';
import { MouseEvent, useEffect, useRef, useState } from 'react';

const WorkBlock = () => {
  const SUPPORTED_CURSORS = [
    'GinevilWecke das Böse in dir',
    'Ginevil Wecke das Böse in dir',
    'TS Tor xxxxxxxx',
    'Peak Performance No Bullshit inside',
    'Bratwurst & Bowls No Bullshit inside',
  ];
  const [isHoverItem, setIsHoverItem] = useState({
    itemFirst: false,
    itemSecond: false,
    itemThird: false,
    itemFouth: false,
    itemFifth: false,
  });

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
        <div
          onMouseEnter={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFirst: true }));
          }}
          onMouseLeave={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFirst: false }));
          }}
          id="1"
          className="sticky top-0 left-0 z-0 cursor-pointer"
        >
          <ImageElement
            src="/images/imageElements/Phone_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
          <CustomCursor
            id="1"
            isHovering={isHoverItem.itemFirst}
            cursorTitle="Ginevil"
            subTitle="Wecke das Böse in di"
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsHoverItem((prev) => ({ ...prev, itemSecond: true }));
          }}
          onMouseLeave={() => {
            setIsHoverItem((prev) => ({ ...prev, itemSecond: false }));
          }}
          className="sticky top-0 left-0 cursor-pointer z-2"
          id="2"
        >
          <ImageElement
            src="/images/imageElements/Devil_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
          <CustomCursor
            id="2"
            isHovering={isHoverItem.itemSecond}
            cursorTitle="Ginevil"
            subTitle="Wecke das Böse in dir"
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsHoverItem((prev) => ({ ...prev, itemThird: true }));
          }}
          onMouseLeave={() => {
            setIsHoverItem((prev) => ({ ...prev, itemThird: false }));
          }}
          id="3"
          className="sticky top-0 left-0 cursor-pointer z-3"
        >
          <ImageElement
            src="/images/imageElements/Human_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
          <CustomCursor
            id="3"
            isHovering={isHoverItem.itemThird}
            cursorTitle="TS Tor"
            subTitle="xxxxxxxx"
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFouth: true }));
          }}
          onMouseLeave={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFouth: false }));
          }}
          id="4"
          className="sticky top-0 left-0 cursor-pointer z-3"
        >
          <ImageElement
            src="/images/imageElements/Candy_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
          <CustomCursor
            id="4"
            isHovering={isHoverItem.itemFouth}
            cursorTitle="Peak Performance "
            subTitle="No Bullshit inside"
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFifth: true }));
          }}
          onMouseLeave={() => {
            setIsHoverItem((prev) => ({ ...prev, itemFifth: false }));
          }}
          id="5"
          className="sticky top-0 left-0 z-2 "
        >
          <ImageElement
            src="/images/imageElements/Bratwrst_Work_Image.webp"
            className="h-screen"
            sizes="100vw"
          />
          <CustomCursor
            id="5"
            isHovering={isHoverItem.itemFifth}
            cursorTitle="Bratwurst & Bowls"
            subTitle="No Bullshit inside"
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
