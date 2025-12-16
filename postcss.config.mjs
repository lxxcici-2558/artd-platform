// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 注意这里改成了这个包名
    autoprefixer: {},
  },
};

export default config;