'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  container: boolean;
  fullScreen?: boolean;
  spacing?: 'small' | 'medium' | 'large';
}

const Section = forwardRef<HTMLDivElement, IProps>(
  ({ container, fullScreen = false, spacing = 'small', ...props }, ref) => {
    const clsContainer = 'px-absoluteAgentur-l';

    const renderContainer = () => {
      if (container) {
        return <div className={cn(clsContainer)}>{props.children}</div>;
      }

      return <>{props.children}</>;
    };

    return (
      <section
        ref={ref}
        {...props}
        className={cn(`transition-all box-border relative`, props.className)}
      >
        {renderContainer()}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
