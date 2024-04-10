import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
export type SizeOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'small'
  | 'strong'
  | 'button'
  | 'label'
  | 'paragraph';

export type TElemnts =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h6'
  | 'p'
  | 'span'
  | 'button'
  | 'div'
  | 'small';

export interface TypographyProps {
  as?: TElemnts;
  children?: string;
  size?: SizeOptions;
  cls?: string;
  isHTML?: boolean;
}

type TSizeClassNames = Record<SizeOptions, string>;

const sizeClassNames: TSizeClassNames = {
  h1: ' text-88x font-black lg:text-380x text-center text-secondary',
  h2: 'text-60x lg:text-200x text-center text-secondary',
  h3: 'text-secondary text-40x lg:text-120x text-center ',
  h4: 'text-24x lg:text-80x text-center text-secondary',
  small: 'text-base',
  strong: 'text-lg font-medium',
  label: '',
  button: 'text-24x lg:text-40x text-secondary f font-normal',
  paragraph: 'text-base font-normal text-secondary text-14x lg:text-18x',
};

const Text = ({
  as = 'p',
  children = '',
  size = 'paragraph',
  cls = '',
  isHTML = false,
}: TypographyProps) => {
  const As = as;

  if (typeof children === 'undefined' || children === '' || children === null)
    return <></>;

  return (
    <>
      {isHTML === true ? (
        <As
          className={clsx('transition-[font-size]', sizeClassNames[size], cls)}
          dangerouslySetInnerHTML={{
            __html: children?.replace(/\\n|\n/g, '<br/>') ?? '',
          }}
        />
      ) : (
        <As
          className={clsx('transition-[font-size]', sizeClassNames[size], cls)}
        >
          {children}
        </As>
      )}
    </>
  );
};

export default Text;
