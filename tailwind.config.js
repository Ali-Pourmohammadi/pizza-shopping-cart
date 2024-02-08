export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    FontFamily:{
      sans: 'Roboto, sans-serif',
    },
    extend: {
      height :{
        screen:'100dvh',
      }
    },
  },
  plugins: [],
}