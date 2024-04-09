import clsx from 'clsx';
type SizeOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'small'
  | 'strong'
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
  | 'div'
  | 'small';

interface TypographyProps {
  as?: TElemnts;
  children: string;
  size?: SizeOptions;
  cls?: string;
  isHTML?: boolean;
}

type TSizeClassNames = Record<SizeOptions, string>;

const sizeClassNames: TSizeClassNames = {
  h1: 'font-normal text-88x lg:text-380x text-center text-white',
  h2: 'text-60x lg:text-200x text-center text-white',
  h3: 'text-white text-40x lg:text-120x text-center ',
  h4: 'text-24x lg:text-80x text-center text-white',
  small: 'text-base',
  strong: 'text-lg font-medium',
  label: '',
  paragraph: 'text-base text-white text-14x lg:text-18x'
};

const Text = ({
  as = 'p',
  children = '',
  size = 'paragraph',
  cls = '',
  isHTML = false
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
            __html: children?.replace(/\\n|\n/g, '<br/>') ?? ''
          }}
        />
      ) : (
        <As className={clsx('transition-[font-size]', sizeClassNames[size])}>
          {children}
        </As>
      )}
    </>
  );
};

export default Text;
