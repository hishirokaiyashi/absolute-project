import React from 'react';

import Image from 'next/image';
import { IClassName } from '@/models/interfaces';
import { imagePlaceholder } from '@/models/image';
import { twMerge } from 'tailwind-merge';

interface ImageProps extends IClassName {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

const Images = ({
  className = '',
  alt = '',
  width,
  height,
  fill = true,
  ...props
}: ImageProps) => {
  return (
    <>
      {fill ? (
        <div className={twMerge('relative', className)}>
          {props.src && (
            <Image
              width={width}
              height={height}
              alt={alt}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
              {...props}
              fill
              quality={100}
              className="absolute object-cover w-full h-full"
            />
          )}
        </div>
      ) : (
        <Image
          width={width}
          height={height}
          alt={alt}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
          quality={100}
          {...props}
          className={className}
        />
      )}
    </>
  );
};

export default Images;
