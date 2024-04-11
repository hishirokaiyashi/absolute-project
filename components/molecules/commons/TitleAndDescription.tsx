import Text from '@/components/atoms/commons/Typography';
interface IParagraphProps {
  title?: string;
  subTitle?: string;
  description?: string;
  className?: string;
}
const TitleAndDescription = ({
  title,
  subTitle,
  description,
}: IParagraphProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-[80px] mt-[200px] lg:mt-8 lg:mb-16">
      <div className="mb-[27px] lg:mb-8">
        <Text as="h2" size="h1">
          {title}
        </Text>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[1080px] ">
        <Text as="p" size="h4">
          {subTitle}
        </Text>
        <Text as="p" size="paragraph">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default TitleAndDescription;
