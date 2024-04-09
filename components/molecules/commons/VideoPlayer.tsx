"use client";
import clsx from "clsx";
import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface IVideoPlayerProps {
  url: string;
  className?: string;
  aspectRatio: number;
}

const VideoPlayer = ({
  url,
  className,
  aspectRatio,
}: // containerWidth
IVideoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);
  const height = containerWidth;
  return (
    <div
      className={clsx("absolute w-full h-full top-0 ", className)}
      ref={containerRef}
    >
      {isClient && (
        <ReactPlayer
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
          className="lg:top-0"
          width="100%"
          playing={true}
          height="100%"
          muted
          loop={true}
          url={url}
          controls={true}
          playsinline={true}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
