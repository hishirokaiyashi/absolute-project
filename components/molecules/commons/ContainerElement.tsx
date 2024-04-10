import Text, {
  SizeOptions,
  TElemnts,
} from '@/components/atoms/commons/Typography';
import clsx from 'clsx';
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
const ContainerElement = ({
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

export default ContainerElement;
