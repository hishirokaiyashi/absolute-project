'use client';
import Text from '@/components/atoms/commons/Typography';
import { ListElementButton } from '@/data/ListElementButtons';
import clsx from 'clsx';
import { useRef, useState } from 'react';
interface IContainerSelectButtonProps {
  actionClick: (data: boolean) => void;
  isOpenForm: boolean;
}
const ContainerSelectButton = ({
  actionClick,
  isOpenForm,
}: IContainerSelectButtonProps) => {
  const [isHoverItem, setIsHoverItem] = useState<string>('');
  const handleSetHoverItem = (data: string) => {
    setIsHoverItem(data);
  };
  const handleMouseLeave = () => {
    setIsHoverItem('');
  };
  const handleOpenForm = () => {
    actionClick(!isOpenForm);
  };
  return (
    <ul className=" gap-[8px] pb-[38px] pt-[50px] lg:gap-[24px] lg:pt-[100px] lg:pb-0 flex lg:items-center flex-col cursor-pointer justify-center ">
      {ListElementButton.map((el, index) => {
        return (
          <li
            onMouseOver={() => handleSetHoverItem(el.title || '')}
            onMouseLeave={handleMouseLeave}
            onClick={handleOpenForm}
            key={index}
            className={clsx(
              'relative group  flex items-center justify-between transition-opacity duration-700 cursor-pointer hover:cursor-pointer',
              isHoverItem && isHoverItem !== el.title && 'opacity-15'
            )}
          >
            <Text
              as="span"
              size="button"
              cls="py-[5px] pr-[8px] w-full lg:py-0 lg:pr-0 text-wrap lg:text-nowrap lg:text-center font-spykDisplay "
            >
              {el.title}
            </Text>
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
