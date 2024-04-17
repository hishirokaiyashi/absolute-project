'use client';

import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

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
        className={twMerge(container && clsContainer, className)}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
