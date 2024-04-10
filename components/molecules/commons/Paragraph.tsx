import Text, {
  SizeOptions,
  TElemnts,
  TypographyProps,
} from '@/components/atoms/commons/Typography';
import clsx from 'clsx';
import React from 'react';
interface IParagraphProps {
  title: string;
  subTitle: string;
  className?: string;
  as?: TElemnts;
  size?: SizeOptions;
  sizeSubtilte?: SizeOptions;
  cls?: string;
  subCls?: string;
  isHTML?: boolean;
}
const Paragraph = ({
  as = 'p',
  size = 'paragraph',
  cls = '',
  subCls = '',
  title,
  subTitle,
  sizeSubtilte = 'paragraph',
  className = '',
}: IParagraphProps) => {
  return (
    <div className={clsx(className)}>
      <Text as={as} size={size} cls={cls}>
        {title}
      </Text>
      <Text as={as} size={sizeSubtilte} cls={subCls}>
        {subTitle}
      </Text>
    </div>
  );
};

export default Paragraph;
