module.exports = {
  roots: ['<rootDir>/packages'],
  preset: '@testing-library/react-native',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@components': '<rootDir>/packages/components',
    '@main': '<rootDir>/packages/main',
    '@pokemon': '<rootDir>/packages/pokemon',
  },
};
