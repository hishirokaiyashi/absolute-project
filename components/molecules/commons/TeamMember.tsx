'use client';
import Typography from '@/components/atoms/commons/Typography';
import { blurDataURL } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
interface TeamMemberProps {
  src: string;
  name: string;
  srcNoBg: string;
  description: string[];
}
const TeamMember = ({ src, srcNoBg, name, description }: TeamMemberProps) => {
  const [isHoverImage, setIsHoverImage] = useState(false);
  return (
    <>
      <div
        className="relative"
        onMouseOver={() => setIsHoverImage(true)}
        onMouseLeave={() => setIsHoverImage(false)}
      >
        <div className="relative pt-[107%]">
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={blurDataURL}
            src={src}
            fill
            quality={100}
            className="object-cover w-full z-1 h-[369px] lg:h-[527px]"
          />
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={blurDataURL}
            src={srcNoBg}
            fill
            quality={100}
            className="object-cover w-full z-[-1] lg:z-[3] h-[369px] lg:h-[527px]"
          />
        </div>

        {/* {isHoverImage && (
          <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 lg:z-[2] top-1/2 left-1/2">
            <ul className="w-[1800px] uppercase absolute flex p-0 m-0 justify-around flex-shrink-0 gap-[40px] font-black animate-[scroll_4s_linear_infinite] text-secondary text-nowrap font-cameraPlain">
              {description?.map((member, index) => {
                return (
                  <li key={index}>
                    <Typography as="h4" size="h5">
                      {member}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        )} */}

        <div
          className={clsx(
            'absolute w-[2000px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-2 top-1/2 left-1/2',
            isHoverImage ? 'lg:opacity-100 z-0' : 'lg:opacity-0'
          )}
        >
          <ul className=" gap-[19px] uppercase absolute flex p-0 m-0 justify-around flex-shrink-0  font-black animate-[scroll_5s_linear_infinite] text-secondary text-nowrap font-cameraPlain lg:gap-[40px]">
            {description?.map((member, index) => {
              return (
                <li key={index} className="font-black font-cameraPlain">
                  <Typography as="h4" size="labelImage">
                    {member}
                  </Typography>
                </li>
              );
            })}
          </ul>
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
