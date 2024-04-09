import Images from "@/components/atoms/commons/Images";
import VideoPlayer from "@/components/molecules/commons/VideoPlayer";
import Image from "next/image";

const HeroBlock = () => {
  return (
    <div className="relative w-screen h-screen text-white bg-black">
      <VideoPlayer
        aspectRatio={16 / 9}
        url={"https://player.vimeo.com/video/903550524?h=bdcaf20ffd"}
      />
    </div>
  );
};

export default HeroBlock;
