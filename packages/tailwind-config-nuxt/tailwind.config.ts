import { Config } from 'tailwindcss';

export default <Config>{
  content: [
    // app content
    `pages/**/*.{vue,js,ts,jsx,tsx}`,
    `./app.{vue}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};
