import localFont from 'next/font/local';

export const cameraPlain = localFont({
  src: [
    {
      path: './camera_plain/ABCCameraPlain-Black.woff2',
      weight: '400',
      style: 'normal'
    },
  ],
  display: 'swap',
  variable: '--font-cameraPlain'
});
export const spykDisplay = localFont({
  src: [
    {
  path: './spyk_display_light/SpykDisplay-Light.woff2',
  weight: '400',
  style: 'normal',
},
  ],
  display: 'swap',
  variable: '--font-spykDisplay'
});
export const diaType = localFont({
  src: [
   {
  path: './diatype_semi_mono/ABCDiatypeSemi-Mono-Regular.woff2',
  weight: '400',
  style: 'normal',
},
  ],
  display: 'swap',
  variable: '--font-diaType'
});
