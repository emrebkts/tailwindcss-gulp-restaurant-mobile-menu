/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: {
          DEFAULT: "#d9be5c",
          '50': '#fbf9ef',
          '100': '#f4eed1',
          '200': '#e8db9f',
          '300': '#d9be5c',
          '400': '#d5b14a',
          '500': '#cb9635',
          '600': '#b3762c',
          '700': '#955928',
          '800': '#7a4826',
          '900': '#653b22',
          '950': '#391f0f',
        },
      }
    },
  },
  plugins: [],
}

