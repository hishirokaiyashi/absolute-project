import clsx from 'clsx';
export type SizeOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'small'
  | 'strong'
  | 'button'
  | 'buttonSecond'
  | 'label'
  | 'paragraph'
  | 'spanSecond'
  | 'cursorTitle'
  | 'cursorSubTitle'
  | 'span';

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
  | 'span'
  | 'small';

export interface TypographyProps {
  as?: TElemnts;
  children?: string;
  size?: SizeOptions;
  isHTML?: boolean;
}

type TSizeClassNames = Record<SizeOptions, string>;

const sizeClassNames: TSizeClassNames = {
  h1: 'text-88x leading-[85%]  font-black lg:text-[25vw] text-center text-secondary font-cameraPlain',
  h2: 'text-60x lg:text-200x text-center text-secondary font-black font-cameraPlain',
  h3: 'text-secondary text-40x lg:text-120x text-center ',
  h4: 'text-24x lg:text-80x text-center text-secondary font-spykDisplay',
  small: 'text-base',
  strong: 'text-lg font-medium',
  label: '',
  button:
    'text-24x lg:text-40x text-secondary font-normal py-[5px] pr-[8px] w-full lg:py-0 lg:pr-0 text-wrap lg:text-nowrap lg:text-center font-spykDisplay',
  buttonSecond:
    'text-secondary text-center font-cameraPlain text-lg lg:text-2xl',
  paragraph:
    'text-base font-normal text-secondary text-14x lg:text-18x font-diaType',
  span: 'text-base lg:text-2xl font-cameraPlain text-secondary',
  spanSecond: 'text-sm lg:text-lg font-diaType text-secondary',
  cursorTitle:
    'text-[#DEE0DF] font-thin font-diaType lg:text-lg text-secondary leading-[27px] tracking-[0.01em] text-left',

  cursorSubTitle:
    'text-[#DEE0DF] font-thin font-diaType lg:text-lg text-secondary leading-[27px] tracking-[0.01em] text-left text-nowrap'
};

const Typography = ({
  as = 'p',
  children = '',
  size = 'paragraph',
  isHTML = false
}: TypographyProps) => {
  const As = as;

  if (typeof children === 'undefined' || children === '' || children === null)
    return <></>;

  return (
    <>
      {isHTML === true ? (
        <As
          className={clsx('transition-[font-size]', sizeClassNames[size])}
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

export default Typography;
