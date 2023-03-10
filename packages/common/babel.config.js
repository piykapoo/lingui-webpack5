module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        development: false,
        runtime: 'automatic'
      },
      '@babel/preset-typescript'
    ]
  ],
};
