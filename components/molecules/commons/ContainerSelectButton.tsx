'use client';
import Typography from '@/components/atoms/commons/Typography';
import AppContext from '@/context/appContext';
import { ListElementButton } from '@/data/ListElementButtons';
import { IAppContext } from '@/models/appInterface';
import clsx from 'clsx';
import { useContext, useState } from 'react';
const ContainerSelectButton = () => {
  const { modal, updateState }: IAppContext = useContext(
    AppContext
  ) as IAppContext;

  const onOpenForm = () => {
    updateState &&
      updateState({
        modal: {
          ...modal,
          position: window.pageYOffset,
          open: true
        }
      });
  };
  const [isHoverItem, setIsHoverItem] = useState<number>();
  const handleSetHoverItem = (data: number) => {
    setIsHoverItem(data);
  };
  const handleMouseLeave = () => {
    setIsHoverItem(undefined);
  };
  // const handleOpenForm = () => {
  //   action(!isOpenForm);
  // };
  return (
    <ul className=" gap-[8px] pb-[38px] pt-[50px] lg:gap-[24px] lg:pt-[100px] lg:pb-0 flex lg:items-center flex-col cursor-pointer justify-center ">
      {ListElementButton.map((el, index) => {
        return (
          <li
            onMouseOver={() => handleSetHoverItem(index)}
            onMouseLeave={handleMouseLeave}
            onClick={onOpenForm}
            key={index}
            className={clsx(
              'relative group  flex items-center justify-between transition-opacity duration-700 cursor-pointer hover:cursor-pointer',
              typeof isHoverItem !== 'undefined' &&
                isHoverItem !== index &&
                'opacity-15'
            )}
          >
            <div className="py-[5px] pr-[8px] w-full lg:py-0 lg:pr-0">
              <Typography as="span" size="button">
                {el.title}
              </Typography>
            </div>
            <div className="w-[40px] lg:w-full h-[40px] flex items-center justify-center p-[9px] lg:p-0 lg:ml-8">
              <span className="w-4 h-4 lg:w-[18px] lg:h-[18px] transition-colors border-2 rounded-full border-secondary right-4 top-1/2 group-hover:bg-secondary lg:inline-block lg:relative lg:m-0 lg:top-0 lg:right-0"></span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContainerSelectButton;
