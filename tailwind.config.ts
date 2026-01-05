import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fffa',
          100: '#b3fff5',
          500: '#2ecc71',
          600: '#27ae60',
        },
        text: {
          dark: '#2c3e50',
          light: '#7f8c8d',
        },
      },
      backgroundColor: {
        page: '#f8f9fa',
        sidebar: '#27a963',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0 4px 12px rgba(0, 0, 0, 0.1)',
        lg: '0 6px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
};

export default config;