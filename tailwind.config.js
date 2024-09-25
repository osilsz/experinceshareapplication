/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSansBold: ["PlusJakartaSans-Bold", "sans-serif"],
        PlusJakartaSansBoldItalic: ["PlusJakartaSans-BoldItalic", "sans-serif"],
        PlusJakartaSansExtraBold: ["PlusJakartaSans-ExtraBold", "sans-serif"],
        PlusJakartaSansExtraLight: ["PlusJakartaSans-ExtraLight", "sans-serif"],
        PlusJakartaSansExtraLightItalic: ["PlusJakartaSans-ExtraLightItalic", "sans-serif"],
        PlusJakartaSansItalic: ["PlusJakartaSans-Italic", "sans-serif"],
        PlusJakartaSansLight: ["PlusJakartaSans-Light", "sans-serif"],
        PlusJakartaSansLightItalic: ["PlusJakartaSans-LightItalic", "sans-serif"],
        PlusJakartaSansMedium: ["PlusJakartaSans-Medium", "sans-serif"],
        PlusJakartaSansRegular: ["PlusJakartaSans-Regular", "sans-serif"],
        PlusJakartaSansSemiBold: ["PlusJakartaSans-SemiBold", "sans-serif"],
        PlusJakartaSansSemiBoldItalic: ["PlusJakartaSans-SemiBoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}

