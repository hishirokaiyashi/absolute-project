import { ImageElement } from '@/components/atoms/commons/ImageElement';
import Typography from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TeamMember from '@/components/molecules/commons/TeamMember';
import TitleDescription from '@/components/molecules/commons/TitleDescription';
import { ListTeamMembers } from '@/data/ListTeamMembers';

const TeamBlock = () => {
  return (
    <Section
      id="TeamBlock"
      container={true}
      className="flex flex-col overflow-x-hidden  items-center justify-center mt-[200px] lg:mt-60"
    >
      <div className="">
        <TitleDescription
          title="TEAM"
          subTitle="Absolut. Auch hier."
          description={
            'Herausforderungen sind unser Ding. Als Anstifter, Sparringspartner und Challenger. Als Strategen, Designer und Storyteller. Alle einzigartig in ihren Disziplinen und gesegnet mit ihren Skills. Im Teamwork verflochten eine unschlagbare Performance. Weil es eben immer noch ein Stück absoluter geht. Versprochen!'
          }
        />
      </div>
      <div className="grid w-full lg:grid-cols-3 lg:grid-rows-3 gap-y-[24px] ">
        {ListTeamMembers?.map((member, index) => {
          return (
            <div key={index}>
              <TeamMember
                src={member.src}
                name={member.name}
                description={member.description}
                srcNoBg={member.srcNoBg}
              />
            </div>
          );
        })}
        {/* <div className="flex flex-col lg:gap-[8px]">
          <div className="relative">
            <ImageElement
              className=" h-[80px] w-full lg:h-[527px] object-cover"
              fill={false}
              width={491}
              height={527}
              src="/images/imageElements/teamMembers/Cello.webp"
            />
            <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <ul className="w-[1800px] absolute flex p-0 m-0 justify-around flex-shrink-0 gap-[40px] font-black animate-[scroll_6s_linear_infinite] text-secondary text-nowrap font-cameraPlain">
                {['Graphic', 'BRanding', 'Wording', 'Design']?.map(
                  (member, index) => {
                    return (
                      <li key={index}>
                        <Typography as="h4" size="h5">
                          {member}
                        </Typography>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          <div>
            <Typography as="span" size="paragraph">
              Cello Angehrn
            </Typography>
          </div>
        </div> */}
      </div>
    </Section>
  );
};
export default TeamBlock;
