module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js', '**/*.test.jsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!<rootDir>/*.js',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/[^/]+\\.js$'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
