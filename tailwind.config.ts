import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcfdeb',
          100: '#f8fad3',
          200: '#f0f6a2',
          300: '#e6f06a',
          400: '#dce83d',
          500: '#D4FF3E', // The neon lime green
          600: '#a3d11b',
          700: '#7ba110',
          800: '#607e12',
          900: '#506a14',
          950: '#2a3a05',
        },
        darkbg: {
          DEFAULT: '#000000', // True black
          card: '#0a0a0a',    // Very dark grey for cards
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
