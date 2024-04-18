'use client';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import Typography from '@/components/atoms/commons/Typography';
import Section from '@/components/molecules/commons/Section';
import TeamMember from '@/components/molecules/commons/TeamMember';
import TitleDescription from '@/components/molecules/commons/TitleDescription';
import { ListTeamMembers } from '@/data/ListTeamMembers';
import clsx from 'clsx';
import { useState } from 'react';

const TeamBlock = () => {
  const [isHoverMember, setIsHoverMember] = useState<string>();
  return (
    <Section
      id="TeamBlock"
      container={true}
      className="flex flex-col overflow-x-hidden items-center justify-center mt-[200px] lg:mt-60"
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
      <div className="grid w-full grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 gap-y-[24px] ">
        {ListTeamMembers?.map((member, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'z-1 opacity-100 cursor-pointer transition-opacity duration-500 ease-out',
                typeof isHoverMember !== 'undefined' &&
                  isHoverMember !== `member-${index}` &&
                  'lg:opacity-15',
              )}
              onMouseOver={() => setIsHoverMember(`member-${index}`)}
              onMouseLeave={() => setIsHoverMember(undefined)}
            >
              <TeamMember
                positionImage={index}
                src={member.src}
                name={member.name}
                description={member.description}
                srcNoBg={member.srcNoBg}
              />
            </div>
          );
        })}
        <div
          className={clsx(
            'z-1 flex flex-col opacity-100 transition-opacity duration-500 ease-out justify-between w-full cursor-pointer py-[56px] lg:px-[24px] lg:p-[30px]',
            typeof isHoverMember !== 'undefined' &&
              isHoverMember !== `connection-element-grid` &&
              'lg:opacity-15',
          )}
          onMouseOver={() => setIsHoverMember(`connection-element-grid`)}
          onMouseLeave={() => setIsHoverMember(undefined)}
        >
          <div className="flex flex-col gap-[32px] lg:gap-[24px]">
            <div className="text-secondary uppercase max-w-[295px] font-cameraPlain lg:max-w-[431px]">
              <Typography as="p" size="h5Second">
                What about you?
              </Typography>
            </div>
            <Typography as="p" size="paragraph">
              Pitch Winner*in, Troubleshooter*in, Grafiktalent,
              Detailverliebte*r, Aufgabenlöser*in, kreativer Geek? Sehr cool,
              wir sollten uns kennenlernen.
            </Typography>
          </div>
          <div className="pb-[58px] pt-[56px] lg:pt-0 lg:pb-[30px]">
            <ButtonWithIcon
              type="button"
              icon={
                <div className="flex items-center">
                  <span className="w-[16px] h-[16px] ml-4 border-2 border-secondary rounded-full transition-colors group-hover:bg-secondary"></span>
                </div>
              }
            >
              LET&apos;S CONNECT
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default TeamBlock;
