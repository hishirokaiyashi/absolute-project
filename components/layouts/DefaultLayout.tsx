import { ReactNode } from 'react';
import AppFooter from '@/components/organisms/commons/AppFooter';
import AppHeader from '@/components/organisms/commons/AppHeader';

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main
        id="main"
        // TODO: use double quotes
        className={`transition-colors duration-700 relative z-1 bg-primary`}
      >
        {children}
      </main>
      {/* <AppFooter /> */}
    </>
  );
};

export default DefaultLayout;
