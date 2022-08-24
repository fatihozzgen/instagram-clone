/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-pattern":
          "url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)",
      },
    },
  },
  plugins: [],
};
