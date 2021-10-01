module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      primary: "#212121",
      secondary: "#323232",
      tertiary: "#14FFEC",
      quaternary: "#E4F9F5",
    },
    textColor: {
      primary: "#212121",
      secondary: "#323232",
      tertiary: "#14FFEC",
      quaternary: "#E4F9F5",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};