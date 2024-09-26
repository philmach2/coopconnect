/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        base: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.375rem", // 22px
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: { fontSize: theme("fontSize.base") },
        p: { fontSize: theme("fontSize.base") },
      });
    },
  ],
};
