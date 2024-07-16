/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: '250px', // New xs breakpoint
        s: '350px', // New xs breakpoint
        sm: '640px', // Default sm breakpoint
        md: '768px', // Default md breakpoint
        lg: '1024px', // Default lg breakpoint
        xl: '1280px', // Default xl breakpoint
        '2xl': '1536px', // Default 2xl breakpoint
      },
    },
  },
  plugins: [],
}