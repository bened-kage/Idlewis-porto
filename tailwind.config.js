/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        panel: '#111827',
        accent: '#38BDF8'
      },
      boxShadow: {
        glow: '0 0 45px rgba(56, 189, 248, 0.18)'
      }
    }
  },
  plugins: []
};
