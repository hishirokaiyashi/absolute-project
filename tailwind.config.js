/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gap: {
        '40x': '2.5rem',
        '88x': '5.5rem',
      },
      colors: {
        primary: '#1c1c1c',
        secondary: '#ececec',
        errors: '#FF4D00',
      },
      fontFamily: {
        cameraPlain: ['var(--font-cameraPlain)'],
        spykDisplay: ['var(--font-spykDisplay)'],
        diaType: ['var(--font-diaType)'],
      },

      spacing: {
        'aa-m': '1rem',
        'aa-l': '1.25rem',
        'aa-xl': '2rem',
        'aa-xxl': '2.5rem',
        'aa-xxxl': '3.375rem',
      },
      maxWidth: {
        maxWidthLayout: 'var(--container-layout-px)',
      },
      fontSize: {
        // DESKTOP ONLY
        '380x': [
          '23.75rem',
          {
            lineHeight: '20.1875rem',
            letterSpacing: '7.6px',
          },
        ],
        '200x': [
          '12.5rem',
          {
            lineHeight: '10.625rem',
            letterSpacing: '7.6px',
            fontWeight: '900',
          },
        ],
        '120x': [
          '7.5rem',
          {
            lineHeight: '6.375rem',
            letterSpacing: '0.01px',
            fontWeight: '900',
          },
        ],
        '80x': [
          '5rem',
          {
            lineHeight: '6rem',
            letterSpacing: '0.01px',
          },
        ],
        '40x': [
          '2.5rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '0.01px',
            fontWeight: '500',
          },
        ],
        '18x': [
          '1.125rem',
          {
            lineHeight: '1.6875rem',
            letterSpacing: '0.01px',
            fontWeight: '400',
          },
        ],
        // MOBILE ONLY
        '88x': [
          '5.5rem',
          {
            lineHeight: '4.675rem',
            letterSpacing: '0.01px',
            fontWeight: '900',
          },
        ],
        '60x': [
          '3.75rem',
          {
            lineHeight: '3.375rem',
            letterSpacing: '0.01px',
            fontWeight: '900',
          },
        ],
        '40x-mb': [
          '2.5rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '0.01px',
            fontWeight: '900',
          },
        ],
        '24x': [
          '1.5rem',
          {
            lineHeight: '1.8rem',
            letterSpacing: '0.01px',
            fontWeight: '500',
          },
        ],
        '14x': [
          '0.875rem',
          {
            lineHeight: '1.225rem',
            letterSpacing: '0.01px',
          },
        ],
      },
    },
  },
  plugins: [],
};
