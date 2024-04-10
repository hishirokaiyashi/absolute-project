import Section from '@/components/molecules/commons/Section';
import VideoPlayer from '@/components/molecules/commons/VideoPlayer';
const HeroBlock = () => {
  return (
    <Section id="HeroBlock" container className="h-screen py-4 lg:py-5">
      <div className="relative h-full">
        <VideoPlayer
          aspectRatio={16 / 9}
          url={'https://player.vimeo.com/video/903550524?h=bdcaf20ffd'}
        />
      </div>
    </Section>
  );
};
export default HeroBlock;
//p-aa-l
