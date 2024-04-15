import clsx from 'clsx';
export type SizeOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'small'
  | 'strong'
  | 'button'
  | 'label'
  | 'paragraph'
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

export interface RichTextProps {
  as?: TElemnts;
  children?: string;
  size?: SizeOptions;
  cls?: string;
  isHTML?: boolean;
}

type TSizeClassNames = Record<SizeOptions, string>;

const sizeClassNames: TSizeClassNames = {
  h1:
    'text-88x leading-[85%]  font-black lg:text-[25vw] text-center text-secondary font-cameraPlain',
  h2: 'text-60x lg:text-200x text-center text-secondary',
  h3: 'text-secondary text-40x lg:text-120x text-center ',
  h4: 'text-24x lg:text-80x text-center text-secondary font-spykDisplay',
  small: 'text-base',
  strong: 'text-lg font-medium',
  label: '',
  button: 'text-24x lg:text-40x text-secondary f font-normal',
  paragraph:
    'text-base font-normal text-secondary text-14x lg:text-18x font-diaType',
  span: 'text-base lg:text-2xl font-cameraPlain text-secondary',
};

const RichText = ({
  as = 'p',
  children = '',
  size = 'paragraph',
}: RichTextProps) => {
  const As = as;

  if (typeof children === 'undefined' || children === '' || children === null)
    return <></>;

  return (
    <>
      {children && (
        <As
          className={clsx('transition-[font-size]', sizeClassNames[size])}
          dangerouslySetInnerHTML={{
            __html: children?.replace(/\\n|\n/g, '<br/>') ?? '',
          }}
        />
      )}
    </>
  );
};

export default RichText;
