'use client';
import React, { useEffect, useRef, useState } from 'react';
import Typography from './Typography';
import clsx from 'clsx';

interface ICustomCursorProps {
  cursorTitle?: string;
  id: number | string;
  isHovering?: boolean;
  subTitle?: string;
}

interface IPostion {
  x: number;
  y: number;
}
// Main CustomCursor component
const CustomCursor = ({
  cursorTitle,
  id,
  isHovering,
  subTitle,
}: ICustomCursorProps) => {
  // Reference to the cursor element
  // State to track cursor position
  const [position, setPosition] = useState<IPostion>({ x: 0, y: 0 });

  useEffect(() => {
    const targetId = id.toString();
    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (targetId) {
      const parentElement = document.getElementById(targetId);
      if (parentElement) {
        parentElement.addEventListener('mousemove', handleMouseMove);

        return () => {
          parentElement.removeEventListener('mousemove', handleMouseMove);
        };
      }
    }

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col',
        isHovering ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div
        id="pointer"
        style={{ top: position.y, left: position.x }}
        className="flex flex-col lg:max-w-[180px] Typography-secondary translate-x-[16px] translate-y-[20px] p-0 fixed pointer-events-none z-5"
      >
        <Typography as="span" size="cursorTitle">
          {cursorTitle}
        </Typography>
        <Typography as="span" size="cursorSubTitle">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default CustomCursor;
