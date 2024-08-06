
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herb-pattern': "url('/src/pages/images/herb1.jpg')", // Update the path if needed
      },
    },
  },
  plugins: [],
}

