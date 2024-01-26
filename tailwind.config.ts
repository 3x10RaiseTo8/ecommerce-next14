import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  themes: [
    {
      mytheme: {
        primary: '#ff00f0',
        secondary: '#00ad00',
        accent: '#77b100',
        neutral: '#020504',
        'base-100': '#fff7ff',
        info: '#00d8ff',
        success: '#c1ec00',
        warning: '#ff7400',
        error: '#f50000',
        body: { 'background-color': '#e3e6e6' },
      },
    },
  ],
  plugins: [require('daisyui')],
};
export default config;
