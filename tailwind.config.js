/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A237E",    // Deep Navy from logo
        secondary: "#F4511E",  // Vibrant Orange from logo
        accent: "#FFCA28",     // Warm Yellow
        light: "#F8FAFC",      
        dark: "#0F172A",       
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};