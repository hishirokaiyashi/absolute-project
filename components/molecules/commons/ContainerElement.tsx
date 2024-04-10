import Text from '@/components/atoms/commons/Typography';
interface IParagraphProps {
  title: string;
  subTitle: string;
  className?: string;
}
const ContainerElement = ({
  title,
  subTitle,
  className = '',
}: IParagraphProps) => {
  return (
    <div className={className}>
      <Text as="p" size="h4" cls="font-spykDisplay">
        {title}
      </Text>
      <Text as="p" size="paragraph" cls="font-diaType">
        {subTitle}
      </Text>
    </div>
  );
};

export default ContainerElement;
