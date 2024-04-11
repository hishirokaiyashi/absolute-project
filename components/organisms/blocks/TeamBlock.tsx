import Section from '@/components/molecules/commons/Section';
import TitleDescription from '@/components/molecules/commons/TitleDescription';

const TeamBlock = () => {
  return (
    <Section
      id="TeamBlock"
      container
      className="flex flex-col items-center justify-center mt-[200px] lg:mt-60"
    >
      <TitleDescription
        title="TEAM"
        subTitle="Absolut. Auch hier."
        description={
          'Herausforderungen sind unser Ding. Als Anstifter, Sparringspartner und Challenger. Als Strategen, Designer und Storyteller. Alle einzigartig in ihren Disziplinen und gesegnet mit ihren Skills. Im Teamwork verflochten eine unschlagbare Performance. Weil es eben immer noch ein Stück absoluter geht. Versprochen!'
        }
      />
    </Section>
  );
};
export default TeamBlock;
