import { Locale } from '../../i18n.config';
import { cn } from '../../lib/utils';
// These styles apply to every route in the application
import '../globals.css';

import { cameraPlain, spykDisplay, diaType } from '../../public/fonts/font';
import DefaultLayout from '@/components/layouts/DefaultLayout';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html
      lang={params.lang}
      className={cn(
        `relative antialiased scroll-smooth bg-black`,
        cameraPlain.variable,
        spykDisplay.variable,
        diaType.variable
      )}
    >
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
