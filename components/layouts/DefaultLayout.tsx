import AppHeader from '@/components/organisms/commons/AppHeader';
import { ReactNode } from 'react';

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main
        id="main"
        className="relative w-full transition-colors duration-700 z-1 bg-primary"
      >
        {children}
      </main>
      {/* <AppFooter /> */}
    </>
  );
};

export default DefaultLayout;
