import { IClassName } from '@/models/interfaces';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { ButtonWithIcon } from './Button';
const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

interface IProps extends IClassName {
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
  sizes,
  ...props
}: IProps) => {
  return (
    <>
      {fill ? (
        <div className={twMerge('relative', className)}>
          {src && (
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
          )}
        </div>
      ) : (
        src && (
          <Image
            alt={alt}
            placeholder="blur"
            blurDataURL={blurDataURL}
            quality={100}
            src={src}
            className={className}
            {...props}
          />
        )
      )}
    </>
  );
};
export const StickyImage = ({
  className = '',
  alt = '',
  src,
  ...props
}: IProps) => {
  return (
    <div className="sticky top-0 left-0 z-2 h-screen">
      {src && (
        <Image
          alt={alt}
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={src}
          {...props}
          fill
          quality={100}
          className="h-screen"
        />
      )}
      <ButtonWithIcon icon={<></>}>asdasdasd</ButtonWithIcon>
    </div>
  );
};
