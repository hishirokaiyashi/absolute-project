'use client';
import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import React, { useState } from 'react';
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
          <ImageElement fill={true} src={src} />
        </div>
        <div className="">
          <ImageElement fill={true} src={srcNoBg} />
        </div>
        {isHoverImage && (
          <>
            <div className="absolute z-[2] w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <ul className="w-[1800px] uppercase z-[1] absolute flex p-0 m-0 justify-around flex-shrink-0 gap-[40px] font-black animate-[scroll_6s_linear_infinite] text-secondary text-nowrap font-cameraPlain">
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
          </>
        )}
      </div>
      <div>
        <Typography as="span" size="paragraph">
          {name}
        </Typography>
      </div>
    </>
  );
};

export default TeamMember;
