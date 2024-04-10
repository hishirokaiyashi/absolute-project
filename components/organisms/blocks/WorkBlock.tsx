import Text from '@/components/atoms/commons/Typography';
import Paragraph from '@/components/molecules/commons/Paragraph';
import Section from '@/components/molecules/commons/Section';

const WorkBlock = () => {
  return (
    <Section
      id="HeroBlock"
      container
      className="flex flex-col items-center justify-center py-16 "
    >
      <Paragraph
        className={'flex flex-col gap-4 lg:gap-6 lg:max-w-[1080px]'}
        title={'strategisch. visuell. digital.'}
        subTitle={
          'Wir sind Absolut, eine strategische Design- und Digital-Agentur, inhabergeführt und frei. Seit 2004 entwickeln wir identitätsprägende Marken und wirkungsvolle Kommunikation für das digitale Heute. Geht’s um Relevanz, brechen wir mit Konventionen: mutig, scharfsinnig und differenziert.'
        }
        size="h4"
        sizeSubtilte="paragraph"
      />

      <div className=" mb-[27px] lg:mb-8 mt-[200px] lg:mt-60">
        <Text as="h1" size="h1">
          WORK
        </Text>
      </div>
      <Paragraph
        className={'flex flex-col gap-4 lg:gap-6 lg:max-w-[1080px]'}
        title={'We make it happen.'}
        subTitle={
          ' Brand Storys, die Emotionen, Werte und Ziele verbinden. Inhaltlich stark und optisch bestechend. Das macht sie so verdammt erfolgreich.  Überzeuge dich selbst.'
        }
        size="h4"
        cls={'font-normal font-spykDisplay'}
        sizeSubtilte="paragraph"
      />
    </Section>
  );
};
export default WorkBlock;
//p-aa-l
