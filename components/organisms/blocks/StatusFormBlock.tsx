import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import AppContext from '@/context/appContext';
import { IAppContext } from '@/models/appInterface';
import React, { useContext } from 'react';
interface StatusFormBlockProps {
  isSuccess: boolean;
}
const StatusFormBlock = ({ isSuccess }: StatusFormBlockProps) => {
  const { modal, updateState }: IAppContext = useContext(
    AppContext
  ) as IAppContext;

  const onCloseForm = () => {
    updateState &&
      updateState({
        modal: {
          ...modal,
          open: false,
        },
      });
    document.body.style.overflowY = 'auto';
  };
  return (
    <div className="py-4 px-[40px] lg:py-8 lg:px-[54px] h-screen">
      <div className="flex-col justify-center items-center lg:mt-[241px]">
        <div className="flex justify-center">
          <ImageElement
            className="h-[68px] w-[80px] lg:pb-[37px] lg:h-[240px] lg:w-[240px]"
            fill={false}
            width={200}
            height={240}
            src="/images/gifs/Hand_Animation_Neg.gif"
          />
        </div>
        <div className="flex flex-col items-center ">
          <Typography as="h3" size="button">
            {isSuccess
              ? 'We will. we will, rock you!'
              : 'Oooops, hier ist was schief gelaufen.'}
          </Typography>
          <Typography as="h3" size="button">
            {isSuccess
              ? 'We will get in touch immediately.'
              : 'Bitte versuche es erneut oder erreiche uns so:'}
          </Typography>
        </div>
        {!isSuccess && (
          <div className="flex flex-col items-center lg:mt-[40px]">
            <Typography as="h3" size="paragraph">
              +41 (0)71 221 14 80
            </Typography>
            <Typography as="h3" size="paragraph">
              we@absolutagentur.ch
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusFormBlock;
