/** @type {import('tailwindcss').Config} */
import { lightTheme, darkTheme } from './src/themes';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
