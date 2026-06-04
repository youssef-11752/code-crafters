/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2A5E',
          light: '#0D3575',
          dark: '#071E45',
        },
        secondary: {
          DEFAULT: '#D7263D',
          light: '#E8364E',
          dark: '#B51E32',
        },
        bg: '#F8F7F5',
        'text-dark': '#1F2937',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 42, 94, 0.08)',
        'card-hover': '0 8px 40px rgba(10, 42, 94, 0.14)',
      },
    },
  },
  plugins: [],
};
