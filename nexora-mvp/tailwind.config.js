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
          dark: '#000000',
          light: '#FFFFFF',
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
            dark: '#B3B3B3',
            light: '#4D4D4D',
          },
        },
        error: {
          dark: '#FF4D4D',
          light: '#D32F2F',
        },
        success: {
          dark: '#4CAF50',
          light: '#388E3C',
        },
      },
      boxShadow: {
        gold: '0 4px 14px 0 rgba(255, 215, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
