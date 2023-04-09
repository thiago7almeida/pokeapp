module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './packages/components',
          '@main': './packages/main',
          '@pokemon': './packages/pokemon',
        },
      },
    ],
  ],
};
