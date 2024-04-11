import { IClassName } from '@/models/interfaces';
import NextImage from 'next/image';
import { twMerge } from 'tailwind-merge';

export type IImagePosition = {
  x: number;
  y: number;
};

interface IProps extends IClassName {
  src: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

const Image = ({ className = '', fill = true, alt = '', ...props }: IProps) => {
  return (
    <>
      {fill ? (
        <div className={twMerge('relative', className)}>
          {props.src && (
            <NextImage
              alt={alt}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
              {...props}
              fill
              quality={100}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      ) : (
        <NextImage
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

export default Image;
