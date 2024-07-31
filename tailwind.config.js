// tailwind.config.js
export default {
  content: [
    './src/views/**/*.ejs', // Adjust this path based on where your EJS files are located
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
