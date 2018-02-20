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
  },
  verbose: true,
};

