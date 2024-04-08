// import localFont from 'next/font/local';

// export const bocadilloFont = localFont({
//   src: [
//     {
//       path: '../public/fonts/Bocadillo-Regular.ttf',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../public/fonts/Bocadillo-Regular.woff',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../public/fonts/Bocadillo-Regular.woff2',
//       weight: '400',
//       style: 'normal'
//     }
//   ],
//   display: 'swap',
//   variable: '--font-bocadillo'
// });
import { Inter } from 'next/font/google';

export const interFont = Inter({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
