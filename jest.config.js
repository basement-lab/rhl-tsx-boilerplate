/**
 * SEE: https://facebook.github.io/jest/docs/en/configuration.html
*/

module.exports = {
  collectCoverage: false,
  globals: {
    __DEV__: true,
    DEBUG: false,

    'ts-jest': {
      enableTsDiagnostics: true,
      useBabelrc: true,
    }
  },
  moduleDirectories: [
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'tsx',
    'ts',
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components/$1',
    '\\.(css|scss)$': '<rootDir>/test/stubs/styles.js',
  },
  roots: [
    '<rootDir>/src/',
  ],
  setupFiles: [
    'raf/polyfill',
  ],
  setupTestFrameworkScriptFile: './test/setup.jest.ts',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/*.test.(js|jsx|ts|tsx)',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
  },
  verbose: true,
};

