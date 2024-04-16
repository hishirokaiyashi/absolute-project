import { IClassName } from '@/models/interfaces';
import Image from 'next/image';
const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

interface IImageElementProps extends IClassName {
  src: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export const ImageElement = ({
  className = '',
  fill = true,
  alt = '',
  src,
  ...props
}: IImageElementProps) => {
  return (
    <>
      {fill
        ? src && (
            <Image
              alt={alt}
              placeholder="blur"
              blurDataURL={blurDataURL}
              src={src}
              {...props}
              fill
              quality={100}
              className="object-cover w-full h-full"
            />
          )
        : src && (
            <Image
              alt={alt}
              placeholder="blur"
              blurDataURL={blurDataURL}
              quality={100}
              src={src}
              className={className}
              {...props}
            />
          )}
    </>
  );
};
