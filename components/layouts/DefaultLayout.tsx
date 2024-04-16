import AppHeader from '@/components/organisms/commons/AppHeader';
import { ReactNode } from 'react';
// import FormBlock from '../organisms/blocks/FormBlock';

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main id="main" className="relative w-full z-1 bg-primary">
        {children}
      </main>
      {/* <FormBlock /> */}
      {/* MODAL */}
      {/* <AppFooter /> */}
    </>
  );
};

export default DefaultLayout;
