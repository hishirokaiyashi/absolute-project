'use client';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { twMerge } from 'tailwind-merge';
import { useEventListener } from 'usehooks-ts';

interface IProps {
  url: string;
  setIsReady: (value: boolean) => void;
  isPlaying?: boolean;
  objectPosition: { x: number; y: number };
  aspectRatio?: number;
  className?: string;
}

const VideoPlayer = ({
  url,
  setIsReady,
  isPlaying,
  objectPosition,
  aspectRatio = 1.9,
  className = ''
}: IProps) => {
  const [videoSize, setVideoSize] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (ref && ref.current) {
      const viewHeight = ref.current?.clientHeight;
      const viewWidth = ref.current?.clientWidth;

      const videoWidth = viewHeight * aspectRatio;
      const videoHeight = viewWidth / aspectRatio;

      if (viewWidth <= videoWidth) {
        setVideoSize({
          width: videoWidth,
          height: viewHeight,
          left: -(videoWidth - viewWidth) * (objectPosition.x / 100),
          top: 0
        });
      } else {
        setVideoSize({
          width: viewWidth,
          height: videoHeight,
          left: 0,
          top: -(videoHeight - viewHeight) * (objectPosition.y / 100)
        });
      }
    }
  };

  useEffect(() => {
    if (ref && ref.current) {
      handleResize();
    }
  }, [ref]);

  useEventListener('resize', handleResize);
  return (
    <div
      className={twMerge('absolute w-full h-full top-0', className)}
      ref={ref}
    >
      <ReactPlayer
        playsinline={true}
        url={url}
        height={videoSize.height}
        width={videoSize.width}
        playing={isPlaying}
        loop={true}
        muted
        onStart={() => {
          setIsReady(true);
        }}
        style={{
          position: 'absolute',
          top: videoSize.top,
          left: videoSize.left,
          pointerEvents: 'none'
        }}
        config={{
          playerOptions: {
            dnt: true
          }
        }}
        ref={ref => {
          if (isPlaying) {
            // ref?.seekTo(0);
          }
        }}
      />
    </div>
  );
};

export default VideoPlayer;

