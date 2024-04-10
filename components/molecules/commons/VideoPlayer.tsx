'use client';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { twMerge } from 'tailwind-merge';
interface IProps {
  url: string;
  objectPosition?: { x: number; y: number };
  aspectRatio?: number;
  className?: string;
}
const VideoPlayer = ({
  url,
  objectPosition = {
    x: 50,
    y: 50
  },
  aspectRatio = 16 / 9,
  className = ''
}: IProps) => {
  const [videoSize, setVideoSize] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0
  });
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (ref && ref.current) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, aspectRatio, objectPosition.x, objectPosition.y]);
  return (
    <div
      className={twMerge('absolute w-full h-full top-0', className)}
      ref={ref}
    >
      {isClient && (
        <ReactPlayer
          playsinline={true}
          url={url}
          height={videoSize.height}
          width={videoSize.width}
          loop={true}
          muted
          style={{
            position: 'absolute',
            top: videoSize.top,
            left: videoSize.left,
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};
export default VideoPlayer;
