'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import CustomCursor from '@/components/atoms/commons/CursorPointerCustom';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TitleDescription from '@/components/molecules/commons/TitleDescription';
import { ListElementSticky } from '@/data/ListElementSticky';
// import { ListElementSticky } from '@/data/ListElementSticky';
import { useState } from 'react';

const WorkBlock = () => {
  // const [isHoverItem, setIsHoverItem] = useState({
  //   itemFirst: false,
  //   itemSecond: false,
  //   itemThird: false,
  //   itemFouth: false,
  //   itemFifth: false,
  // });
  const [hoverItemCursor, setHoverItemCursor] = useState('');
  const handleAddCursorTile = (data: string) => {
    setHoverItemCursor(data);
  };

  const handleRemoveCursorTile = (data: string) => {
    setHoverItemCursor('');
  };
  return (
    <Section
      id="WorkBlock"
      container
      className="flex flex-col items-center justify-center mt-[200px] lg:mt-60"
    >
      <TitleDescription
        title="WORK"
        subTitle="We make it happen."
        description=" Brand Storys, die Emotionen, Werte und Ziele verbinden. Inhaltlich stark und optisch bestechend. Das macht sie so verdammt erfolgreich.  Überzeuge dich selbst."
      />
      <div className="relative w-full">
        {ListElementSticky?.map((el, index) => {
          let countELement = index;
          return (
            <div
              key={index}
              onMouseEnter={() => handleAddCursorTile(el.id)}
              onMouseLeave={() => handleRemoveCursorTile(el.id)}
              id={index.toString()}
              className="sticky top-0 left-0 z-0 cursor-pointer"
            >
              <div className="absolute z-10 flex items-end text-[14px] lg:items-start justify-between lg:justify-end w-full px-4 top-4 Typography-14x py-4  bottom-0 lg:top-[24px] lg:px-6">
                <div className="lg:hidden">
                  <Typography as="span">
                    {`${el.cursorTitle} ${el.subTitle}`}
                  </Typography>
                </div>
                <Typography as="span">{`${++countELement}/${
                  ListElementSticky.length
                }`}</Typography>
              </div>
              <ImageElement src={el.src} className="h-screen" sizes="100vw" />
              <CustomCursor
                id={index}
                isHovering={hoverItemCursor == el.id}
                cursorTitle={el.cursorTitle}
                subTitle={el.subTitle}
              />
            </div>
          );
        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="sticky top-0 lg:top-0 lg:h-screen">
            {/* <div className="absolute z-20 flex justify-end w-full px-4 top-4 Typography-14x lg:top-[44px] lg:px-6">
              <Typography as="span">1/5</Typography>
            </div> */}
            <div className="absolute bottom-0 w-full pointer-events-auto z-15 lg:w-auto lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:py-4">
              <div className="lg:py-[12px]">
                <ButtonWithIcon
                  className="flex items-center"
                  icon={
                    <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 transition-colors group-hover:bg-secondary lg:inline-block lg:relative lg:m-0 lg:top-0 lg:right-0 lg:ml-4"></span>
                  }
                >
                  Alle Projekte
                </ButtonWithIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default WorkBlock;
