/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
  extend: {
    colors: {
      primary: '#7c3aed',
      dark: '#0f172a',
      secondary: '#64748b'      
    },
    screens: {
      'xl' : '1320px',
    },
    },
  },
  plugins: [require("daisyui")],
}

