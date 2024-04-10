/** @type {import('tailwindcss').Config} */
const spaces = {
  'aa-m': 'var(--space-m)',
  'aa-l': 'var(--space-l)',
  'aa-xl': 'var(--space-xl)',
  'aa-xxl': 'var(--space-xxl)',
  'aa-xxxl': 'var(--space-xxxl)'
};
// --space-xxxl: 3.375rem; /* 54px */
//   --space-xxl: 2.5rem; /* 40px */
//   --space-xl: 2rem; /* 32px */
//   --space-l: 1.25rem; /* 20px */
// --space-m: 1rem /* 16px */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gap:{
        '40x': '2.5rem',
        '88x': '5.5rem'
      },
      colors: {
        primary: 'var(--primary-hex)',
        secondary: 'var(--secondary-hex)'
      },
      fontFamily: {
        cameraPlain: ['var(--font-cameraPlain)'],
        spykDisplay: ['var(--font-spykDisplay)'],
        diaType: ['var(--font-diaType)']
      },
      spacing: spaces,
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
            fontWeight: '900'
          }
        ],
        '200x': [
          '12.5rem',
          {
            lineHeight: '10.625rem',
            letterSpacing: '0.01px',
            fontWeight: '900'
          }
        ],
        '120x': [
          '7.5rem',
          {
            lineHeight: '6.375rem',
            letterSpacing: '0.01px',
            fontWeight: '900'
          }
        ],
        '80x': [
          '5rem',
          {
            lineHeight: '6rem',
            letterSpacing: '0.01px',
            fontWeight: '600'
          }
        ],
        '40x': [
          '2.5rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '0.01px',
            fontWeight: '500'
          }
        ],
        '18x': [
          '1.125rem',
          {
            lineHeight: '1.6875rem',
            letterSpacing: '0.01px',
            fontWeight: '500'
          }
        ],
        // MOBILE ONLY
        '88x': [
          '5.5rem',
          {
            lineHeight: '4.675rem',
            letterSpacing: '0.01px',
            fontWeight: '900'
          }
        ],
        '60x': [
          '3.75rem',
          {
            lineHeight: '3.375rem',
            letterSpacing: '0.01px',
            fontWeight: '900'
          }
        ],
        '40x': [
          '2.5rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '0.01px',
            fontWeight: '900'
          }
        ],
        '24x': [
          '1.5rem',
          {
            lineHeight: '1.8rem',
            letterSpacing: '0.01px',
            fontWeight: '500'
          }
        ],
        '14x': [
          '0.875rem',
          {
            lineHeight: '1.225rem',
            letterSpacing: '0.01px',
            fontWeight: '500'
          }
        ]
      }
    }
  },
  plugins: []
};
