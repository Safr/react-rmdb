module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'html'],
  resetMocks: true,
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    },
  },
  setupFiles: ['<rootDir>/test-setup.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
