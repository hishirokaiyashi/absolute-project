'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import CustomCursor from '@/components/atoms/commons/CursorPointerCustom';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TitleDescription from '@/components/molecules/commons/TitleDescription';
import { ListElementSticky } from '@/data/ListElementSticky';
import { useEffect, useRef, useState } from 'react';
const WorkBlock = () => {
  const [hoverItemCursor, setHoverItemCursor] = useState<string>('');
  const [activeCount, setActiveCount] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState(1);

  const handleAddCursorTile = (data: string) => {
    setHoverItemCursor(data);
  };

  const handleRemoveCursorTile = () => {
    setHoverItemCursor('');
  };
  const imageStickyRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 0.5 means when half of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        // Find the index of the element in the imageStickyRef array by finding the position of the ID.
        const index = imageStickyRef.current.findIndex(ref => ref.id === id);

        if (entry.isIntersecting) {
          imageStickyRef.current.forEach((ref, idx) => {
            ref.setAttribute('data-active', (idx === index).toString());
          });
          setCurrentItemIndex(index + 1);
        } else {
          // Check if imageStickyRef.current[index] has data-active set to true before changing data-active.
          const isActive =
            imageStickyRef.current[index].getAttribute('data-active') ===
            'true';
          if (isActive) {
            setCurrentItemIndex(index);

            // Set the data-active attribute of imageStickyRef.current[index] to false
            imageStickyRef.current[index].setAttribute('data-active', 'false');

            // Check if index - 1 is not a negative number and imageStickyRef.current[index - 1] exists.
            if (index > 0 && imageStickyRef.current[index - 1]) {
              // Set the data-active attribute of imageStickyRef.current[index - 1] to true.
              imageStickyRef.current[index - 1].setAttribute(
                'data-active',
                'true',
              );
            } else {
              setCurrentItemIndex(1);
            }
          }
        }
      });
    }, options);
    imageStickyRef.current.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    // Clean up
    return () => {
      imageStickyRef.current.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [imageStickyRef]);

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
                  imageStickyRef.current[index] = ref;
                }
              }}
              onMouseEnter={() =>
                handleAddCursorTile(`image-sticky-id-${index}`)
              }
              onMouseLeave={() => handleRemoveCursorTile()}
              id={`image-sticky-id-${index}`}
              className="sticky top-0 left-0 z-0 cursor-pointer"
            >
              <div className="relative h-screen ">
                <ImageElement src={el.src} fill={true} />
              </div>
              <CustomCursor
                SelectedId={`image-sticky-id-${index}`}
                isHovering={hoverItemCursor == `image-sticky-id-${index}`}
                cursorTitle={el.cursorTitle}
                subTitle={el.subTitle}
              />
            </div>
          );
        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="sticky top-0 h-screen lg:top-0">
            <div className="absolute z-10 flex items-end text-[14px] lg:items-start justify-between lg:justify-end w-full  top-4 Typography-14x bottom-0  lg:top-[24px] lg:px-6">
              {/* <div className="lg:hidden">
                  <Typography as="span">
                    {`${el.cursorTitle} ${el.subTitle}`}
                  </Typography>
                </div> */}
              {activeCount && (
                <Typography as="span">{`${currentItemIndex}/${ListElementSticky.length}`}</Typography>
              )}
            </div>
            <div className="absolute bottom-0 w-full z-5 lg:w-auto lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:py-4">
              <div className="flex justify-center py-[32px] lg:py-[12px] lg:block">
                <ButtonWithIcon
                  icon={
                    <div className="flex items-center">
                      <span className="w-[16px] h-[16px] ml-4 border-2 border-secondary rounded-full transition-colors group-hover:bg-secondary"></span>
                    </div>
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
