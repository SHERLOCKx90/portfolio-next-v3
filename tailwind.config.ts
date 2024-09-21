import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        slideIn: {
          '0%':{ width: '0%'},
          '100%' : {width : '100%'},
        },
      },
      animation:{
        slideInnderline: 'slideIn 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;
