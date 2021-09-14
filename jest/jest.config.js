module.exports = {
  rootDir: '..',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/jest/svgrMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
};
