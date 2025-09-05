/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}", // App Router 경로
    "./src/components/**/*.{ts,tsx}", // 컴포넌트 경로 (필요하면)
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
