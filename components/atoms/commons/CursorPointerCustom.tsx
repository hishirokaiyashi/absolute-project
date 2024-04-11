'use client';
import React, { useEffect, useRef, useState } from 'react';
import Text from './Typography';
import clsx from 'clsx';

interface ICustomCursor {
  cursorTitle?: string;
  id: string;
  isHovering?: boolean;
  subTitle?: string;
}
// Main CustomCursor component
const CustomCursor = ({
  cursorTitle,
  id,
  isHovering,
  subTitle,
}: ICustomCursor) => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const targetId = id;
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
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none z-5 ease-in`}
      />
      <div
        id="pointer"
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`flex flex-col lg:max-w-[180px] text-secondary translate-x-[16px] translate-y-[20px] p-0 fixed pointer-events-none z-5  `}
      >
        <Text as="span" size="cursorTitle">
          {cursorTitle}
        </Text>
        <Text as="span" size="cursorSubTitle">
          {subTitle}
        </Text>
      </div>
    </div>
  );
};

export default CustomCursor;
