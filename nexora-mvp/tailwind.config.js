module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0B0B0B',
          light: '#FFFFFF',
        },
        surface: {
          dark: '#1C1C1C',
        },
        accent: {
          gold: '#FFD700',
          hover: '#FFCC33',
        },
        text: {
          primary: {
            dark: '#FFFFFF',
            light: '#000000',
          },
          secondary: {
            dark: '#B0B0B0',
            light: '#4D4D4D',
          },
        },
        success: '#4CAF50',
        error: '#FF4C4C',
        info: '#00BFFF',
        gray: {
          900: '#0B0B0B',
          800: '#1C1C1C',
          500: '#B0B0B0',
        },
      },
      boxShadow: {
        gold: '0 4px 14px 0 rgba(255, 215, 0, 0.25)',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
