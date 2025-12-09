/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#069C26', // The bright green
        dark: '#052F1E',    // The deep forest green
        mid: '#5F725F',     // Muted green for text
        light: '#F3F5F3',   // Very light gray/green background
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        header: ['Oswald', 'sans-serif'], // We will use font-header for titles
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1546519638-68e109498ee3?q=80&w=2500&auto=format&fit=crop')", // Placeholder Sri Lanka mountain
      }
    },
  },
  plugins: [],
}