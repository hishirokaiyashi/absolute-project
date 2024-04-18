import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
interface StatusFormBlockProps {
  isSuccess: boolean;
}
const StatusFormBlock = ({ isSuccess }: StatusFormBlockProps) => {
  return (
    <div className="py-4 px-[40px] h-screen lg:py-8 lg:px-[54px]">
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
