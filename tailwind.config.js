/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
        facebook: "#385185",
        link: "#385185",
      },
      backgroundImage: {
        "logo-pattern":
          "url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)",
      },
    },
  },
  plugins: [],
};
