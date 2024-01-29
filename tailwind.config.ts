import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'turq': {
          '50': '#eefffb',
          '100': '#c4fff3',
          '200': '#8affea',
          '300': '#48ffde',
          '400': '#32f1d4',
          '500': '#00d2b6',
          '600': '#00aa96',
          '700': '#008778',
          '800': '#056a61',
          '900': '#0a5750',
          '950': '#003634',
        },  'purple': {
          '50': '#f9f5ff',
          '100': '#f1e8ff',
          '200': '#e5d5ff',
          '300': '#c59ffe',
          '400': '#b684fc',
          '500': '#9a55f7',
          '600': '#8332eb',
          '700': '#6f21cf',
          '800': '#5f21a8',
          '900': '#4f1c87',
          '950': '#330764',
        },   'blue': {
          '50': '#e8f7ff',
          '100': '#d5efff',
          '200': '#b3dfff',
          '300': '#85c7ff',
          '400': '#56a0ff',
          '500': '#2f79ff',
          '600': '#0c4bff',
          '700': '#0040ff',
          '800': '#063bcd',
          '900': '#103a9f',
          '950': '#0a205c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
