module.exports = {
    plugins: {
      'postcss-preset-env': {
        stage: 1,
        features: {
          'nesting-rules': true
        }
      },
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  };
  