import Text from '@/components/atoms/commons/Typography';
import Paragraph from '@/components/molecules/commons/ContainerElement';
import Section from '@/components/molecules/commons/Section';

const TeamBlock = () => {
  return (
    <Section
      id="TeamBlock"
      container
      className="flex flex-col items-center pt-[100px] lg:pt-0 pb-[80px] lg:pb-16 justify-center "
    >
      <div className="w-full lg:pb-0 pb-[27px]">
        <Text
          as="h2"
          size="h2"
          cls="lg:text-[25vw] lg:leading-[85%] font-cameraPlain "
        >
          TEAM
        </Text>
      </div>
      <Paragraph
        className={'flex flex-col gap-4 lg:gap-6 lg:max-w-[1080px] lg:mt-8 '}
        title={'Absolut. Auch hier.'}
        subTitle={
          'Herausforderungen sind unser Ding. Als Anstifter, Sparringspartner und Challenger. Als Strategen, Designer und Storyteller. Alle einzigartig in ihren Disziplinen und gesegnet mit ihren Skills. Im Teamwork verflochten eine unschlagbare Performance. Weil es eben immer noch ein Stück absoluter geht. Versprochen!'
        }
        size="h4"
        cls={'font-normal font-spykDisplay '}
        sizeSubtilte="paragraph"
      />
    </Section>
  );
};
export default TeamBlock;
