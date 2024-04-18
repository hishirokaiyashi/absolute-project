import Typography from '@/components/atoms/commons/Typography';
import { blurDataURL } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
interface TeamMemberProps {
  src: string;
  name: string;
  srcNoBg: string;
  positionImage: number;
  description: string[];
}
const TeamMember = ({
  src,
  srcNoBg,
  name,
  positionImage,
  description,
}: TeamMemberProps) => {
  return (
    <>
      <div className="relative group">
        <div className="relative pt-[107%]">
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={blurDataURL}
            src={src}
            fill
            sizes="33.33%"
            quality={75}
            className="object-cover object-center w-full z-1 h-[369px] lg:h-[527px]"
          />
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={blurDataURL}
            src={srcNoBg}
            sizes="33.33%"
            fill
            quality={75}
            className="object-cover object-center w-full z-[-1] h-[369px] lg:h-[527px] lg:z-[3]"
          />
        </div>
        <div
          className={clsx(
            'flex absolute w-[2000px] h-[96px] gap-[40px] pointer-events-none -translate-x-[16px] -translate-y-1/2 z-2 top-1/2 opacity-0 group-hover:lg:opacity-100 group-hover:z-0',
            (positionImage == 1 || positionImage == 4) && '-left-[100%]',
            (positionImage == 2 || positionImage == 5) && '-left-[200%]',
          )}
        >
          {Array.from(new Array(2), (_, index) => (
            <ul
              key={index}
              className="animate-infiniteText gap-[19px] flex-row uppercase flex justify-around flex-shrink-0 font-black text-secondary text-nowrap font-cameraPlain lg:gap-[40px] "
            >
              <li className="gap-[19px] flex lg:gap-[40px]">
                {description?.map((member, index) => {
                  return (
                    <div key={index} className="font-black font-cameraPlain">
                      <Typography as="h4" size="labelImage">
                        {member}
                      </Typography>
                    </div>
                  );
                })}
              </li>
              <li className="gap-[19px] flex lg:gap-[40px]">
                {description?.map((member, index) => (
                  <div key={index} className="font-black font-cameraPlain">
                    <Typography as="h4" size="labelImage">
                      {member}
                    </Typography>
                  </div>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="pt-[8px]">
        <Typography as="span" size="paragraph">
          {name}
        </Typography>
      </div>
    </>
  );
};

export default TeamMember;
