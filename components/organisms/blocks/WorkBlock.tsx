'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import CustomCursor from '@/components/atoms/commons/CursorPointerCustom';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TitleDescription from '@/components/molecules/commons/TitleDescription';
import { ListElementSticky } from '@/data/ListElementSticky';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
const WorkBlock = () => {
  const [hoverItemCursor, setHoverItemCursor] = useState('');
  const handleAddCursorTile = (data: string) => {
    setHoverItemCursor(data);
  };

  const handleRemoveCursorTile = (data: string) => {
    setHoverItemCursor('');
  };

  const [currentItemIndex, setCurrentItemIndex] = useState(1);
  const myRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 0.5 means when half of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Tìm chỉ số của phần tử trong mảng myRef bằng cách tìm vị trí của ID
          const index = myRef.current.findIndex(ref => ref.id === id);
          // Đặt chỉ số hiện tại thành vị trí của phần tử
          setCurrentItemIndex(index + 1);
        }
      });
    }, options);

    myRef.current.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    // Clean up
    return () => {
      myRef.current.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
      // observer.disconnect();
    };
  }, [myRef]);

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
          return (
            <div
              key={index}
              ref={ref => {
                if (ref) {
                  myRef.current[index] = ref;
                }
              }}
              onMouseEnter={() => handleAddCursorTile(el.id)}
              onMouseLeave={() => handleRemoveCursorTile(el.id)}
              id={`ImageSticky-${index}`}
              className="sticky top-0 left-0 z-0 cursor-pointer"
            >
              <div className="absolute z-10 flex items-end text-[14px] lg:items-start justify-between lg:justify-end w-full px-4 top-4 Typography-14x bottom-0 py-[16px] lg:py-[32px] lg:top-[24px] lg:px-6">
                <div className="lg:hidden">
                  <Typography as="span">
                    {`${el.cursorTitle} ${el.subTitle}`}
                  </Typography>
                </div>
                <Typography as="span">{`${index + 1}/${
                  ListElementSticky.length
                }`}</Typography>
              </div>

              <ImageElement src={el.src} className="h-screen" sizes="100vw" />
              <CustomCursor
                SelectedId={`ImageSticky-${index}`}
                isHovering={hoverItemCursor == el.id}
                cursorTitle={el.cursorTitle}
                subTitle={el.subTitle}
              />
            </div>
          );
        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="sticky top-0 h-screen lg:top-0">
            {/* <div className="absolute z-12 flex items-end text-[14px] lg:items-start justify-between lg:justify-end w-full top-4 p-4 lg:p-0 bottom-0 lg:top-[24px] lg:right-[24px]">
              <Typography as="span">{`${currentItemIndex}/${ListElementSticky.length}`}</Typography>
            </div> */}
            <div className="absolute bottom-0 w-full pointer-events-auto z-5 lg:w-auto lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:py-4">
              <div className="flex justify-center lg:block py-[32px] lg:py-[12px]">
                <ButtonWithIcon
                  className="flex items-center"
                  icon={
                    <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 transition-colors group-hover:bg-secondary lg:inline-block lg:relative lg:top-0 lg:right-0 ml-4"></span>
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
{
  /* <div className="absolute z-10 flex items-end text-[14px] lg:items-start justify-between lg:justify-end w-full top-4 p-4 lg:p-0 bottom-0 lg:top-[24px] lg:right-[24px]">
                <div className="lg:hidden">
                  <Typography as="span">
                    {`${el.cursorTitle} ${el.subTitle}`}
                  </Typography>
                </div>
                <Typography as="span">{`${index + 1}/${
                  ListElementSticky.length
                }`}</Typography>
              </div> */
}
