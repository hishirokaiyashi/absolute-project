'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  container: boolean;
}

const Section = forwardRef<HTMLDivElement, IProps>(
  ({ container, className, children }, ref) => {
    const clsContainer = 'px-aa-l';

    return (
      <section
        ref={ref}
        className={cn(
          `box-border relative`,
          container && clsContainer,
          className
        )}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
